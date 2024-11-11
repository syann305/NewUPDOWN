let scene, camera, renderer, model;
let upvotes = 0, downvotes = 0;
let scale = 1; // Initial scale of the model

// Set up the Three.js scene
function init() {
    // Create the scene
    scene = new THREE.Scene();
    
    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Set up the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('modelViewer').appendChild(renderer.domElement);

    // Set up lighting
    const light = new THREE.AmbientLight(0x404040); // Ambient light
    scene.add(light);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 5).normalize();
    scene.add(directionalLight);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('assets/model.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.scale.set(scale, scale, scale); // Set initial scale
        camera.position.z = 5;
        animate();
    }, undefined, function (error) {
        console.error('Error loading model:', error);
    });

    // Set up event listeners for buttons
    document.getElementById("upvoteButton").addEventListener("click", () => {
        upvotes++;
        document.getElementById("upvoteCount").textContent = upvotes;
        scale += 0.1; // Increase model size
        if (model) {
            model.scale.set(scale, scale, scale);
        }
    });

    document.getElementById("downvoteButton").addEventListener("click", () => {
        downvotes++;
        document.getElementById("downvoteCount").textContent = downvotes;
        scale -= 0.1; // Decrease model size
        if (model) {
            model.scale.set(scale, scale, scale);
        }
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01; // Rotate the model for a dynamic view
    }
    renderer.render(scene, camera);
}

// Initialize the scene and start the animation loop
init();
