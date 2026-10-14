// ============================================================
// JavaTarik × Firebase Configuration Template
// ============================================================
// To enable cross-device progress synchronization:
// 1. Go to the Firebase Console: https://console.firebase.google.com/
// 2. Click "Add project" (e.g. "javatarik-learning") or select an existing one.
// 3. Click the Web icon (</>) to create a Web App.
// 4. Copy the keys from your `firebaseConfig` snippet and paste them below:
// 5. In the Firebase Console sidebar:
//    - Go to "Build" -> "Authentication" -> "Sign-in method" -> Enable "Email/Password".
//    - Go to "Build" -> "Firestore Database" -> "Create database" -> Select "Start in test mode"
//      (or paste the security rules from `firestore.rules`).
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyAjpUXjDdwk8EUh-3ZdEgcDFcn_HbS2lLk",
  authDomain: "javatarik.firebaseapp.com",
  projectId: "javatarik",
  storageBucket: "javatarik.firebasestorage.app",
  messagingSenderId: "14555541357",
  appId: "1:14555541357:web:52411dba2408403219b464",
};

/**
 * Returns true if real Firebase project credentials are provided.
 */
export function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    !firebaseConfig.apiKey.includes("YOUR_")
  );
}
