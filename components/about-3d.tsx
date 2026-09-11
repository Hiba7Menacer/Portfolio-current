"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

function boundaryRadius(
  theta: number,
  maxR: number,
  minR: number,
  curvature: number
): number {
  const quarter = Math.PI / 2
  let t = theta % quarter
  if (t < 0) t += quarter
  if (t > quarter / 2) t = quarter - t
  const frac = t / (quarter / 2)
  const profile = Math.pow(1 - frac, curvature)
  return minR + (maxR - minR) * profile
}

function buildStarShape(maxR: number, minR: number, curvature: number) {
  const segments = 96
  const shape = new THREE.Shape()
  const step = (Math.PI * 2) / segments
  for (let i = 0; i < segments; i++) {
    const theta = i * step + Math.PI / 2
    const r = boundaryRadius(theta, maxR, minR, curvature)
    const x = Math.cos(theta) * r
    const y = Math.sin(theta) * r
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

const MAX_R = 1.2
const MIN_R = 0.34
const CURVATURE = 2.2

function VolumetricStar() {
  const inner = useRef<THREE.Group>(null)
  const texture = useLoader(THREE.TextureLoader, "/images/aboutme_star_.png")
  texture.colorSpace = THREE.SRGBColorSpace

  const geometry = useMemo(() => {
    const shape = buildStarShape(MAX_R, MIN_R, CURVATURE)
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.15,
      bevelSize: 0.15,
      bevelSegments: 5,
    })
    geo.center()
    geo.computeVertexNormals()
    return geo
  }, [])

  const materials = useMemo(() => {
    const span = MAX_R * 2
    texture.repeat.set(1 / span, 1 / span)
    texture.offset.set(0.5, 0.5)
    texture.wrapS = THREE.ClampToEdgeWrapping
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.needsUpdate = true

    const cap = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const edge = new THREE.MeshPhysicalMaterial({
      color: "#7FD4FF",
      emissive: "#22D3EE",
      emissiveIntensity: 0.4,
      roughness: 0.12,
      metalness: 0.25,
      transparent: true,
      opacity: 0.45,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    return [cap, edge]
  }, [texture])

  useFrame((state) => {
    if (!inner.current) return
    const t = state.clock.elapsedTime
    inner.current.rotation.y = t * 0.5
    inner.current.rotation.x = Math.sin(t * 0.35) * 0.16
    inner.current.rotation.z = Math.sin(t * 0.28) * 0.04
  })

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.7}>
      <group ref={inner}>
        <mesh geometry={geometry} material={materials}>
          {/* neon edge outline for extra depth */}
        </mesh>
        <mesh geometry={geometry} scale={1.02}>
          <meshBasicMaterial
            wireframe
            color="#67E8F9"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  )
}

function buildGlowTexture(): THREE.CanvasTexture {
  const size = 256
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")!
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, "rgba(191, 219, 254, 0.4)")
  grad.addColorStop(0.4, "rgba(103, 232, 249, 0.16)")
  grad.addColorStop(0.75, "rgba(56, 189, 248, 0.06)")
  grad.addColorStop(1, "rgba(56, 189, 248, 0)")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function SoftGlow({ texture }: { texture: THREE.CanvasTexture }) {
  return (
    <sprite scale={[5, 5, 1]} position={[0, 0, -0.3]}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </sprite>
  )
}

export default function AboutStar3D() {
  const [glowTexture, setGlowTexture] = useState<THREE.CanvasTexture | null>(null)

  useEffect(() => {
    setGlowTexture(buildGlowTexture())
  }, [])

  return (
    <div className="relative w-56 h-64 md:w-72 md:h-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.6} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#22D3EE" />
        <pointLight position={[0, 0, -3]} intensity={1.2} color="#8FD9FF" />
        {glowTexture && <SoftGlow texture={glowTexture} />}
        <VolumetricStar />
      </Canvas>
    </div>
  )
}
