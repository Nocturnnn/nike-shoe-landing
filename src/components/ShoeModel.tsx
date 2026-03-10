import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ShoeModelProps = {
  scrollProgress: number;
};

export default function ShoeModel({ scrollProgress }: ShoeModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/nike-shoe.glb");
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((mat) =>
            (mat as THREE.MeshStandardMaterial).clone(),
          );
        } else {
          mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
        }
      }
    });
  }, [clonedScene]);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y += 0.003;
    group.current.rotation.x = Math.sin(t * 0.8) * 0.05 + scrollProgress * 0.25;
    group.current.position.y = Math.sin(t * 1.5) * 0.05;

    const extraRotation = scrollProgress * Math.PI * 1.25;
    group.current.rotation.y = extraRotation + t * 0.25;

    const blue = new THREE.Color("#3f7cff");
    const white = new THREE.Color("#f4f7ff");
    const deepBlue = new THREE.Color("#8ab4ff");

    let from = blue;
    let to = white;
    let mix = 0;

    if (scrollProgress < 0.5) {
      from = blue;
      to = white;
      mix = scrollProgress / 0.5;
    } else {
      from = white;
      to = deepBlue;
      mix = (scrollProgress - 0.5) / 0.5;
    }

    const finalColor = from.clone().lerp(to, mix);

    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];

        materials.forEach((mat) => {
          const material = mat as THREE.MeshStandardMaterial;
          if (material.isMeshStandardMaterial) {
            material.color.lerp(finalColor, 0.03);
            material.roughness = 0.42 - scrollProgress * 0.12;
            material.metalness = 0.28 + scrollProgress * 0.18;
          }
        });
      }
    });
  });

  return (
    <group
      ref={group}
      scale={2.15}
      position={[0.15, -0.35, 0]}
      rotation={[-0.12, -0.6, 0.08]}
    >
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/nike-shoe.glb");
