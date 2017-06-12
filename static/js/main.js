// get window size
var ww = window.innerWidth,
	wh = window.innerHeight;

// create a webgl renderer
var renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("canvas")
})

renderer.setSize(ww, wh);

// create an empty scene
var scene = new THREE.Scene();

// create a perpsective camera
var camara = new THREE.PerspectiveCamera(45, ww/wh, 0.001, 1000);
camara.position.z = 100;

//create a basic cube to check if the setup works well
var cubeGeom = new THREE.BoxGeometry(30, 30, 30);
var cubeMat = new THREE.MeshBasicMaterial({color: 0x3498db});
var cube = new THREE.Mesh(cubeGeom, cubeMat);
scene.add(cube);

function render(){
	cube.rotation.y += 0.02;

	//Render the scene
	renderer.render(scene, camara);

	requestAnimationFrame(render);
}

requestAnimationFrame(render);