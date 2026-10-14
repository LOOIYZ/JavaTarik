// ============================================================
// JavaTarik × Firebase Cloud Sync & Authentication Module
// Supports cross-device progress resumption via Email/Password & Cloud Firestore
// ============================================================

import { firebaseConfig, isFirebaseConfigured } from '../firebase_config.js';

// Global state
let firebaseApp = null;
let firebaseAuth = null;
let firestoreDb = null;
let currentUser = null;
let unsubscribeSnapshot = null;
let syncStatus = 'idle'; // 'idle' | 'syncing' | 'synced' | 'error'
let lastSyncedTime = null;

// Firebase module references loaded dynamically from CDN
let fbAuthMethods = null;
let fbFirestoreMethods = null;

// ------------------------------------------------------------
// Initialize Firebase
// ------------------------------------------------------------
async function initFirebase() {
  if (!isFirebaseConfigured()) {
    console.info("[JavaTarik Sync] Firebase is not yet configured with real API keys in firebase_config.js.");
    updateNavButton(null, 'unconfigured');
    return false;
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js");
    const { 
      getAuth, 
      createUserWithEmailAndPassword, 
      signInWithEmailAndPassword, 
      signOut, 
      sendPasswordResetEmail, 
      onAuthStateChanged 
    } = await import("https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js");
    
    const { 
      getFirestore, 
      doc, 
      setDoc, 
      getDoc, 
      onSnapshot 
    } = await import("https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js");

    firebaseApp = initializeApp(firebaseConfig);
    firebaseAuth = getAuth(firebaseApp);
    firestoreDb = getFirestore(firebaseApp);

    fbAuthMethods = {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      sendPasswordResetEmail,
      onAuthStateChanged
    };

    fbFirestoreMethods = {
      doc,
      setDoc,
      getDoc,
      onSnapshot
    };

    // Listen to Auth state changes
    fbAuthMethods.onAuthStateChanged(firebaseAuth, handleAuthStateChange);
    return true;
  } catch (err) {
    console.error("[JavaTarik Sync] Error loading Firebase SDK:", err);
    updateNavButton(null, 'error');
    return false;
  }
}

// ------------------------------------------------------------
// Auth State Handler
// ------------------------------------------------------------
async function handleAuthStateChange(user) {
  currentUser = user;
  
  if (user) {
    console.info("[JavaTarik Sync] User signed in:", user.email);
    updateNavButton(user, 'syncing');
    
    // 1. Initial fetch and smart two-way merge FIRST
    await performInitialSync(user);

    // 2. ONLY AFTER initial merge is complete, subscribe to realtime updates
    startRealtimeSync(user);
  } else {
    console.info("[JavaTarik Sync] User signed out.");
    if (unsubscribeSnapshot) {
      unsubscribeSnapshot();
      unsubscribeSnapshot = null;
    }
    updateNavButton(null, 'idle');
  }

  // Notify the rest of the application
  window.dispatchEvent(new CustomEvent('kopi:auth-change', { detail: { user } }));
  updateModalUI();
}

// ------------------------------------------------------------
// Cloud Firestore Realtime Sync
// ------------------------------------------------------------
function startRealtimeSync(user) {
  if (!firestoreDb || !fbFirestoreMethods) return;

  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }

  const userProgressDocRef = fbFirestoreMethods.doc(firestoreDb, 'users', user.uid, 'progress', 'current');
  
  unsubscribeSnapshot = fbFirestoreMethods.onSnapshot(userProgressDocRef, (docSnap) => {
    if (docSnap.exists()) {
      const cloudData = docSnap.data();
      // Only process remote changes if not currently local push
      if (cloudData && cloudData.lastUpdatedBy !== getDeviceId()) {
        console.info("[JavaTarik Sync] Received remote progress update from another device.");
        applyCloudDataToLocal(cloudData, false);
      }
    }
  }, (err) => {
    console.warn("[JavaTarik Sync] Realtime listener error:", err);
    updateNavButton(user, 'error');
  });
}

// Unique device fingerprint so this device doesn't trigger its own echo
function getDeviceId() {
  let devId = localStorage.getItem('kopi-device-id');
  if (!devId) {
    devId = 'dev_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
    localStorage.setItem('kopi-device-id', devId);
  }
  return devId;
}

// ------------------------------------------------------------
// Smart Bidirectional Progress Merge
// ------------------------------------------------------------
async function performInitialSync(user) {
  if (!firestoreDb || !fbFirestoreMethods) return;

  syncStatus = 'syncing';
  updateNavButton(user, 'syncing');

  try {
    const docRef = fbFirestoreMethods.doc(firestoreDb, 'users', user.uid, 'progress', 'current');
    const docSnap = await fbFirestoreMethods.getDoc(docRef);

    const localData = getLocalProgressData();

    if (docSnap.exists()) {
      const cloudData = docSnap.data();
      console.info("[JavaTarik Sync] Cloud progress document found. Merging with local progress...");

      const merged = mergeProgressDatasets(localData, cloudData);

      // Save merged result back to local
      applyCloudDataToLocal(merged, true);

      // Push merged state back to cloud to keep both devices fully in sync
      await fbFirestoreMethods.setDoc(docRef, {
        ...merged,
        lastUpdatedBy: getDeviceId(),
        lastSyncedAt: Date.now()
      }, { merge: true });

    } else {
      console.info("[JavaTarik Sync] No existing cloud record. Uploading local progress as initial snapshot...");
      await fbFirestoreMethods.setDoc(docRef, {
        ...localData,
        lastUpdatedBy: getDeviceId(),
        lastSyncedAt: Date.now()
      });
    }

    syncStatus = 'synced';
    lastSyncedTime = Date.now();
    updateNavButton(user, 'synced');
  } catch (err) {
    console.error("[JavaTarik Sync] Initial sync failed:", err);
    syncStatus = 'error';
    updateNavButton(user, 'error');
  }
}

// Collect local progress from localStorage
function getLocalProgressData() {
  let rawProg = null;
  let rawDone = [];
  let rawQuiz = {};

  try {
    rawProg = JSON.parse(localStorage.getItem("kopi-study-progress") || "null");
  } catch (e) { }

  try {
    rawDone = JSON.parse(localStorage.getItem("kopi-done-chapters") || "[]");
  } catch (e) { }

  try {
    if (rawProg && rawProg.quizHistory) rawQuiz = rawProg.quizHistory;
  } catch (e) { }

  return {
    version: 1,
    lastChapter: rawProg ? rawProg.lastChapter : 0,
    lastScrollTop: rawProg ? rawProg.lastScrollTop : 0,
    lastScrollPct: rawProg ? rawProg.lastScrollPct : 0,
    lastVisited: rawProg ? rawProg.lastVisited : Date.now(),
    completedChapters: Array.from(new Set([
      ...(Array.isArray(rawProg?.completedChapters) ? rawProg.completedChapters : []),
      ...(Array.isArray(rawDone) ? rawDone : [])
    ])).map(n => parseInt(n, 10)).filter(n => !isNaN(n)),
    quizHistory: rawQuiz,
    fontSizeIdx: rawProg ? rawProg.fontSizeIdx : 1,
    theme: localStorage.getItem("kopi-theme") || "kopi"
  };
}

// Merge algorithm: NEVER lose completed chapters or quiz attempts
function mergeProgressDatasets(local, cloud) {
  // 1. Union of completed chapters (normalized to numbers)
  const allDone = Array.from(new Set([
    ...(Array.isArray(local?.completedChapters) ? local.completedChapters : []),
    ...(Array.isArray(cloud?.completedChapters) ? cloud.completedChapters : [])
  ])).map(n => parseInt(n, 10)).filter(n => !isNaN(n));

  // 2. Merge quiz history (take best score / latest attempt per set)
  const mergedQuizzes = { ...(cloud?.quizHistory || {}), ...(local?.quizHistory || {}) };
  if (cloud?.quizHistory && local?.quizHistory) {
    for (const [k, cloudVal] of Object.entries(cloud.quizHistory)) {
      const localVal = local.quizHistory[k];
      if (localVal && cloudVal) {
        mergedQuizzes[k] = {
          score: Math.max(localVal.score || 0, cloudVal.score || 0),
          total: localVal.total || cloudVal.total || 10,
          date: Math.max(localVal.date || 0, cloudVal.date || 0)
        };
      }
    }
  }

  // 3. Last chapter & scroll: pick the one with most recent lastVisited
  const localTime = local?.lastVisited || 0;
  const cloudTime = cloud?.lastVisited || 0;
  const pickCloudRecent = cloudTime > localTime;

  return {
    version: 1,
    lastChapter: pickCloudRecent ? cloud.lastChapter : (local?.lastChapter ?? 0),
    lastScrollTop: pickCloudRecent ? cloud.lastScrollTop : (local?.lastScrollTop ?? 0),
    lastScrollPct: pickCloudRecent ? cloud.lastScrollPct : (local?.lastScrollPct ?? 0),
    lastVisited: Math.max(localTime, cloudTime, Date.now()),
    completedChapters: allDone,
    quizHistory: mergedQuizzes,
    fontSizeIdx: local?.fontSizeIdx ?? cloud?.fontSizeIdx ?? 1,
    theme: local?.theme || cloud?.theme || "kopi"
  };
}

// Apply cloud progress to localStorage and trigger DOM refresh
function applyCloudDataToLocal(cloudData, silent = false, forceOverwrite = false) {
  try {
    let localDone = [];
    try {
      localDone = JSON.parse(localStorage.getItem("kopi-done-chapters") || "[]");
    } catch (e) { }

    // Always take the UNION of completed chapters (normalized to numbers) unless forceOverwrite is requested
    let mergedChapters;
    if (forceOverwrite) {
      mergedChapters = Array.isArray(cloudData.completedChapters) ? cloudData.completedChapters : [];
    } else {
      mergedChapters = Array.from(new Set([
        ...(Array.isArray(localDone) ? localDone : []),
        ...(Array.isArray(cloudData.completedChapters) ? cloudData.completedChapters : [])
      ]));
    }

    mergedChapters = mergedChapters
      .map(n => parseInt(n, 10))
      .filter(n => !isNaN(n));

    const mergedPayload = {
      ...cloudData,
      completedChapters: mergedChapters
    };

    localStorage.setItem("kopi-study-progress", JSON.stringify(mergedPayload));
    localStorage.setItem("kopi-done-chapters", JSON.stringify(mergedChapters));

    // Broadcast to page so study progress bars, chapter checks, and stats update immediately
    window.dispatchEvent(new CustomEvent('kopi:progress-synced', { 
      detail: { data: mergedPayload, silent } 
    }));

    lastSyncedTime = Date.now();
    syncStatus = 'synced';
    if (currentUser) updateNavButton(currentUser, 'synced');
    updateModalUI();
  } catch (e) {
    console.warn("[JavaTarik Sync] Could not write cloud data to localStorage:", e);
  }
}

// ------------------------------------------------------------
// Push Local Progress to Cloud (Debounced)
// ------------------------------------------------------------
let pushTimer = null;
export async function pushProgressToCloud(progressPayload) {
  if (!currentUser || !firestoreDb || !fbFirestoreMethods) return;

  syncStatus = 'syncing';
  updateNavButton(currentUser, 'syncing');

  if (pushTimer) clearTimeout(pushTimer);

  pushTimer = setTimeout(async () => {
    try {
      const docRef = fbFirestoreMethods.doc(firestoreDb, 'users', currentUser.uid, 'progress', 'current');
      const payload = {
        ...progressPayload,
        lastUpdatedBy: getDeviceId(),
        lastSyncedAt: Date.now()
      };

      await fbFirestoreMethods.setDoc(docRef, payload, { merge: true });
      syncStatus = 'synced';
      lastSyncedTime = Date.now();
      updateNavButton(currentUser, 'synced');
      updateModalUI();
      console.info("[JavaTarik Sync] Progress uploaded to Cloud Firestore ✓");
    } catch (err) {
      console.error("[JavaTarik Sync] Cloud upload failed:", err);
      syncStatus = 'error';
      updateNavButton(currentUser, 'error');
    }
  }, 800);
}

// ------------------------------------------------------------
// Authentication API
// ------------------------------------------------------------
export async function signIn(email, password) {
  if (!firebaseAuth || !fbAuthMethods) {
    throw new Error(isFirebaseConfigured() ? "Firebase initializing..." : "Please configure firebase_config.js first.");
  }
  return await fbAuthMethods.signInWithEmailAndPassword(firebaseAuth, email, password);
}

export async function signUp(email, password) {
  if (!firebaseAuth || !fbAuthMethods) {
    throw new Error(isFirebaseConfigured() ? "Firebase initializing..." : "Please configure firebase_config.js first.");
  }
  return await fbAuthMethods.createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export async function signOutUser() {
  if (!firebaseAuth || !fbAuthMethods) return;
  return await fbAuthMethods.signOut(firebaseAuth);
}

export async function resetPassword(email) {
  if (!firebaseAuth || !fbAuthMethods) {
    throw new Error(isFirebaseConfigured() ? "Firebase initializing..." : "Please configure firebase_config.js first.");
  }
  return await fbAuthMethods.sendPasswordResetEmail(firebaseAuth, email);
}

// ------------------------------------------------------------
// UI: Header Button State Controller
// ------------------------------------------------------------
function updateNavButton(user, status = 'idle') {
  const btn = document.getElementById('account-btn');
  if (!btn) return;

  const label = btn.querySelector('.account-label-text');
  const avatar = btn.querySelector('.account-avatar-badge');
  const dot = btn.querySelector('.account-sync-dot');

  if (user) {
    btn.classList.add('is-logged-in');
    const emailPrefix = user.email ? user.email.split('@')[0] : 'Student';
    if (label) label.textContent = emailPrefix;
    if (avatar) avatar.textContent = emailPrefix.charAt(0).toUpperCase();

    if (dot) {
      dot.className = 'account-sync-dot ' + (status === 'syncing' ? 'syncing' : status === 'error' ? 'error' : 'synced');
      dot.title = status === 'syncing' ? 'Syncing with cloud...' : status === 'error' ? 'Sync error' : 'Synced with cloud';
    }
  } else {
    btn.classList.remove('is-logged-in');
    if (label) label.textContent = 'Sync';
    if (avatar) avatar.textContent = '☁️';
    if (dot) {
      dot.className = 'account-sync-dot' + (status === 'unconfigured' ? ' error' : '');
      dot.title = status === 'unconfigured' ? 'Firebase setup required' : 'Log in to sync progress across devices';
    }
  }
}

// ------------------------------------------------------------
// UI: Modal Rendering & Event Binding
// ------------------------------------------------------------
function ensureModalDOM() {
  if (document.getElementById('kopi-auth-backdrop')) return;

  const backdrop = document.createElement('div');
  backdrop.id = 'kopi-auth-backdrop';
  backdrop.className = 'kopi-auth-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-label', 'Account and Cloud Sync');

  backdrop.innerHTML = `
    <div class="kopi-auth-modal" id="kopi-auth-modal">
      <!-- Header -->
      <div class="kopi-auth-header">
        <div class="kopi-auth-brand">
          <div class="kopi-auth-icon" aria-hidden="true">☕</div>
          <div class="kopi-auth-titles">
            <h3>Kopi Cloud Sync</h3>
            <p>Resume your progress on any phone, tablet, or PC</p>
          </div>
        </div>
        <button type="button" class="kopi-auth-close-btn" id="kopi-auth-close-btn" aria-label="Close dialog">✕</button>
      </div>

      <!-- Body -->
      <div class="kopi-auth-body" id="kopi-auth-body">
        <!-- Injected dynamically based on auth state -->
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  // Close handlers
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeAuthModal();
  });

  const closeBtn = backdrop.querySelector('#kopi-auth-close-btn');
  if (closeBtn) closeBtn.onclick = () => closeAuthModal();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeAuthModal();
    }
  });
}

let activeAuthTab = 'signin'; // 'signin' | 'signup' | 'reset'

function updateModalUI() {
  const body = document.getElementById('kopi-auth-body');
  if (!body) return;

  const isConfigured = isFirebaseConfigured();

  // 1. If user is logged in: Show Dashboard
  if (currentUser) {
    const email = currentUser.email || 'student@example.com';
    const initial = email.charAt(0).toUpperCase();
    const local = getLocalProgressData();
    const doneCount = local.completedChapters ? local.completedChapters.length : 0;
    const quizCount = Object.keys(local.quizHistory || {}).length;
    const timeFormatted = lastSyncedTime ? new Date(lastSyncedTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never';

    body.innerHTML = `
      <div class="kopi-dashboard-wrap">
        <!-- User Info Card -->
        <div class="kopi-user-card">
          <div class="kopi-user-avatar">${initial}</div>
          <div class="kopi-user-info">
            <div class="kopi-user-email">${email}</div>
            <div class="kopi-user-status">
              <span>●</span> Cloud Sync Active & Realtime
            </div>
          </div>
        </div>

        <!-- Telemetry Stats -->
        <div class="kopi-sync-stats-grid">
          <div class="kopi-stat-card">
            <span class="kopi-stat-num">${doneCount}</span>
            <span class="kopi-stat-label">Chapters Completed</span>
            ${doneCount > 0 ? `<div style="font-size:0.75rem; color:var(--ink-muted, #64748b); margin-top:4px; font-weight:500;">(${local.completedChapters.map(i => 'Ch ' + (i + 1)).join(', ')})</div>` : ''}
          </div>
          <div class="kopi-stat-card">
            <span class="kopi-stat-num">${quizCount}</span>
            <span class="kopi-stat-label">Quiz Sets Taken</span>
          </div>
        </div>

        <!-- Sync Actions -->
        <div class="kopi-dashboard-actions">
          <button type="button" class="kopi-submit-btn" id="kopi-force-sync-btn">
            <span>🔄 Sync Now with Cloud</span>
          </button>
          <button type="button" class="kopi-btn-secondary" id="kopi-reload-cloud-btn">
            <span>📥 Pull & Overwrite from Cloud</span>
          </button>
          <button type="button" class="kopi-btn-danger" id="kopi-signout-btn">
            <span>🚪 Sign Out</span>
          </button>
        </div>

        <p style="font-size: 0.72rem; color: var(--ink-muted, #64748b); text-align: center; margin: 0;">
          Last cloud synchronization: <strong>${timeFormatted}</strong>
        </p>
      </div>
    `;

    // Bind dashboard buttons
    const forceSyncBtn = body.querySelector('#kopi-force-sync-btn');
    if (forceSyncBtn) {
      forceSyncBtn.onclick = async () => {
        forceSyncBtn.disabled = true;
        forceSyncBtn.textContent = 'Syncing...';
        await performInitialSync(currentUser);
        forceSyncBtn.disabled = false;
        forceSyncBtn.textContent = 'Synced ✓';
        setTimeout(() => { if (forceSyncBtn) forceSyncBtn.textContent = '🔄 Sync Now with Cloud'; }, 1500);
      };
    }

    const reloadCloudBtn = body.querySelector('#kopi-reload-cloud-btn');
    if (reloadCloudBtn) {
      reloadCloudBtn.onclick = async () => {
        if (!confirm("Pull the latest cloud progress and overwrite this device's current view?")) return;
        reloadCloudBtn.disabled = true;
        try {
          const docRef = fbFirestoreMethods.doc(firestoreDb, 'users', currentUser.uid, 'progress', 'current');
          const snap = await fbFirestoreMethods.getDoc(docRef);
          if (snap.exists()) {
            applyCloudDataToLocal(snap.data(), false, true);
            alert("Progress loaded from cloud! Resumed right where you left off.");
          } else {
            alert("No cloud backup exists yet.");
          }
        } catch (e) {
          alert("Could not pull from cloud: " + e.message);
        }
        reloadCloudBtn.disabled = false;
      };
    }

    const signoutBtn = body.querySelector('#kopi-signout-btn');
    if (signoutBtn) {
      signoutBtn.onclick = async () => {
        if (confirm("Sign out of this device? Your local progress remains saved.")) {
          await signOutUser();
        }
      };
    }
    return;
  }

  // 2. If not logged in: Show Auth Forms (Sign In / Create Account / Reset)
  body.innerHTML = `
    <!-- Setup Alert if keys aren't configured yet -->
    ${!isConfigured ? `
      <div class="kopi-auth-alert info">
        <span>⚙️</span>
        <div>
          <strong>Firebase Setup Needed</strong><br>
          Paste your project keys into <code>firebase_config.js</code> to connect Cloud Firestore sync.
        </div>
      </div>
    ` : ''}

    <div id="kopi-auth-alert-placeholder"></div>

    <!-- Segmented Tab Picker -->
    <div class="kopi-auth-tabs">
      <button type="button" class="kopi-auth-tab-btn ${activeAuthTab === 'signin' ? 'active' : ''}" data-tab="signin">Sign In</button>
      <button type="button" class="kopi-auth-tab-btn ${activeAuthTab === 'signup' ? 'active' : ''}" data-tab="signup">Create Account</button>
      <button type="button" class="kopi-auth-tab-btn ${activeAuthTab === 'reset' ? 'active' : ''}" data-tab="reset">Reset Password</button>
    </div>

    <!-- Forms -->
    ${activeAuthTab === 'signin' ? `
      <form class="kopi-auth-form" id="kopi-signin-form">
        <div class="kopi-form-group">
          <label for="kopi-in-email">Email Address</label>
          <input type="email" class="kopi-form-input" id="kopi-in-email" placeholder="you@university.edu" required autocomplete="email">
        </div>
        <div class="kopi-form-group">
          <label for="kopi-in-pwd">Password</label>
          <input type="password" class="kopi-form-input" id="kopi-in-pwd" placeholder="••••••••" required autocomplete="current-password">
        </div>
        <button type="submit" class="kopi-submit-btn" id="kopi-in-btn">
          <span>Sign In & Sync Progress</span>
        </button>
      </form>
    ` : activeAuthTab === 'signup' ? `
      <form class="kopi-auth-form" id="kopi-signup-form">
        <div class="kopi-form-group">
          <label for="kopi-up-email">Email Address</label>
          <input type="email" class="kopi-form-input" id="kopi-up-email" placeholder="you@university.edu" required autocomplete="email">
        </div>
        <div class="kopi-form-group">
          <label for="kopi-up-pwd">Password (Min. 6 characters)</label>
          <input type="password" class="kopi-form-input" id="kopi-up-pwd" placeholder="••••••••" minlength="6" required autocomplete="new-password">
        </div>
        <button type="submit" class="kopi-submit-btn" id="kopi-up-btn">
          <span>Create Account & Start Syncing</span>
        </button>
      </form>
    ` : `
      <form class="kopi-auth-form" id="kopi-reset-form">
        <div class="kopi-form-group">
          <label for="kopi-res-email">Registered Email Address</label>
          <input type="email" class="kopi-form-input" id="kopi-res-email" placeholder="you@university.edu" required autocomplete="email">
        </div>
        <button type="submit" class="kopi-submit-btn" id="kopi-res-btn">
          <span>Send Password Reset Email</span>
        </button>
      </form>
    `}

    <!-- Firebase Step-by-Step Guide Drawer -->
    <details class="kopi-setup-guide-box" ${!isConfigured ? 'open' : ''}>
      <summary>
        <span>🛠️ How to connect your Firebase keys</span>
        <span aria-hidden="true">▾</span>
      </summary>
      <div class="kopi-setup-guide-content">
        <ol>
          <li>Open <a href="https://console.firebase.google.com/" target="_blank" rel="noopener" style="color:var(--brand,#1e6b48); font-weight:700;">console.firebase.google.com</a> and click <strong>Add Project</strong>.</li>
          <li>Click the Web icon <code>&lt;/&gt;</code> to register an app and copy the <code>firebaseConfig</code> object.</li>
          <li>Paste the keys into <code>firebase_config.js</code> in this project.</li>
          <li>In Firebase sidebar: enable <strong>Authentication</strong> (Email/Password) and create a <strong>Firestore Database</strong>.</li>
        </ol>
        <span>Once pasted, save the file and reload this page to start syncing!</span>
      </div>
    </details>
  `;

  // Bind Tab Click Handlers
  body.querySelectorAll('.kopi-auth-tab-btn').forEach(btn => {
    btn.onclick = () => {
      activeAuthTab = btn.dataset.tab;
      updateModalUI();
    };
  });

  // Bind Form Submissions
  const signinForm = body.querySelector('#kopi-signin-form');
  if (signinForm) {
    signinForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = body.querySelector('#kopi-in-email').value.trim();
      const pwd = body.querySelector('#kopi-in-pwd').value;
      const submitBtn = body.querySelector('#kopi-in-btn');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing In...';
      clearAlert();

      try {
        await signIn(email, pwd);
        showAlert('Signed in successfully! Syncing your progress...', 'success');
      } catch (err) {
        showAlert(formatFirebaseError(err), 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In & Sync Progress';
      }
    };
  }

  const signupForm = body.querySelector('#kopi-signup-form');
  if (signupForm) {
    signupForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = body.querySelector('#kopi-up-email').value.trim();
      const pwd = body.querySelector('#kopi-up-pwd').value;
      const submitBtn = body.querySelector('#kopi-up-btn');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Creating Account...';
      clearAlert();

      try {
        await signUp(email, pwd);
        showAlert('Account created! Your local study progress is now synced.', 'success');
      } catch (err) {
        showAlert(formatFirebaseError(err), 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create Account & Start Syncing';
      }
    };
  }

  const resetForm = body.querySelector('#kopi-reset-form');
  if (resetForm) {
    resetForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = body.querySelector('#kopi-res-email').value.trim();
      const submitBtn = body.querySelector('#kopi-res-btn');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      clearAlert();

      try {
        await resetPassword(email);
        showAlert('Password reset link sent! Check your inbox.', 'success');
      } catch (err) {
        showAlert(formatFirebaseError(err), 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Password Reset Email';
      }
    };
  }
}

function showAlert(message, type = 'error') {
  const container = document.getElementById('kopi-auth-alert-placeholder');
  if (!container) return;
  container.innerHTML = `
    <div class="kopi-auth-alert ${type}">
      <span>${type === 'error' ? '⚠️' : '✓'}</span>
      <div>${message}</div>
    </div>
  `;
}

function clearAlert() {
  const container = document.getElementById('kopi-auth-alert-placeholder');
  if (container) container.innerHTML = '';
}

function formatFirebaseError(err) {
  if (!err) return "An unknown error occurred.";
  const code = err.code || '';
  if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
    return "Invalid email or password. Please check your credentials.";
  }
  if (code === 'auth/weak-password') {
    return "Password is too weak. Please use at least 6 characters.";
  }
  if (code === 'auth/invalid-email') {
    return "Please enter a valid email address.";
  }
  if (code === 'auth/operation-not-allowed') {
    return "Email/Password sign-in is not enabled yet in your Firebase Console. Go to Authentication > Sign-in method to turn it on.";
  }
  if (code === 'auth/network-request-failed') {
    return "Network error. Please check your internet connection.";
  }
  if (code === 'permission-denied') {
    return "Firestore permission denied. Please verify your firestore.rules in Firebase Console.";
  }
  return err.message || "Operation failed.";
}

export function openAuthModal(tab = 'signin') {
  ensureModalDOM();
  activeAuthTab = tab;
  updateModalUI();
  const backdrop = document.getElementById('kopi-auth-backdrop');
  if (backdrop) backdrop.classList.add('active');
}

export function closeAuthModal() {
  const backdrop = document.getElementById('kopi-auth-backdrop');
  if (backdrop) backdrop.classList.remove('active');
}

// ------------------------------------------------------------
// Startup Initialization & Global Export
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  ensureModalDOM();

  // Bind Header Account Button
  const btn = document.getElementById('account-btn');
  if (btn) {
    btn.onclick = () => openAuthModal();
  }

  // Initialize Firebase SDK
  initFirebase();
});

// Global API
window.kopiCloudSync = {
  isConfigured: isFirebaseConfigured,
  isUserLoggedIn: () => Boolean(currentUser),
  getCurrentUser: () => currentUser,
  openModal: openAuthModal,
  closeModal: closeAuthModal,
  pushProgress: pushProgressToCloud,
  getLocalProgress: getLocalProgressData
};
