import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import front from '../assests/bag-3D/front-bag.jpg' // Import your texture images
import back from '../assests/bag-3D/back-bag.jpg' // Import your texture images
import left from '../assests/bag-3D/left.jpg' // Import your texture images
import right from '../assests/bag-3D/right.jpg' // Import your texture images
import top from '../assests/bag-3D/corner-top.jpg' // Import your texture images
import bottom from '../assests/bag-3D/corner-back.jpg' // Import your texture images

function Box() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      70,
      canvas.clientWidth / canvas.clientHeight,
      0.01,
      10,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0) // Black color, 0 alpha (transparent)

    const textureLoader = new THREE.TextureLoader()
    scene.background = null // Transparent background
    camera.position.z = 1

    const boxWidth = 0.7
    const boxHeight = 0.5
    const boxDepth = 0.2
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth) //width,height.depth
    const canvasWidth = boxWidth * 1 // You can adjust the scaling factor as needed
    const canvasHeight = boxHeight * 1 // You can adjust the scaling factor as needed
    renderer.setSize(canvasWidth, canvasHeight)

    const _materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // red
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // green
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // bluee
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // YELLOW
      new THREE.MeshBasicMaterial({ map: textureLoader.load(front) }), // ZHRI
      new THREE.MeshBasicMaterial({ color: 0x00ffff }), // BLUE FATE7
    ]
    const materials = [
      new THREE.MeshBasicMaterial({ map: textureLoader.load(right) }), // red
      new THREE.MeshBasicMaterial({ map: textureLoader.load(left) }), // green
      new THREE.MeshBasicMaterial({ map: textureLoader.load(top) }),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(bottom) }), // YELLOW
      new THREE.MeshBasicMaterial({ map: textureLoader.load(front) }), // ZHRI
      new THREE.MeshBasicMaterial({ map: textureLoader.load(back) }), // BLUE FATE7
    ]
    const mesh = new THREE.Mesh(geometry, materials)
    scene.add(mesh)

    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    canvas.appendChild(renderer.domElement)

    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    canvas.addEventListener('mousedown', (event) => {
      isDragging = true
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      }
    })

    canvas.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x
        const deltaY = event.clientY - previousMousePosition.y
        mesh.rotation.x += deltaY * 0.01
        mesh.rotation.y += deltaX * 0.01
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        }
      }
    })

    canvas.addEventListener('mouseup', () => {
      isDragging = false
    })

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      canvas.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={canvasRef} style={{ width: '30rem', height: '30rem' }} />
}

export default Box
