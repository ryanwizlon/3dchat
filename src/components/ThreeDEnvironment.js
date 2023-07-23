import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import '../styles/ThreeDEnvironment.css';

const EnvironmentModel = () => {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/3dModels/EnvironmentModel.gltf');
  return <primitive object={gltf.scene} />;
};

const ThreeDEnvironment = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <div id="3dEnvironment">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <EnvironmentModel ref={ref} />
      </Canvas>
    </div>
  );
};

export default ThreeDEnvironment;