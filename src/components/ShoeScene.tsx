import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import ShoeModel from "./ShoeModel";

type ShoeSceneProps = {
  scrollProgress: number;
};

export default function ShoeScene({ scrollProgress }: ShoeSceneProps) {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0.3, 17], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.95} />

        <directionalLight position={[4, 5, 4]} intensity={2.4} castShadow />

        <pointLight position={[-2.5, 2.2, 2]} intensity={1.8} color="#4f8cff" />
        <pointLight
          position={[2.8, 1.2, -1]}
          intensity={1.25}
          color="#ffffff"
        />
        <spotLight
          position={[0, 5, 5]}
          intensity={1.8}
          angle={0.42}
          penumbra={1}
        />

        <ShoeModel scrollProgress={scrollProgress} />

        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.42}
          scale={10}
          blur={2.8}
          far={3}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
