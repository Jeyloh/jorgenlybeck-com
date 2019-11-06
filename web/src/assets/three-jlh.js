const THREE = require('three')
let camera, scene, renderer, cube

function setScene () {
  const threeTarget = document.getElementById('three-target')
  // Init scene
  scene = new THREE.Scene()

  // Init camera (PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(
    75,
    threeTarget.clientWidth / threeTarget.clientHeight,
    0.1,
    1000
  )

  // Init renderer
  renderer = new THREE.WebGLRenderer({antialias: true})

  // Set size (whole window)
  renderer.setSize(threeTarget.clientWidth, threeTarget.clientHeight)

  // Render to canvas element
  threeTarget.appendChild(renderer.domElement)

  // Init BoxGeometry object (rectangular cuboid)
  const geometry = new THREE.BoxGeometry(3, 3, 3)

  // Create material with color
  const material = new THREE.MeshBasicMaterial({color: 'hotpink'})

  // Add texture -
  // const texture = new THREE.TextureLoader().load('textures/crate.gif');

  // Create material with texture
  // const material = new THREE.MeshBasicMaterial({ map: texture });

  // Create mesh with geo and material
  cube = new THREE.Mesh(geometry, material)
  // Add to scene
  scene.add(cube)

  // Position camera
  //   camera.position.y = 5
  camera.position.z = 5
}

// Draw the scene every time the screen is refreshed
function animate () {
  window.requestAnimationFrame(animate)

  // Rotate cube (Change values to change speed)
  cube.rotation.x += 0.009
  cube.rotation.y += 0.009

  renderer.render(scene, camera)
}

function onWindowResize () {
  // Camera frustum aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight
  // After making changes to aspect
  camera.updateProjectionMatrix()
  // Reset size
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)

export function initCube (threeRef) {
  setScene()
  animate()
}
