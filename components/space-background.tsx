"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  const particlesCount = 800

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    const s = new Float32Array(particlesCount)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
      s[i] = Math.random() * 0.3 + 0.1
    }
    return [pos, s]
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const elapsed = state.clock.elapsedTime
    const positionsAttr = meshRef.current.geometry.attributes.position
    const array = positionsAttr.array as Float32Array

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      const baseX = (i % 100) * 0.2 - 10
      const baseY = Math.floor(i / 100) * 0.2 - 10
      array[i3] += Math.sin(elapsed * 0.2 + i) * 0.001
      array[i3 + 1] += Math.cos(elapsed * 0.15 + i * 0.5) * 0.001
    }
    positionsAttr.needsUpdate = true

    meshRef.current.rotation.x +=
      (mouseRef.current.y * 0.0005 - meshRef.current.rotation.x) * 0.02
    meshRef.current.rotation.y +=
      (mouseRef.current.x * 0.0005 - meshRef.current.rotation.y) * 0.02
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#58AFED"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function MouseTracker() {
  const { size } = useThree()
  return (
    <mesh
      onPointerMove={(e) => {
        const x = (e.clientX / size.width) * 2 - 1
        const y = -(e.clientY / size.height) * 2 + 1
      }}
    >
      <planeGeometry args={[size.width, size.height]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <ParticleField />
      </Canvas>
    </div>
  )
}
