import React from "react";
import FaultyTerminal from "./components/FaultyTerminal";
import Navbar from "./components/Navbar";
// Correcting the import path to match our previous setup
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    // Main app container. It's the parent for our layers.
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Layer 1: Background Effect. Positioned to fill the entire container. */}
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
          tint="#00ff00"
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.6}
          chromaticAberration={0}
          dither={0}
          curvature={0.38}
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={false}
          brightness={0.5}
        />
      </div>

      {/* Layer 2: Main Content. Sits on top of the background. */}
      <div className="relative z-10">
        <Navbar />
        <Homepage />
      </div>
    </div>
  );
};

export default App;
