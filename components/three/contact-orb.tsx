"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function ContactOrb() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.4], fov: 44 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.75} />
        <pointLight position={[2, 2, 3]} intensity={35} color="#f4d79d" />
        <pointLight position={[-2, -1, 2]} intensity={24} color="#9b7040" />
        <Float speed={1.4} rotationIntensity={0.45} floatIntensity={0.8}>
          <mesh>
            <torusKnotGeometry args={[1.05, 0.24, 180, 18]} />
            <MeshDistortMaterial distort={0.08} speed={1.1} color="#d5ad6f" roughness={0.16} metalness={0.92} />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  );
}
