"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

const TOTAL_DEPTH = 80

function CameraRig() {
  const { camera } = useThree()

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      const p = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0
      camera.position.z = p * TOTAL_DEPTH
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [camera])

  return null
}

function ParticleField() {
  const count = 1500
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const depth = Math.random() * TOTAL_DEPTH - TOTAL_DEPTH / 2
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 12 + 1
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = depth
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const array = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      array[i3] += Math.sin(state.clock.elapsedTime * 0.08 + i * 0.005) * 0.001
      array[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.06 + i * 0.005) * 0.001
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y += 0.0002
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#58AFED"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingStars() {
  const count = 300
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * TOTAL_DEPTH
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.02
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.015) * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function SpaceScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 60, near: 0.1, far: 120 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
      >
        <CameraRig />
        <ParticleField />
        <FloatingStars />
      </Canvas>
    </div>
  )
}
