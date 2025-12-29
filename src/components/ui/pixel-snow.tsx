"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SnowParticles = ({ count = 200, speed = 0.5, size = 3 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // x: random spread -20 to 20
      temp[i * 3] = (Math.random() - 0.5) * 40;
      // y: random height -10 to 10
      temp[i * 3 + 1] = (Math.random() - 0.5) * 20;
      // z: random depth -10 to 10 (keep slightly in front/behind)
      temp[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      speeds[i] = 0.02 + Math.random() * 0.05 * speed;
    }
    
    return { positions: temp, speeds };
  }, [count, speed]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
        // Update Y position (falling down)
        positions[i * 3 + 1] -= particles.speeds[i];
        
        // Reset if below view
        if (positions[i * 3 + 1] < -10) {
            positions[i * 3 + 1] = 10;
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size} // Start small, pixels
        sizeAttenuation={false} // Make them constant pixel size regardless of depth? Or true for perspective
        color="#ffffff"
        transparent
        opacity={0.8}
        // Use a simple square shape for 'pixel' look
        map={null} 
      />
    </points>
  );
};

export function PixelSnow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
         <SnowParticles size={4} count={300} />
      </Canvas>
    </div>
  );
}
