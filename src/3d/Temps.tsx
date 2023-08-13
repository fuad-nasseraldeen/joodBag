import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import React, { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"

function ColoredBox() {
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    const canvas = boxRef.current
    canvas.rotation.x += 0.005
    canvas.rotation.y += 0.01
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={5} />
      <ColoredBox />
    </Canvas>
  )
}

export default ThreeScene
