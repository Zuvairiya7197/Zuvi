"use client";

import { Environment, Float, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

function PortfolioObject() {
  const group = useRef<Group>(null);

  useFrame(({ mouse, clock }) => {
    if (!group.current) return;
    group.current.rotation.y = mouse.x * 0.28 + clock.elapsedTime * 0.12;
    group.current.rotation.x = -mouse.y * 0.16;
  });

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.25} floatIntensity={0.52}>
        <mesh position={[0, 1.05, -0.2]} rotation={[0.95, 0.22, -0.42]}>
          <torusGeometry args={[1.72, 0.035, 24, 160]} />
          <meshStandardMaterial color="#d5ad6f" metalness={1} roughness={0.12} emissive="#5d3c16" emissiveIntensity={0.28} />
        </mesh>
        <mesh position={[0, 0.26, 0]} rotation={[0.72, -0.45, 0.16]}>
          <boxGeometry args={[1.82, 1.82, 1.82]} />
          <MeshTransmissionMaterial
            thickness={0.22}
            roughness={0.05}
            transmission={0.9}
            chromaticAberration={0.035}
            anisotropy={0.16}
            color="#312719"
          />
        </mesh>
        <mesh position={[0, 0.25, 0.95]} rotation={[0.08, -0.42, -0.03]}>
          <boxGeometry args={[1.34, 1.72, 0.055]} />
          <meshStandardMaterial color="#15120e" metalness={0.62} roughness={0.2} />
        </mesh>
        <mesh position={[-0.05, -1.14, 0]} scale={[1, 0.15, 1]}>
          <cylinderGeometry args={[2.1, 2.22, 0.72, 96]} />
          <meshStandardMaterial color="#141210" metalness={0.8} roughness={0.18} />
        </mesh>
        {[-0.58, 0, 0.58].map((x, index) => (
          <mesh key={x} position={[x, -1 + index * 0.04, 0.2]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.48, 0.025, 0.48]} />
            <meshStandardMaterial color={index === 1 ? "#f4d79d" : "#d5ad6f"} metalness={0.9} roughness={0.16} />
          </mesh>
        ))}
        <Text
          position={[0, 0.28, 1.02]}
          rotation={[0.05, -0.42, 0]}
          fontSize={0.12}
          letterSpacing={0.08}
          color="#d5ad6f"
          anchorX="center"
          anchorY="middle"
        >
          GRAPHIC DESIGN
        </Text>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.65]}
      camera={{ position: [0, 0, 5.6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.44} />
        <directionalLight position={[4, 5, 6]} intensity={2.6} color="#ffdca3" />
        <pointLight position={[-3, -2, 2]} color="#d5ad6f" intensity={22} />
        <pointLight position={[2, 1, 2]} color="#fff0cf" intensity={12} />
        <PortfolioObject />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
