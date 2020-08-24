import React from "react";
import { Canvas } from "react-three-fiber";
import { Box } from "./Box";

function App() {
  return (
    <Canvas camera={{ position: [-10, 10, 10], fov: 35 }}>
      <ambientLight />
      <pointLight position={[-10, 10, -10]} castShadow />
      {[-3, 0, 3].map((x) =>
        [-3, 0, 3].map((z) => <Box position={[x, 0, z]} />)
      )}
    </Canvas>
  );
}

export default App;
