/**
 * JavaTarik - 3D Island World (Sky Archipelago)
 * Tech Stack: Three.js (WebGL) + GLTFLoader + OrbitControls + Python GLB Asset Pipeline
 * Inspired by "Island Life" aesthetic (Peach Twilight, Floating Islands, Wooden Signs, Bridges)
 */

(function () {
  'use strict';

  // 10 Island Definitions corresponding to the 10 Java Chapters (DATA indices 0 to 9)
  const ISLAND_DATA = [
    {
      idx: 0,
      code: "★",
      name: "Primer Isle",
      fullName: "Java Study Primer",
      topic: "Introduction, Environment, JVM & Memory Mental Models",
      desc: "Warm harbor with steaming coffee kiosks and study primer pavilions.",
      pos: [-40, 1.2, -4],
      radius: 4.0,
      color: 0x78b874,
      props: "coffee",
      foliage: [0xf8a5b2, 0xfcb578]
    },
    {
      idx: 1,
      code: "Ch 2",
      name: "Fundamentals Atoll",
      fullName: "Java Fundamentals",
      topic: "Variables, Primitive Types, Casting & Arithmetic",
      desc: "Lush atoll adorned with crystalline variable spires and arithmetic monoliths.",
      pos: [-30, -0.6, -17],
      radius: 3.6,
      color: 0x82c87b,
      props: "crystals",
      foliage: [0x86efac, 0x6ee7b7]
    },
    {
      idx: 2,
      code: "Ch 3 & 4",
      name: "Control Archipelago",
      fullName: "Flow Of Control",
      topic: "If-Else Decisions, Switch & Loops (While, For)",
      desc: "Branching pathways with forking archways and perpetual waterwheels.",
      pos: [-19, 0.9, 12],
      radius: 3.8,
      color: 0xf6ad7b,
      props: "forkgate",
      foliage: [0xfcb86c, 0xf87171]
    },
    {
      idx: 3,
      code: "Ch 5",
      name: "Arrays Sanctuary",
      fullName: "Arrays & Matrices",
      topic: "1D Arrays, 2D Grids, Memory References & Traversal",
      desc: "Geometric stepped terraces and perfectly aligned stone garden matrices.",
      pos: [-9, -0.4, -11],
      radius: 3.9,
      color: 0x6bbdb2,
      props: "matrix",
      foliage: [0x93c5fd, 0x67e8f9]
    },
    {
      idx: 4,
      code: "Ch 6",
      name: "Methods Haven",
      fullName: "Methods & Modular Code",
      topic: "Method Signatures, Call Stack, Overloading & Scopes",
      desc: "Twin clockwork towers with harmonic bells and modular transmission arches.",
      pos: [1, 1.3, 16],
      radius: 4.1,
      color: 0xa4c639,
      props: "clocks",
      foliage: [0xfde047, 0x86efac]
    },
    {
      idx: 5,
      code: "Ch 7",
      name: "Streams & IO Isle",
      fullName: "File I/O & Streams",
      topic: "Scanner, File Readers, Streams & Text Parsing",
      desc: "Grand open-air library pagoda with drifting floating parchment lanterns.",
      pos: [13, -0.6, -13],
      radius: 3.7,
      color: 0x7bb5b9,
      props: "library",
      foliage: [0xf472b6, 0xc084fc]
    },
    {
      idx: 6,
      code: "Ch 8",
      name: "OOP Citadel",
      fullName: "Classes & Objects",
      topic: "Blueprint Construction, Constructors, this & Encapsulation",
      desc: "Cozy architectural observatory with blueprint draft tables and marble pillars.",
      pos: [24, 0.8, 11],
      radius: 4.2,
      color: 0x8cc574,
      props: "gazebo",
      foliage: [0xa78bfa, 0x818cf8]
    },
    {
      idx: 7,
      code: "Ch 9",
      name: "Inheritance Plateau",
      fullName: "Inheritance & Polymorphism",
      topic: "Extends Hierarchy, Super Keyword & Method Overriding",
      desc: "The grand gathering island with a towering ancient blossom tree and cascading waterfalls.",
      pos: [35, 0.0, -13],
      radius: 4.6,
      color: 0x89cc86,
      props: "grandtree",
      foliage: [0xf9a8d4, 0xf472b6]
    },
    {
      idx: 8,
      code: "Ch 10",
      name: "Interfaces Spire",
      fullName: "Abstract & Interfaces",
      topic: "Contracts, Abstract Classes, Default Methods & Multiple Interfaces",
      desc: "Floating ethereal crystal spires hovering over a shimmering glass pool.",
      pos: [45, 1.4, 12],
      radius: 3.8,
      color: 0x76c2af,
      props: "spire",
      foliage: [0x67e8f9, 0xa5b4fc]
    },
    {
      idx: 9,
      code: "Ch 11",
      name: "Exception Fortress",
      fullName: "Exception Handling",
      topic: "Try-Catch-Finally, Throw/Throws & Defensive Design",
      desc: "Fortified beacon citadel projecting a luminous protective dome over the skies.",
      pos: [55, 0.6, -3],
      radius: 4.2,
      color: 0xb589b2,
      props: "fortress",
      foliage: [0xf87171, 0xfb923c]
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

  // Create a stylized floating island
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

    // 1. Lush Grass Top (Cylinder with slightly irregular facet)
    const grassGeo = new THREE.CylinderGeometry(r, r * 0.95, 0.7, 14);
    const grassMat = new THREE.MeshStandardMaterial({
      color: data.color,
      roughness: 0.8,
      metalness: 0.05,
      flatShading: true
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.castShadow = true;
    grassMesh.receiveShadow = true;
    group.add(grassMesh);

    // 2. Earth / Dirt Ring directly below
    const dirtGeo = new THREE.CylinderGeometry(r * 0.95, r * 0.82, 0.8, 14);
    const dirtMat = new THREE.MeshStandardMaterial({
      color: 0x5c4331,
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
      color: 0x483d38,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true
    });
    const rockMesh = new THREE.Mesh(rockGeo, rockMat);
    rockMesh.position.y = -2.4;
    rockMesh.castShadow = true;
    rockMesh.receiveShadow = true;
    group.add(rockMesh);

    // 4. Stylized Low-Poly Trees
    const treeCount = 3 + (data.idx % 2);
    for (let t = 0; t < treeCount; t++) {
      const angle = (t * (Math.PI * 2) / treeCount) + (data.idx * 0.4);
      const dist = (r * 0.5) + (t % 2) * (r * 0.18);
      const tx = Math.cos(angle) * dist;
      const tz = Math.sin(angle) * dist;

      const tree = createTree(data.foliage[t % data.foliage.length]);
      tree.position.set(tx, 0.35, tz);
      group.add(tree);
    }

    // 5. Distinctive Island Props
    addIslandThemedProps(group, data);

    // 6. Floating Satellite Mini-Rocks
    for (let s = 0; s < 3; s++) {
      const sAngle = s * 2.1 + data.idx * 0.5;
      const sDist = r + 1.2 + (s % 2) * 0.8;
      const sGeo = new THREE.DodecahedronGeometry(0.35 + (s % 2) * 0.2, 0);
      const sMat = new THREE.MeshStandardMaterial({ color: 0x5a4f48, roughness: 0.9, flatShading: true });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.position.set(Math.cos(sAngle) * sDist, -1.0 + (s % 2) * 0.6, Math.sin(sAngle) * sDist);
      sMesh.castShadow = true;
      group.add(sMesh);
    }

    // 7. Interactive Invisible Hover Hitbox (slightly larger for effortless click/tap targets)
    const hitGeo = new THREE.CylinderGeometry(r * 1.3, r * 1.2, 5.0, 12);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false, wireframe: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.y = -0.5;
    hitMesh.userData = { isHitbox: true, parentGroup: group };
    group.add(hitMesh);

    // 8. Radiant Selection Ring (hidden until hovered/focused)
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

  // Create a cute low-poly tree
  function createTree(foliageColor) {
    const tree = new THREE.Group();

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1.2, 5);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3221, roughness: 0.9, flatShading: true });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 0.6;
    trunk.castShadow = true;
    tree.add(trunk);

    // Foliage Tier 1
    const fol1Geo = new THREE.ConeGeometry(0.85, 0.9, 6);
    const folMat = new THREE.MeshStandardMaterial({ color: foliageColor, roughness: 0.7, flatShading: true });
    const fol1 = new THREE.Mesh(fol1Geo, folMat);
    fol1.position.y = 1.3;
    fol1.castShadow = true;
    tree.add(fol1);

    // Foliage Tier 2
    const fol2Geo = new THREE.ConeGeometry(0.6, 0.75, 6);
    const fol2 = new THREE.Mesh(fol2Geo, folMat);
    fol2.position.y = 1.8;
    fol2.castShadow = true;
    tree.add(fol2);

    return tree;
  }

  // Add chapter-specific landmark props
  function addIslandThemedProps(group, data) {
    const pMat = new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.2, flatShading: true });

    if (data.props === "coffee") {
      // Ch ★ Primer: Steaming Coffee Cup Monument
      const cupGeo = new THREE.CylinderGeometry(0.6, 0.45, 0.9, 12);
      const cupMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.2 });
      const cup = new THREE.Mesh(cupGeo, cupMat);
      cup.position.set(0, 0.8, 0);
      cup.castShadow = true;
      group.add(cup);

      const coffeeGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.1, 12);
      const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x3d2314, roughness: 0.4 });
      const coffee = new THREE.Mesh(coffeeGeo, coffeeMat);
      coffee.position.set(0, 1.2, 0);
      group.add(coffee);
    } else if (data.props === "crystals") {
      // Ch 2 Fundamentals: Glowing Variable Crystals
      for (let c = 0; c < 3; c++) {
        const cGeo = new THREE.ConeGeometry(0.25, 1.4 + c * 0.3, 5);
        const cMat = new THREE.MeshStandardMaterial({
          color: 0x5eead4,
          emissive: 0x14b8a6,
          emissiveIntensity: 0.35,
          roughness: 0.2
        });
        const crystal = new THREE.Mesh(cGeo, cMat);
        crystal.position.set(-0.4 + c * 0.4, 0.9 + c * 0.1, -0.2 + (c % 2) * 0.5);
        crystal.rotation.z = (c - 1) * 0.15;
        crystal.castShadow = true;
        group.add(crystal);
      }
    } else if (data.props === "forkgate") {
      // Ch 3 & 4 Control: Forking Torii Stone Gate
      const pillarGeo = new THREE.CylinderGeometry(0.12, 0.15, 1.6, 6);
      const gateMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6, flatShading: true });
      const p1 = new THREE.Mesh(pillarGeo, gateMat);
      p1.position.set(-0.6, 1.1, 0);
      p1.castShadow = true;
      const p2 = new THREE.Mesh(pillarGeo, gateMat);
      p2.position.set(0.6, 1.1, 0);
      p2.castShadow = true;
      const topGeo = new THREE.BoxGeometry(1.8, 0.2, 0.3);
      const topBeam = new THREE.Mesh(topGeo, gateMat);
      topBeam.position.set(0, 1.9, 0);
      topBeam.castShadow = true;
      group.add(p1, p2, topBeam);
    } else if (data.props === "matrix") {
      // Ch 5 Arrays: Stepped Stone Matrix Blocks
      const bMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.5, flatShading: true });
      for (let x = -0.5; x <= 0.5; x += 0.5) {
        for (let z = -0.5; z <= 0.5; z += 0.5) {
          const bGeo = new THREE.BoxGeometry(0.35, 0.35 + Math.abs(x) * 0.3, 0.35);
          const block = new THREE.Mesh(bGeo, bMat);
          block.position.set(x, 0.5 + Math.abs(x) * 0.15, z);
          block.castShadow = true;
          group.add(block);
        }
      }
    } else if (data.props === "library") {
      // Ch 7 File I/O: Pagoda Archive
      const pagGeo = new THREE.BoxGeometry(1.2, 1.0, 1.2);
      const pagMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6, flatShading: true });
      const pagoda = new THREE.Mesh(pagGeo, pagMat);
      pagoda.position.set(0, 0.85, 0);
      pagoda.castShadow = true;
      const roofGeo = new THREE.ConeGeometry(1.3, 0.7, 4);
      roofGeo.rotateY(Math.PI / 4);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.5 });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.set(0, 1.65, 0);
      roof.castShadow = true;
      group.add(pagoda, roof);
    } else if (data.props === "grandtree") {
      // Ch 9 Inheritance: The Gathering Island Giant Blossom Tree (Central landmark from Photo 1!)
      const trunkGeo = new THREE.CylinderGeometry(0.5, 0.8, 2.5, 8);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2716, roughness: 0.9, flatShading: true });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.set(0, 1.6, 0);
      trunk.castShadow = true;
      group.add(trunk);

      // Massive Multi-Puff Cloud Foliage Canopy
      const folMat = new THREE.MeshStandardMaterial({
        color: 0xfce7f3, // Soft peach-cherry canopy
        roughness: 0.8,
        flatShading: true
      });
      const puffOffsets = [
        [0, 3.2, 0, 1.8],
        [-0.9, 2.8, 0.6, 1.3],
        [0.9, 2.9, -0.5, 1.4],
        [0.4, 3.8, 0.3, 1.2],
        [-0.5, 3.6, -0.6, 1.1]
      ];
      puffOffsets.forEach(([px, py, pz, pr]) => {
        const puffGeo = new THREE.DodecahedronGeometry(pr, 1);
        const puff = new THREE.Mesh(puffGeo, folMat);
        puff.position.set(px, py, pz);
        puff.castShadow = true;
        group.add(puff);
      });

      // Waterfall spilling into clouds
      const wfGeo = new THREE.PlaneGeometry(0.6, 2.5);
      const wfMat = new THREE.MeshBasicMaterial({
        color: 0xa5f3fc,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide
      });
      const waterfall = new THREE.Mesh(wfGeo, wfMat);
      waterfall.position.set(0, -1.0, data.radius * 0.9);
      group.add(waterfall);
    } else if (data.props === "fortress") {
      // Ch 11 Exception Fortress: Beacon Tower
      const towerGeo = new THREE.CylinderGeometry(0.7, 0.85, 2.0, 8);
      const tMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8, flatShading: true });
      const tower = new THREE.Mesh(towerGeo, tMat);
      tower.position.set(0, 1.3, 0);
      tower.castShadow = true;

      const beaconGeo = new THREE.DodecahedronGeometry(0.4, 0);
      const bMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8
      });
      const beacon = new THREE.Mesh(beaconGeo, bMat);
      beacon.position.set(0, 2.6, 0);
      group.add(tower, beacon);
    } else {
      // General gazebo / stone pavilion
      const gGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.6, 6);
      const gMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5, flatShading: true });
      const gaz = new THREE.Mesh(gGeo, gMat);
      gaz.position.set(0, 0.65, 0);
      gaz.castShadow = true;
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

    // Dock Button Clicks
    const dock = document.getElementById("island-quick-dock");
    if (dock) {
      dock.addEventListener("click", (e) => {
        const btn = e.target.closest(".dock-pill");
        if (!btn) return;
        const target = btn.getAttribute("data-target");
        if (target === "reset") {
          resetCameraView();
        } else {
          const idx = parseInt(target, 10);
          if (!isNaN(idx)) {
            flyCameraToIsland(idx);
          }
        }
      });
    }

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
        <h4 class="hover-card-title">${data.fullName}</h4>
      </div>
      <p class="hover-card-desc">${data.desc}</p>
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

    // Update active state in dock
    const dockButtons = document.querySelectorAll(".dock-pill");
    dockButtons.forEach(btn => {
      if (btn.getAttribute("data-target") == idx) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
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

    const dockButtons = document.querySelectorAll(".dock-pill");
    dockButtons.forEach(btn => btn.classList.remove("active"));
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
