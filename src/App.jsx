import React from "react";
import FaultyTerminal from "./components/FaultyTerminal";
const App = () => {
  return (
    <div>
      <div className="w-screen h-screen relative bg-black ">
        {/* The tint prop for color is still the same */}
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
    </div>
  );
};

export default App;
