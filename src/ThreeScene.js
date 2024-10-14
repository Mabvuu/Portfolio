// src/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './models/avobun.glb'); 

  return (
    <primitive 
      object={gltf.scene} 
      scale={[1.2, 1.2, 1.2]}  // Scale the model to 1.2x in all directions
    />
  );
};

const ThreeScene = () => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={0.5} intensity={2} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={1.5} />

      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
