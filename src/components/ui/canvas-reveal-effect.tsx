"use client";
import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 3,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={
            opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0]
          }
          shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = 2.0;
              
              void main() {
                vec2 fragmentCoordinates = gl_FragCoord.xy;
                vec2 resolution = u_resolution;
                
                float time = u_time * animation_speed_factor;
                
                vec2 normalizedFragmentCoordinates = fragmentCoordinates / resolution;
                
                float randomValue = random(normalizedFragmentCoordinates);
                float stepValue = step(0.5, randomValue);
                
                vec3 color = u_colors[ int(mod(time + normalizedFragmentCoordinates.x * 100.0, float(u_total_size))) ];

                gl_FragColor = vec4(color, u_opacities[int(randomValue * 10.0)]);

              }
            `}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-white/0" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const uniforms = React.useMemo(() => {
    let colorsArray = [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ];
    if (typeof colors[0] !== "undefined") {
      colorsArray = new Array(6).fill(0).map((_, i) => {
        return typeof colors[i] === "undefined"
          ? typeof colors[0] === "undefined"
            ? [0, 0, 0]
            : colors[0]
          : colors[i];
      }).flat();
    }
    
    return {
      u_resolution: {
        value: {
          x: typeof window !== "undefined" ? window.innerWidth : 100,
          y: typeof window !== "undefined" ? window.innerHeight : 100,
        },
        type: "v2",
      },
      u_time: {
        value: 0,
        type: "1f",
      },
      u_colors: {
        value: colorsArray,
        type: "fv1",
      },
      u_opacities: {
        value: opacities,
        type: "fv1",
      },
      u_total_size: {
        value: totalSize,
        type: "1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "1f",
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform float u_colors[18];
        uniform float u_opacities[10];
        
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        ${shader}
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

const Shader = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number | THREE.Vector2 | THREE.Vector3;
      type: string;
    };
  };
  maxFps?: number;
}) => {
  return (
    <Canvas className="absolute inset-0 h-full w-full">
      <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
    </Canvas>
  );
};

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: any;
  maxFps?: number;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) {
      return;
    }
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    if (material.uniforms.u_time) {
      material.uniforms.u_time.value = timestamp;
    }
    if (material.uniforms.u_resolution) {
      material.uniforms.u_resolution.value = new THREE.Vector2(
        size.width * 2,
        size.height * 2
      );
    }
  });

  const getUniforms = () => {
    const preparedUniforms: any = {};

    for (const uniformName in uniforms) {
      const uniform: any = uniforms[uniformName];

      switch (uniform.type) {
        case "1f":
          preparedUniforms[uniformName] = { value: uniform.value, type: "1f" };
          break;
        case "3f":
          preparedUniforms[uniformName] = {
            value: new THREE.Vector3().fromArray(
              uniform.value as number[]
            ),
            type: "3f",
          };
          break;
        case "v2":
          preparedUniforms[uniformName] = {
            value: new THREE.Vector2(uniform.value.x, uniform.value.y),
            type: "v2",
          };
          break;
        case "fv1":
          preparedUniforms[uniformName] = {
            value: uniform.value,
            type: "fv1",
          };
          break;
        case "iv1":
          preparedUniforms[uniformName] = {
            value: uniform.value,
            type: "iv1",
          };
          break;
      }
    }

    return preparedUniforms;
  };

  const material = useMemo(() => {
    const materialObject = new THREE.ShaderMaterial({
      vertexShader: `
      precision mediump float;
      in vec2 position;
      out vec2 coordinates;

      void main() {
        coordinates = position.xy * 0.5 + 0.5;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
      `,
      fragmentShader: source,
      uniforms: getUniforms(),
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });

    return materialObject;
  }, [size.width, size.height, source]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};
