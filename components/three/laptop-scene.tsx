"use client";

import { Float, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function Laptop({ title }: { title: string }) {
  const ref = useRef<Group>(null);

  useFrame(({ mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -0.18 + mouse.x * 0.16;
    ref.current.rotation.x = -0.06 - mouse.y * 0.08;
  });

  return (
    <Float speed={1.1} floatIntensity={0.45} rotationIntensity={0.12}>
      <group ref={ref} rotation={[-0.08, -0.22, 0]} position={[0, -0.2, 0]}>
        <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[3.2, 1.95, 0.08]} />
          <meshStandardMaterial color="#101018" metalness={0.52} roughness={0.28} />
        </mesh>
        <mesh position={[0, -0.88, 0.72]} rotation={[1.25, 0, 0]}>
          <boxGeometry args={[3.45, 2.05, 0.08]} />
          <meshStandardMaterial color="#14141e" metalness={0.72} roughness={0.22} />
        </mesh>
        <Html transform position={[0, 0.2, 0.055]} className="pointer-events-none">
          <div className="grid h-[190px] w-[310px] place-items-center rounded bg-black p-5 text-center shadow-2xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d5ad6f]">Case Study</p>
              <p className="mt-3 font-display text-2xl font-semibold text-white">{title}</p>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#d5ad6f]" />
            </div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

export function LaptopScene({ title }: { title: string }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.7], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 5]} intensity={2.4} />
        <pointLight position={[-3, 2, 3]} intensity={20} color="#d6b36a" />
        <Laptop title={title} />
      </Suspense>
    </Canvas>
  );
}
