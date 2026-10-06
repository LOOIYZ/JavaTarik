/**
 * JavaTarik - 3D Island World (Sky Archipelago)
 * Tech Stack: Three.js (WebGL) + GLTFLoader + OrbitControls + Python GLB Asset Pipeline
 * Inspired by "Island Life" aesthetic (Peach Twilight, Floating Islands, Wooden Signs, Bridges)
 */

(function () {
  'use strict';

  // 10 Distinct Island Themes corresponding to the 10 Java Chapters (DATA indices 0 to 9)
  // Trees match the 7 flora models from the 3D reference:
  // 1: Purple Cloud Pine, 2: Golden Autumn Oak, 3: Turquoise Spotted Mushroom, 4: Sakura Cherry Blossom,
  // 5: Sunset Coral Palm, 6: Azure Weeping Willow, 7: Ancient Ghost Silver / Alabaster Tree
  const ISLAND_DATA = [
    {
      idx: 0,
      code: "★",
      name: "Primer Isle",
      fullName: "Java Study Primer",
      themeName: "Sakura Spring Sanctuary",
      themeBadge: "🌸 Sakura Spring",
      themeDesc: "Pastel cherry blossom haven with fragrant pink canopies and steaming coffee kiosks.",
      pos: [-40, 1.2, -4],
      radius: 4.2,
      grassColor: 0x8ce99a, // fresh spring blossom green
      dirtColor: 0x7c4f3f,  // warm clay
      rockColor: 0x3d2822,  // deep volcanic stone
      floraType: "sakura",
      props: "coffee",
      foliage: [0xffc9c9, 0xffa8b6]
    },
    {
      idx: 1,
      code: "Ch 2",
      name: "Fundamentals Atoll",
      fullName: "Java Fundamentals",
      themeName: "Golden Autumn Harvest Grove",
      themeBadge: "🍂 Golden Grove",
      themeDesc: "Sun-dappled harvest forest with puffy golden-orange oaks and floating numeric runes.",
      pos: [-30, -0.6, -17],
      radius: 3.8,
      grassColor: 0xe59f3b, // golden harvest amber grass
      dirtColor: 0x6e3d16,  // rich sienna
      rockColor: 0x422915,  // dark bronze crag
      floraType: "autumn_oak",
      props: "crystals",
      foliage: [0xf59f00, 0xfcc419]
    },
    {
      idx: 2,
      code: "Ch 3 & 4",
      name: "Control Archipelago",
      fullName: "Flow Of Control",
      themeName: "Turquoise Mushroom Glen",
      themeBadge: "🍄 Mushroom Glen",
      themeDesc: "Enchanted fungal forest with giant spotted turquoise toadstools and branching decision gates.",
      pos: [-19, 0.9, 12],
      radius: 4.0,
      grassColor: 0x12b886, // vivid teal-emerald moss
      dirtColor: 0x243b35,  // dark forest humus
      rockColor: 0x1a2e28,  // deep pine stone
      floraType: "mushroom",
      props: "forkgate",
      foliage: [0x20c997, 0x38d9a9]
    },
    {
      idx: 3,
      code: "Ch 5",
      name: "Arrays Sanctuary",
      fullName: "Arrays & Matrices",
      themeName: "Tropical Sunset Coral Oasis",
      themeBadge: "🌴 Coral Oasis",
      themeDesc: "Sun-drenched tropical atoll with curved sunset palms and stepped matrix coral terraces.",
      pos: [-9, -0.4, -11],
      radius: 4.1,
      grassColor: 0xf6ad55, // warm beach sand & coral turf
      dirtColor: 0xb45309,  // copper clay
      rockColor: 0x451a03,  // volcanic reef rock
      floraType: "sunset_palm",
      props: "matrix",
      foliage: [0xff6b6b, 0xfa5252]
    },
    {
      idx: 4,
      code: "Ch 6",
      name: "Methods Haven",
      fullName: "Methods & Modular Code",
      themeName: "Twilight Lavender Highlands",
      themeBadge: "🌲 Cloud Pine",
      themeDesc: "Misty purple mountains with tiered umbrella cloud pines and modular watchtowers.",
      pos: [1, 1.3, 16],
      radius: 4.1,
      grassColor: 0x9775fa, // twilight violet heather
      dirtColor: 0x5b3e94,  // amethyst loam
      rockColor: 0x2e1d52,  // dark purple basalt
      floraType: "cloud_pine",
      props: "clocks",
      foliage: [0xb197fc, 0x845ef7]
    },
    {
      idx: 5,
      code: "Ch 7",
      name: "Streams & IO Isle",
      fullName: "File I/O & Streams",
      themeName: "Azure Weeping Willow Falls",
      themeBadge: "💧 Azure Falls",
      themeDesc: "Luminous cyan weeping willows with sky waterfalls cascading over floating paper archives.",
      pos: [13, -0.6, -13],
      radius: 3.9,
      grassColor: 0x38bdf8, // azure riverbank jade
      dirtColor: 0x0284c7,  // deep aquatic clay
      rockColor: 0x0f172a,  // wet slate cliff
      floraType: "weeping_willow",
      props: "library",
      foliage: [0x74c0fc, 0x4dabf7]
    },
    {
      idx: 6,
      code: "Ch 8",
      name: "OOP Citadel",
      fullName: "Classes & Objects",
      themeName: "The Great World Tree of Life",
      themeBadge: "🌳 Gathering Isle",
      themeDesc: "The bustling central gathering hub with a monumental ancient ivory tree and architect gazebo.",
      pos: [24, 0.8, 11],
      radius: 4.7,
      grassColor: 0x51cf66, // lush imperial emerald lawn
      dirtColor: 0x5c4033,  // rich garden earth
      rockColor: 0x343a40,  // granite bedrock
      floraType: "world_tree",
      props: "gazebo",
      foliage: [0xfce7f3, 0xf9a8d4]
    },
    {
      idx: 7,
      code: "Ch 9",
      name: "Inheritance Plateau",
      fullName: "Inheritance & Polymorphism",
      themeName: "Imperial Pagoda Autumn Vista",
      themeBadge: "⛩️ Pagoda Vista",
      themeDesc: "Eastern shrine with a multi-tiered red pagoda, golden oaks, and vermilion torii gates.",
      pos: [35, 0.0, -13],
      radius: 4.5,
      grassColor: 0xc2410c, // autumn maple crimson turf
      dirtColor: 0x7c2d12,  // red cedar soil
      rockColor: 0x3f1d14,  // dark ironstone
      floraType: "mixed_oriental",
      props: "pagoda_shrine",
      foliage: [0xf59f00, 0xb197fc]
    },
    {
      idx: 8,
      code: "Ch 10",
      name: "Interfaces Spire",
      fullName: "Abstract & Interfaces",
      themeName: "Prismatic Ghost Silver Woods",
      themeBadge: "💎 Ghost Woods",
      themeDesc: "Mystical realm of gnarled silver ghost trees and floating multifaceted iridescent quartz spires.",
      pos: [45, 1.4, 12],
      radius: 4.0,
      grassColor: 0x2dd4bf, // crystalline cyan moss
      dirtColor: 0x0f766e,  // deep mineral loam
      rockColor: 0x134e4a,  // quartz vein stone
      floraType: "ghost_tree",
      props: "crystals",
      foliage: [0xe2e8f0, 0x67e8f9]
    },
    {
      idx: 9,
      code: "Ch 11",
      name: "Exception Fortress",
      fullName: "Exception Handling",
      themeName: "Starlight Midnight Citadel",
      themeBadge: "🛡️ Star Citadel",
      themeDesc: "Midnight obsidian fortress with glowing turquoise mushroom spores and defensive beacon towers.",
      pos: [55, 0.6, -3],
      radius: 4.4,
      grassColor: 0x312e81, // midnight starry indigo turf
      dirtColor: 0x1e1b4b,  // obsidian gravel
      rockColor: 0x0f0e26,  // abyssal rock
      floraType: "midnight_spore",
      props: "fortress",
      foliage: [0x20c997, 0x818cf8]
    }
  ];

  let scene, camera, renderer, controls;
  let islandGroups = [];
  let signElements = [];
  let raycaster, mouse;
  let hoveredIsland = null;
  let isOrbiting = false;
  let animationFrameId = null;
  let cloudParticles = [];
  let birds = [];
  let isViewActive = false;
  let currentMood = 'twilight'; // twilight | midday | midnight
  let cameraTarget = { x: 8, y: 0, z: 0 };
  let cameraTargetPos = { x: 8, y: 38, z: 75 };

  const MOODS = {
    twilight: {
      name: "Peach twilight 🌅",
      skyTop: "#fde8e0",
      skyBottom: "#f5d4c8",
      fog: "#f7ded5",
      lightColor: 0xfff0e4,
      lightIntensity: 1.3,
      ambientColor: 0xffe6dc,
      ambientIntensity: 0.9,
      dirPos: [30, 45, 35]
    },
    midday: {
      name: "Sunny Emerald ☀️",
      skyTop: "#e0f2fe",
      skyBottom: "#bae6fd",
      fog: "#dbeafe",
      lightColor: 0xffffff,
      lightIntensity: 1.5,
      ambientColor: 0xdcfce7,
      ambientIntensity: 0.8,
      dirPos: [20, 60, 20]
    },
    midnight: {
      name: "Starry Midnight 🌌",
      skyTop: "#0f172a",
      skyBottom: "#1e1b4b",
      fog: "#111827",
      lightColor: 0x93c5fd,
      lightIntensity: 0.9,
      ambientColor: 0x312e81,
      ambientIntensity: 0.6,
      dirPos: [-20, 40, -30]
    }
  };

  // Initialize 3D World
  function init3DWorld() {
    const container = document.getElementById("island-canvas-container");
    if (!container) return;

    // Check if Three.js is loaded
    if (typeof THREE === "undefined") {
      console.warn("Three.js not yet loaded, retrying...");
      setTimeout(init3DWorld, 200);
      return;
    }

    // 1. Scene & Fog
    scene = new THREE.Scene();
    const mood = MOODS[currentMood];
    scene.background = new THREE.Color(mood.skyBottom);
    scene.fog = new THREE.FogExp2(mood.fog, 0.009);

    // 2. Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.5, 1000);
    camera.position.set(cameraTargetPos.x, cameraTargetPos.y, cameraTargetPos.z);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 4. Orbit Controls
    if (typeof THREE.OrbitControls !== "undefined") {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.maxPolarAngle = Math.PI / 2.05; // Don't go below clouds
      controls.minDistance = 15;
      controls.maxDistance = 180;
      controls.target.set(cameraTarget.x, cameraTarget.y, cameraTarget.z);
    }

    // 5. Lighting
    setupLighting();

    // 6. Raycaster
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // 7. Try Loading assets/islands.glb, and build interactive Islands
    loadOrBuildArchipelago();

    // 8. Atmospheric Clouds Deck & Flying Creatures
    buildCloudSea();
    buildAtmosphereManta();

    // 9. Floating Signs Overlay
    buildWoodenSignboards();

    // 10. Event Listeners
    setupInteractions(container);

    // 11. Start Loop
    startAnimationLoop();

    // Handle Resize
    window.addEventListener("resize", onWindowResize);
  }

  let dirLight, ambLight, hemiLight;
  function setupLighting() {
    const mood = MOODS[currentMood];

    ambLight = new THREE.AmbientLight(mood.ambientColor, mood.ambientIntensity);
    scene.add(ambLight);

    hemiLight = new THREE.HemisphereLight(mood.skyTop, mood.ambientColor, 0.6);
    scene.add(hemiLight);

    dirLight = new THREE.DirectionalLight(mood.lightColor, mood.lightIntensity);
    dirLight.position.set(...mood.dirPos);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 5;
    dirLight.shadow.camera.far = 180;
    const d = 55;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);
  }

  function setMood(moodKey) {
    if (!MOODS[moodKey]) return;
    currentMood = moodKey;
    const mood = MOODS[moodKey];

    scene.background = new THREE.Color(mood.skyBottom);
    scene.fog.color = new THREE.Color(mood.fog);

    ambLight.color.set(mood.ambientColor);
    ambLight.intensity = mood.ambientIntensity;

    hemiLight.color.set(mood.skyTop);
    hemiLight.groundColor.set(mood.ambientColor);

    dirLight.color.set(mood.lightColor);
    dirLight.intensity = mood.lightIntensity;
    dirLight.position.set(...mood.dirPos);

    // Update UI badge
    const moodBtn = document.getElementById("island-mood-btn");
    if (moodBtn) {
      moodBtn.textContent = mood.name;
    }
    const glanceMood = document.getElementById("glance-mood-text");
    if (glanceMood) {
      glanceMood.textContent = mood.name;
    }
  }

  // Build the 10 Procedural 3D Islands
  function loadOrBuildArchipelago() {
    // If GLTFLoader is available, we load `assets/islands.glb` as background mesh base
    if (typeof THREE.GLTFLoader !== "undefined") {
      const loader = new THREE.GLTFLoader();
      loader.load(
        'assets/islands.glb',
        function (gltf) {
          gltf.scene.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          scene.add(gltf.scene);
        },
        undefined,
        function (err) {
          console.log("Using procedural Three.js stylized geometry renderer");
        }
      );
    }

    // Build the high-detail interactive island meshes for Raycasting & Click interactions
    ISLAND_DATA.forEach((data, index) => {
      const island = createSingleIsland(data);
      islandGroups.push(island);
      scene.add(island);
    });

    // Build connecting celestial bridges
    buildArchipelagoBridges();
  }

  // -------------------------------------------------------------
  // 7 DISTINCT FLORA MODELS (Directly modeled from reference photo)
  // -------------------------------------------------------------

  // 1. Purple Cloud Pine (Pagoda Pine - Model 1 in Photo)
  function createPurpleCloudPine() {
    const tree = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3221, roughness: 0.9, flatShading: true });
    
    // Slender curving segmented trunk
    const seg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.2, 5), trunkMat);
    seg1.position.set(0, 0.6, 0);
    seg1.rotation.z = 0.08;
    seg1.castShadow = true;
    tree.add(seg1);

    const seg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.2, 5), trunkMat);
    seg2.position.set(0.12, 1.6, 0);
    seg2.rotation.z = -0.12;
    seg2.castShadow = true;
    tree.add(seg2);

    // 3 Distinct Horizontal Cloud Pads (Lavender & Lilac Tiers)
    const tiers = [
      { y: 1.35, r: 0.95, h: 0.32, color: 0x9775fa, x: -0.2, z: 0.1 },
      { y: 2.1,  r: 0.75, h: 0.28, color: 0x845ef7, x: 0.2,  z: -0.1 },
      { y: 2.7,  r: 0.55, h: 0.24, color: 0xb197fc, x: 0.05, z: 0.05 }
    ];
    tiers.forEach(t => {
      const padMat = new THREE.MeshStandardMaterial({ color: t.color, roughness: 0.75, flatShading: true });
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(t.r * 0.45, t.r, t.h, 7), padMat);
      pad.position.set(t.x, t.y, t.z);
      pad.castShadow = true;
      tree.add(pad);

      const top = new THREE.Mesh(new THREE.ConeGeometry(t.r * 0.78, t.h * 1.4, 7), padMat);
      top.position.set(t.x, t.y + t.h * 0.65, t.z);
      top.castShadow = true;
      tree.add(top);
    });
    return tree;
  }

  // 2. Golden Autumn Oak (Puffy Amber Cloud Canopy - Model 2 in Photo)
  function createGoldenAutumnOak() {
    const tree = new THREE.Group();
    // Sturdy oak trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a4233, roughness: 0.9, flatShading: true });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.45, 1.5, 6), trunkMat);
    trunk.position.y = 0.75;
    trunk.castShadow = true;
    tree.add(trunk);

    // Puffy billowing golden-amber crown clumps
    const clumps = [
      { x: 0,    y: 2.2, z: 0,    r: 1.15, c: 0xf59f00 },
      { x: -0.6, y: 1.9, z: 0.4,  r: 0.85, c: 0xfcc419 },
      { x: 0.65, y: 1.8, z: -0.3, r: 0.9,  c: 0xd97706 },
      { x: 0.2,  y: 2.7, z: 0.3,  r: 0.8,  c: 0xffb84d },
      { x: -0.3, y: 2.5, z: -0.4, r: 0.75, c: 0xf59f00 }
    ];
    clumps.forEach(cl => {
      const folMat = new THREE.MeshStandardMaterial({ color: cl.c, roughness: 0.8, flatShading: true });
      const fol = new THREE.Mesh(new THREE.DodecahedronGeometry(cl.r, 1), folMat);
      fol.position.set(cl.x, cl.y, cl.z);
      fol.castShadow = true;
      tree.add(fol);
    });
    return tree;
  }

  // 3. Giant Turquoise Mushroom (Spotted Toadstool - Model 3 in Photo)
  function createTurquoiseMushroom() {
    const shroom = new THREE.Group();
    // Cream stalk
    const stalkMat = new THREE.MeshStandardMaterial({ color: 0xffe8d6, roughness: 0.8, flatShading: true });
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.52, 1.6, 8), stalkMat);
    stalk.position.y = 0.8;
    stalk.castShadow = true;
    shroom.add(stalk);

    // Turquoise dome/cone cap
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x12b886,
      emissive: 0x0ca678,
      emissiveIntensity: 0.28,
      roughness: 0.5,
      flatShading: true
    });
    const cap = new THREE.Mesh(new THREE.ConeGeometry(1.4, 1.25, 10), capMat);
    cap.position.y = 1.95;
    cap.castShadow = true;
    shroom.add(cap);

    // White polka-dot speckles around cap
    const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dotAngles = [0, 0.9, 1.8, 2.7, 3.6, 4.5, 5.4];
    dotAngles.forEach((a, i) => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 5), dotMat);
      const r = 0.78;
      const y = 1.75 + (i % 2) * 0.25;
      dot.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
      shroom.add(dot);
    });

    // 2 Baby companion mushrooms at base
    [-0.65, 0.6].forEach((bx, idx) => {
      const bStalk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 0.5, 6), stalkMat);
      bStalk.position.set(bx, 0.25, (idx === 0 ? 0.35 : -0.2));
      const bCap = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.42, 8), capMat);
      bCap.position.set(bx, 0.55, (idx === 0 ? 0.35 : -0.2));
      shroom.add(bStalk, bCap);
    });
    return shroom;
  }

  // 4. Sakura Cherry Blossom (Blush Petal Clusters - Model 4 in Photo)
  function createSakuraTree() {
    const tree = new THREE.Group();
    // Branched dark wood trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3221, roughness: 0.9, flatShading: true });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.28, 1.6, 6), trunkMat);
    trunk.position.set(0, 0.8, 0);
    trunk.rotation.z = -0.06;
    trunk.castShadow = true;
    tree.add(trunk);

    // Blossom puffs in blush and soft pink
    const puffs = [
      { x: 0,    y: 2.1, z: 0,    r: 1.05, c: 0xffa8b6 },
      { x: -0.5, y: 1.8, z: 0.3,  r: 0.75, c: 0xffc9c9 },
      { x: 0.6,  y: 1.9, z: -0.2, r: 0.8,  c: 0xf783ac },
      { x: 0.1,  y: 2.6, z: 0.2,  r: 0.7,  c: 0xffd1dc },
      { x: -0.2, y: 2.3, z: -0.4, r: 0.7,  c: 0xffa8b6 }
    ];
    puffs.forEach(p => {
      const folMat = new THREE.MeshStandardMaterial({ color: p.c, roughness: 0.7, flatShading: true });
      const fol = new THREE.Mesh(new THREE.DodecahedronGeometry(p.r, 1), folMat);
      fol.position.set(p.x, p.y, p.z);
      fol.castShadow = true;
      tree.add(fol);
    });
    return tree;
  }

  // 5. Tropical Sunset Palm (Curved Palm with Coral Fronds - Model 5 in Photo)
  function createSunsetPalm() {
    const palm = new THREE.Group();
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8c6d58, roughness: 0.9, flatShading: true });
    
    // Leaning textured curved trunk
    const segs = 5;
    let prevY = 0;
    let prevX = 0;
    for (let i = 0; i < segs; i++) {
      const seg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12 - i * 0.015, 0.15 - i * 0.015, 0.5, 6),
        trunkMat
      );
      const curve = (i * i) * 0.045;
      seg.position.set(curve, 0.25 + i * 0.45, 0);
      seg.rotation.z = -0.09 * (i + 1);
      seg.castShadow = true;
      palm.add(seg);
      prevY = 0.25 + i * 0.45;
      prevX = curve;
    }

    // Radiating crown of warm coral/vermilion fronds
    const frondColors = [0xff6b6b, 0xfa5252, 0xf03e3e, 0xff8787];
    const frondCount = 7;
    for (let f = 0; f < frondCount; f++) {
      const angle = (f / frondCount) * Math.PI * 2;
      const frondGeo = new THREE.ConeGeometry(0.38, 1.45, 4);
      frondGeo.rotateX(Math.PI / 2.7);
      const frondMat = new THREE.MeshStandardMaterial({
        color: frondColors[f % frondColors.length],
        roughness: 0.65,
        flatShading: true,
        side: THREE.DoubleSide
      });
      const frond = new THREE.Mesh(frondGeo, frondMat);
      frond.position.set(prevX, prevY + 0.35, 0);
      frond.rotation.y = angle;
      frond.rotation.z = 0.45;
      frond.castShadow = true;
      palm.add(frond);
    }
    return palm;
  }

  // 6. Bioluminescent Weeping Willow (Cascading Cyan Tendrils - Model 6 in Photo)
  function createWeepingWillow() {
    const tree = new THREE.Group();
    // Twisted weathered trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c504d, roughness: 0.9, flatShading: true });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.45, 1.8, 6), trunkMat);
    trunk.position.y = 0.9;
    trunk.castShadow = true;
    tree.add(trunk);

    // Crown core
    const topMat = new THREE.MeshStandardMaterial({ color: 0x74c0fc, roughness: 0.7, flatShading: true });
    const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(1.0, 1), topMat);
    crown.position.set(0, 2.2, 0);
    crown.castShadow = true;
    tree.add(crown);

    // Cascading draped vertical tendrils
    const tendrilCount = 8;
    const tendrilMat = new THREE.MeshStandardMaterial({
      color: 0xa5d8ff,
      emissive: 0x4dabf7,
      emissiveIntensity: 0.35,
      roughness: 0.5,
      transparent: true,
      opacity: 0.92,
      flatShading: true
    });
    for (let i = 0; i < tendrilCount; i++) {
      const angle = (i / tendrilCount) * Math.PI * 2 + (i % 2) * 0.2;
      const dist = 0.75 + (i % 3) * 0.2;
      const tLen = 1.6 + (i % 2) * 0.5;
      const tendril = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.08, tLen, 5), tendrilMat);
      tendril.position.set(Math.cos(angle) * dist, 1.9 - tLen * 0.45, Math.sin(angle) * dist);
      tendril.castShadow = true;
      tree.add(tendril);
    }
    return tree;
  }

  // 7. Ancient Ghost / Alabaster Tree (Gnarled Silver Branches - Model 7 in Photo)
  function createGhostAlabasterTree(isGrand) {
    const tree = new THREE.Group();
    const scale = isGrand ? 1.45 : 1.0;
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0xf8f9fa,
      emissive: 0xdbeafe,
      emissiveIntensity: 0.25,
      roughness: 0.6,
      flatShading: true
    });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28 * scale, 0.55 * scale, 1.8 * scale, 7), trunkMat);
    trunk.position.y = 0.9 * scale;
    trunk.castShadow = true;
    tree.add(trunk);

    // Gnarled branching silver boughs
    const branchAngles = [0, 1.3, 2.5, 3.8, 5.0];
    branchAngles.forEach((a, idx) => {
      const bLen = (1.2 + (idx % 2) * 0.4) * scale;
      const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.08 * scale, 0.16 * scale, bLen, 5), trunkMat);
      branch.position.set(Math.cos(a) * 0.3 * scale, 1.8 * scale, Math.sin(a) * 0.3 * scale);
      branch.rotation.z = Math.sin(a) * 0.45;
      branch.rotation.x = Math.cos(a) * 0.45;
      branch.castShadow = true;
      tree.add(branch);

      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.12 * scale, 0.6 * scale, 4), trunkMat);
      tip.position.set(Math.cos(a) * 0.7 * scale, 2.4 * scale, Math.sin(a) * 0.7 * scale);
      tip.rotation.y = a;
      tree.add(tip);
    });

    if (isGrand) {
      // Golden celestial fairy lantern orbs hanging from branches
      for (let l = 0; l < 4; l++) {
        const la = (l / 4) * Math.PI * 2;
        const orb = new THREE.Mesh(
          new THREE.DodecahedronGeometry(0.22, 0),
          new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xf59e0b, emissiveIntensity: 0.9 })
        );
        orb.position.set(Math.cos(la) * 1.5, 1.6, Math.sin(la) * 1.5);
        tree.add(orb);
      }
    }
    return tree;
  }

  // -------------------------------------------------------------
  // CREATE THEMED FLOATING ISLAND
  // -------------------------------------------------------------
  function createSingleIsland(data) {
    const group = new THREE.Group();
    group.position.set(data.pos[0], data.pos[1], data.pos[2]);
    group.userData = {
      isIsland: true,
      data: data,
      baseY: data.pos[1],
      hoverOffset: 0,
      phase: data.idx * 0.75,
      speed: 0.8 + (data.idx % 3) * 0.15
    };

    const r = data.radius;

    // 1. Lush Themed Grass Plateau
    const grassGeo = new THREE.CylinderGeometry(r, r * 0.95, 0.7, 14);
    const grassMat = new THREE.MeshStandardMaterial({
      color: data.grassColor || 0x78b874,
      roughness: 0.8,
      metalness: 0.05,
      flatShading: true
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.castShadow = true;
    grassMesh.receiveShadow = true;
    group.add(grassMesh);

    // 2. Earth / Dirt Ring with thematic soil tone
    const dirtGeo = new THREE.CylinderGeometry(r * 0.95, r * 0.82, 0.8, 14);
    const dirtMat = new THREE.MeshStandardMaterial({
      color: data.dirtColor || 0x5c4331,
      roughness: 0.9,
      metalness: 0.0,
      flatShading: true
    });
    const dirtMesh = new THREE.Mesh(dirtGeo, dirtMat);
    dirtMesh.position.y = -0.55;
    dirtMesh.castShadow = true;
    dirtMesh.receiveShadow = true;
    group.add(dirtMesh);

    // 3. Craggy Inverted Stone Underside
    const rockGeo = new THREE.ConeGeometry(r * 0.82, 3.8, 10);
    rockGeo.rotateX(Math.PI);
    const rockMat = new THREE.MeshStandardMaterial({
      color: data.rockColor || 0x483d38,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true
    });
    const rockMesh = new THREE.Mesh(rockGeo, rockMat);
    rockMesh.position.y = -2.4;
    rockMesh.castShadow = true;
    rockMesh.receiveShadow = true;
    group.add(rockMesh);

    // 4. Stylized Low-Poly Flora according to Island's Distinct Theme
    const treeCount = data.radius > 4.4 ? 4 : 3;
    for (let t = 0; t < treeCount; t++) {
      const angle = (t * (Math.PI * 2) / treeCount) + (data.idx * 0.5);
      const dist = (r * 0.48) + (t % 2) * (r * 0.16);
      const tx = Math.cos(angle) * dist;
      const tz = Math.sin(angle) * dist;

      let tree = null;
      switch (data.floraType) {
        case "sakura":
          tree = createSakuraTree();
          break;
        case "autumn_oak":
          tree = createGoldenAutumnOak();
          break;
        case "mushroom":
          tree = createTurquoiseMushroom();
          break;
        case "sunset_palm":
          tree = createSunsetPalm();
          break;
        case "cloud_pine":
          tree = createPurpleCloudPine();
          break;
        case "weeping_willow":
          tree = createWeepingWillow();
          break;
        case "world_tree":
          tree = (t === 0) ? createGhostAlabasterTree(true) : createGoldenAutumnOak();
          break;
        case "mixed_oriental":
          tree = (t === 0) ? createPurpleCloudPine() : (t === 1 ? createGoldenAutumnOak() : createSakuraTree());
          break;
        case "ghost_tree":
          tree = createGhostAlabasterTree(false);
          break;
        case "midnight_spore":
          tree = (t % 2 === 0) ? createTurquoiseMushroom() : createPurpleCloudPine();
          break;
        default:
          tree = createGoldenAutumnOak();
      }
      tree.position.set(tx, 0.35, tz);
      tree.rotation.y = angle + t;
      group.add(tree);
    }

    // 5. Distinctive Island Props
    addIslandThemedProps(group, data);

    // 6. Floating Satellite Mini-Rocks
    for (let s = 0; s < 3; s++) {
      const sAngle = s * 2.1 + data.idx * 0.5;
      const sDist = r + 1.2 + (s % 2) * 0.8;
      const sGeo = new THREE.DodecahedronGeometry(0.35 + (s % 2) * 0.2, 0);
      const sMat = new THREE.MeshStandardMaterial({
        color: data.rockColor || 0x5a4f48,
        roughness: 0.9,
        flatShading: true
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.set(Math.cos(sAngle) * sDist, -1.0 + (s % 2) * 0.6, Math.sin(sAngle) * sDist);
      sMesh.castShadow = true;
      group.add(sMesh);
    }

    // 7. Interactive Invisible Hover Hitbox
    const hitGeo = new THREE.CylinderGeometry(r * 1.3, r * 1.2, 5.0, 12);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.y = -0.5;
    hitMesh.userData = { isHitbox: true, parentGroup: group };
    group.add(hitMesh);

    // 8. Radiant Selection Ring
    const ringGeo = new THREE.RingGeometry(r * 1.05, r * 1.25, 32);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.y = 0.42;
    group.add(ringMesh);
    group.userData.ring = ringMesh;

    return group;
  }

  // Add chapter-specific landmark architecture
  function addIslandThemedProps(group, data) {
    if (data.props === "coffee") {
      // Ch ★ Primer: Steaming Coffee Cup Monument + Torii Arch
      const cupGeo = new THREE.CylinderGeometry(0.6, 0.45, 0.9, 12);
      const cupMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.2 });
      const cup = new THREE.Mesh(cupGeo, cupMat);
      cup.position.set(0, 0.8, 0);
      cup.castShadow = true;
      group.add(cup);

      const coffee = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 0.1, 12),
        new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.4 })
      );
      coffee.position.set(0, 1.2, 0);
      group.add(coffee);

      // Steam particles
      for (let st = 0; st < 3; st++) {
        const steam = new THREE.Mesh(
          new THREE.DodecahedronGeometry(0.12, 0),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
        );
        steam.position.set((st - 1) * 0.15, 1.45 + st * 0.18, 0);
        group.add(steam);
      }
    } else if (data.props === "crystals") {
      // Ch 2 & Ch 10: Radiant Multicolored Crystals
      for (let c = 0; c < 3; c++) {
        const cGeo = new THREE.ConeGeometry(0.25, 1.4 + c * 0.3, 5);
        const cMat = new THREE.MeshStandardMaterial({
          color: (data.idx === 8 ? 0xe0e7ff : 0x5eead4),
          emissive: (data.idx === 8 ? 0xa5b4fc : 0x14b8a6),
          emissiveIntensity: 0.45,
          roughness: 0.2
        });
        const crystal = new THREE.Mesh(cGeo, cMat);
        crystal.position.set(-0.4 + c * 0.4, 0.9 + c * 0.1, -0.2 + (c % 2) * 0.5);
        crystal.rotation.z = (c - 1) * 0.18;
        crystal.castShadow = true;
        group.add(crystal);
      }
    } else if (data.props === "forkgate") {
      // Ch 3 & 4 Control: Forking Archway with Decision Torii
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.15, 1.6, 6);
      const gateMat = new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.6, flatShading: true });
      const p1 = new THREE.Mesh(pillarGeo, gateMat);
      p1.position.set(-0.6, 1.1, 0);
      const p2 = new THREE.Mesh(pillarGeo, gateMat);
      p2.position.set(0.6, 1.1, 0);
      const topBeam = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 0.3), gateMat);
      topBeam.position.set(0, 1.9, 0);
      group.add(p1, p2, topBeam);
    } else if (data.props === "matrix") {
      // Ch 5 Arrays: Stepped Coral Matrix Blocks
      const bMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5, flatShading: true });
      for (let x = -0.5; x <= 0.5; x += 0.5) {
        for (let z = -0.5; z <= 0.5; z += 0.5) {
          const block = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35 + Math.abs(x) * 0.3, 0.35), bMat);
          block.position.set(x, 0.5 + Math.abs(x) * 0.15, z);
          block.castShadow = true;
          group.add(block);
        }
      }
    } else if (data.props === "clocks") {
      // Ch 6 Methods: Clockwork Watchtower
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.55, 2.2, 6),
        new THREE.MeshStandardMaterial({ color: 0x7c3aed, roughness: 0.6, flatShading: true })
      );
      tower.position.set(0, 1.3, 0);
      tower.castShadow = true;
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(0.7, 0.8, 6),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 })
      );
      roof.position.set(0, 2.7, 0);
      group.add(tower, roof);
    } else if (data.props === "library") {
      // Ch 7 Streams & I/O: Cascading River Waterfall spilling into clouds
      const wfGeo = new THREE.PlaneGeometry(0.9, 3.2);
      const wfMat = new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.78,
        side: THREE.DoubleSide
      });
      const waterfall = new THREE.Mesh(wfGeo, wfMat);
      waterfall.position.set(0, -1.2, data.radius * 0.9);
      group.add(waterfall);

      // Open-air scroll gazebo
      const gMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.75, 0.85, 0.8, 6),
        new THREE.MeshStandardMaterial({ color: 0xe0f2fe, roughness: 0.6, flatShading: true })
      );
      gMesh.position.set(0, 0.75, 0);
      group.add(gMesh);
    } else if (data.props === "gazebo") {
      // Ch 8 OOP Citadel: Central Architect Gazebo
      const gaz = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.0, 0.7, 8),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4, flatShading: true })
      );
      gaz.position.set(0, 0.7, 0);
      gaz.castShadow = true;
      const dome = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 0.8, 8),
        new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5 })
      );
      dome.position.set(0, 1.4, 0);
      group.add(gaz, dome);
    } else if (data.props === "pagoda_shrine") {
      // Ch 9 Inheritance: Multi-tiered Pagoda Tower
      for (let t = 0; t < 2; t++) {
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(1.1 - t * 0.3, 0.6, 1.1 - t * 0.3),
          new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.6 })
        );
        body.position.set(0, 0.65 + t * 0.8, 0);
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(1.3 - t * 0.3, 0.4, 4),
          new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 })
        );
        roof.rotateY(Math.PI / 4);
        roof.position.set(0, 1.05 + t * 0.8, 0);
        group.add(body, roof);
      }
    } else if (data.props === "fortress") {
      // Ch 11 Exception Fortress: Starlight Warning Beacon
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.9, 2.2, 8),
        new THREE.MeshStandardMaterial({ color: 0x312e81, roughness: 0.8, flatShading: true })
      );
      tower.position.set(0, 1.4, 0);
      tower.castShadow = true;

      const beacon = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.45, 0),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.9 })
      );
      beacon.position.set(0, 2.8, 0);
      group.add(tower, beacon);
    } else {
      const gaz = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.8, 0.6, 6),
        new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5, flatShading: true })
      );
      gaz.position.set(0, 0.65, 0);
      group.add(gaz);
    }
  }

  // Connecting Bridges between sequential islands
  function buildArchipelagoBridges() {
    const bridgeMat = new THREE.MeshStandardMaterial({
      color: 0xfde68a,
      roughness: 0.7,
      flatShading: true
    });

    for (let i = 0; i < ISLAND_DATA.length - 1; i++) {
      const p1 = ISLAND_DATA[i].pos;
      const p2 = ISLAND_DATA[i + 1].pos;

      const steps = 7;
      for (let s = 1; s < steps; s++) {
        const t = s / steps;
        const bx = p1[0] + (p2[0] - p1[0]) * t;
        const bz = p1[2] + (p2[2] - p1[2]) * t;
        // Hanging sag
        const sag = Math.sin(t * Math.PI) * 0.8;
        const by = p1[1] + (p2[1] - p1[1]) * t - sag + 0.1;

        const plankGeo = new THREE.BoxGeometry(0.7, 0.12, 0.45);
        const plank = new THREE.Mesh(plankGeo, bridgeMat);
        plank.position.set(bx, by, bz);
        plank.lookAt(p2[0], by, p2[2]);
        plank.castShadow = true;
        scene.add(plank);
      }
    }
  }

  // Fluffy clouds sea underneath the islands
  function buildCloudSea() {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 1.0,
      transparent: true,
      opacity: 0.82,
      flatShading: true
    });

    for (let i = 0; i < 45; i++) {
      const cGeo = new THREE.DodecahedronGeometry(3.5 + Math.random() * 4.0, 1);
      const cloud = new THREE.Mesh(cGeo, cloudMat);
      cloud.position.set(
        (Math.random() - 0.5) * 160,
        -7 - Math.random() * 5,
        (Math.random() - 0.5) * 120
      );
      cloud.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(cloud);
      cloudParticles.push(cloud);
    }
  }

  // Distant flying creature (gentle flying manta/birds from Photo 1)
  function buildAtmosphereManta() {
    for (let b = 0; b < 2; b++) {
      const manta = new THREE.Group();
      const bodyGeo = new THREE.ConeGeometry(0.8, 3.5, 4);
      bodyGeo.rotateX(Math.PI / 2);
      const bodyMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.55 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      manta.add(body);

      // Wings
      const wingGeo = new THREE.PlaneGeometry(5.0, 1.8);
      const wing = new THREE.Mesh(wingGeo, bodyMat);
      wing.rotation.x = Math.PI / 2;
      manta.add(wing);

      manta.position.set(-60 + b * 110, 8 + b * 4, -40 + b * 50);
      scene.add(manta);
      birds.push({
        group: manta,
        speed: 0.05 + b * 0.02,
        wingMesh: wing
      });
    }
  }

  // Create Wooden Signboards for each island (Matching Photo 1: "My island", "The gathering Island", etc.)
  function buildWoodenSignboards() {
    const overlay = document.getElementById("island-labels-overlay");
    if (!overlay) return;
    overlay.innerHTML = "";
    signElements = [];

    ISLAND_DATA.forEach((data, index) => {
      const sign = document.createElement("button");
      sign.type = "button";
      sign.className = "island-signboard";
      sign.setAttribute("data-island-idx", data.idx);
      sign.title = `Click to enter ${data.fullName} Quiz (Ch ${data.code})`;

      sign.innerHTML = `
        <span class="sign-code">${data.code}</span>
        <span class="sign-name">${data.name}</span>
        <span class="sign-theme-badge">${data.themeBadge}</span>
        <span class="sign-action">Quiz ➔</span>
      `;

      sign.addEventListener("click", (e) => {
        e.stopPropagation();
        focusIslandAndLaunchQuiz(data.idx);
      });

      sign.addEventListener("mouseenter", () => {
        highlightIsland(data.idx, true);
      });

      sign.addEventListener("mouseleave", () => {
        highlightIsland(data.idx, false);
      });

      overlay.appendChild(sign);
      signElements.push({ element: sign, islandGroup: islandGroups[index], data: data });
    });
  }

  // Update screen coordinates of the 3D wooden signs
  const _tempVec = new THREE.Vector3();
  function updateSignboardPositions() {
    if (!camera || !renderer) return;
    const container = document.getElementById("island-canvas-container");
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;

    signElements.forEach(({ element, islandGroup }) => {
      if (!islandGroup) return;

      // Position signboard above the island top
      _tempVec.copy(islandGroup.position);
      _tempVec.y += 2.6;

      // Project 3D coordinate to normalized device coordinates (-1 to 1)
      _tempVec.project(camera);

      // Check if behind camera
      if (_tempVec.z > 1.0) {
        element.style.display = "none";
        return;
      }

      const x = (_tempVec.x * 0.5 + 0.5) * width;
      const y = (-(_tempVec.y * 0.5) + 0.5) * height;

      element.style.display = "inline-flex";
      element.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
    });
  }

  // Event handlers & Interaction
  function setupInteractions(container) {
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("click", onSceneClick);
    container.addEventListener("pointerdown", () => { isOrbiting = false; });
    container.addEventListener("pointermove", () => { isOrbiting = true; });

    // Mood Selector Button
    const moodBtn = document.getElementById("island-mood-btn");
    if (moodBtn) {
      moodBtn.addEventListener("click", () => {
        const order = ["twilight", "midday", "midnight"];
        const next = order[(order.indexOf(currentMood) + 1) % order.length];
        setMood(next);
      });
    }
  }

  function onMouseMove(event) {
    const container = document.getElementById("island-canvas-container");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    let foundIsland = null;
    for (let hit of intersects) {
      let obj = hit.object;
      while (obj && obj !== scene) {
        if (obj.userData && obj.userData.isIsland) {
          foundIsland = obj;
          break;
        }
        if (obj.userData && obj.userData.isHitbox && obj.userData.parentGroup) {
          foundIsland = obj.userData.parentGroup;
          break;
        }
        obj = obj.parent;
      }
      if (foundIsland) break;
    }

    if (foundIsland !== hoveredIsland) {
      if (hoveredIsland) {
        setIslandHighlight(hoveredIsland, false);
      }
      hoveredIsland = foundIsland;
      if (hoveredIsland) {
        setIslandHighlight(hoveredIsland, true);
        container.style.cursor = "pointer";
        showFloatingCard(hoveredIsland.userData.data);
      } else {
        container.style.cursor = "grab";
        hideFloatingCard();
      }
    }
  }

  function onSceneClick(event) {
    if (isOrbiting) {
      // User was dragging to orbit, don't trigger click action
      return;
    }

    if (hoveredIsland && hoveredIsland.userData && hoveredIsland.userData.data) {
      focusIslandAndLaunchQuiz(hoveredIsland.userData.data.idx);
    }
  }

  function setIslandHighlight(islandGroup, isHovered) {
    if (!islandGroup) return;
    islandGroup.userData.hoverOffset = isHovered ? 0.45 : 0;
    if (islandGroup.userData.ring) {
      islandGroup.userData.ring.material.opacity = isHovered ? 0.75 : 0;
    }

    // Highlight signboard
    const idx = islandGroup.userData.data.idx;
    const sign = signElements[idx];
    if (sign && sign.element) {
      if (isHovered) {
        sign.element.classList.add("hovered");
      } else {
        sign.element.classList.remove("hovered");
      }
    }
  }

  function highlightIsland(idx, isHovered) {
    const group = islandGroups[idx];
    if (group) {
      setIslandHighlight(group, isHovered);
    }
  }

  // Hover Tooltip / Floating Detail Card
  function showFloatingCard(data) {
    const card = document.getElementById("island-hover-card");
    if (!card) return;
    card.innerHTML = `
      <div class="hover-card-header">
        <span class="hover-card-badge">${data.code}</span>
        <span class="hover-card-theme-tag">${data.themeBadge}</span>
        <h4 class="hover-card-title">${data.fullName}</h4>
      </div>
      <div class="hover-card-theme-line">Theme: <b>${data.themeName}</b></div>
      <p class="hover-card-desc">${data.themeDesc || data.desc}</p>
      <div class="hover-card-topics"><b>Key Topics:</b> ${data.topic}</div>
      <div class="hover-card-cta">
        <span>Click island to launch Chapter Quiz</span>
        <span class="cta-arrow">➔</span>
      </div>
    `;
    card.classList.add("visible");
  }

  function hideFloatingCard() {
    const card = document.getElementById("island-hover-card");
    if (card) {
      card.classList.remove("visible");
    }
  }

  // Smoothly glide camera to island and open the quiz modal
  window.focusIslandAndLaunchQuiz = function (islandIdx) {
    flyCameraToIsland(islandIdx, () => {
      // Trigger the quiz modal for this exact chapter
      if (typeof window.openChapterQuiz === "function") {
        window.openChapterQuiz(islandIdx);
      }
    });
  };

  // Smooth Camera Fly-In
  let isTransitioningCamera = false;
  let targetCamPos = new THREE.Vector3();
  let targetCamLook = new THREE.Vector3();

  function flyCameraToIsland(idx, onComplete) {
    const data = ISLAND_DATA[idx];
    if (!data) return;

    targetCamLook.set(data.pos[0], data.pos[1] + 1.2, data.pos[2]);
    // Angle slightly elevated
    targetCamPos.set(data.pos[0] + 10, data.pos[1] + 12, data.pos[2] + 20);

    isTransitioningCamera = true;
    const startPos = camera.position.clone();
    const startLook = controls ? controls.target.clone() : new THREE.Vector3(0, 0, 0);

    let progress = 0;
    const duration = 900; // ms
    const startTime = performance.now();

    function step(now) {
      progress = (now - startTime) / duration;
      if (progress >= 1.0) {
        progress = 1.0;
        isTransitioningCamera = false;
        camera.position.copy(targetCamPos);
        if (controls) controls.target.copy(targetCamLook);
        if (onComplete) onComplete();
        return;
      }

      // Smooth easeInOutCubic
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      camera.position.lerpVectors(startPos, targetCamPos, ease);
      if (controls) {
        controls.target.lerpVectors(startLook, targetCamLook, ease);
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);


  }

  function resetCameraView() {
    targetCamLook.set(cameraTarget.x, cameraTarget.y, cameraTarget.z);
    targetCamPos.set(cameraTargetPos.x, cameraTargetPos.y, cameraTargetPos.z);

    const startPos = camera.position.clone();
    const startLook = controls ? controls.target.clone() : new THREE.Vector3(0, 0, 0);
    let startTime = performance.now();
    const duration = 1000;

    function step(now) {
      let progress = (now - startTime) / duration;
      if (progress >= 1.0) {
        camera.position.copy(targetCamPos);
        if (controls) controls.target.copy(targetCamLook);
        return;
      }
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      camera.position.lerpVectors(startPos, targetCamPos, ease);
      if (controls) controls.target.lerpVectors(startLook, targetCamLook, ease);
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Animation Loop
  let clock = new THREE.Clock();
  function startAnimationLoop() {
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!isViewActive) return;

      const elapsed = clock.getElapsedTime();

      // 1. Gentle floating bobbing for each island
      islandGroups.forEach((group) => {
        const u = group.userData;
        const bob = Math.sin(elapsed * u.speed + u.phase) * 0.28;
        group.position.y = u.baseY + bob + u.hoverOffset;
      });

      // 2. Slow drifting clouds
      cloudParticles.forEach((c, idx) => {
        c.position.x += 0.015;
        if (c.position.x > 80) c.position.x = -80;
        c.rotation.y = Math.sin(elapsed * 0.1 + idx) * 0.2;
      });

      // 3. Gliding Birds/Manta
      birds.forEach((b) => {
        b.group.position.x += b.speed;
        if (b.group.position.x > 75) b.group.position.x = -75;
        // Wing flap
        b.wingMesh.rotation.z = Math.sin(elapsed * 2.0) * 0.15;
      });

      // 4. Update 3D Wooden Signboards to align over islands
      updateSignboardPositions();

      // 5. Update Orbit Controls
      if (controls && !isTransitioningCamera) {
        controls.update();
      }

      renderer.render(scene, camera);
    }
    animate();
  }

  function onWindowResize() {
    const container = document.getElementById("island-canvas-container");
    if (!container || !renderer || !camera) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  // Public Interface to activate / deactivate the 3D Island World
  window.initIslandWorld = function () {
    isViewActive = true;
    if (!scene) {
      init3DWorld();
    } else {
      onWindowResize();
    }
  };

  window.pauseIslandWorld = function () {
    isViewActive = false;
  };

})();
