import React, { useState } from "react";
import img from "../assets/test.png"; // Sawirka Light On
import img2 from "../assets/test1.png"; // Sawirka Light Off

function Light() {
  // State-ka si loo xakameeyo xaaladda iftiinka (on ama off)
  const [isOn, setIsOn] = useState(false);

  // Hawl-wadeenada badhanka
  const handleTurnOn = () => setIsOn(true); // Iftiinka On
  const handleTurnOff = () => setIsOn(false); // Iftiinka Off

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Sawirka iyadoo loo eegayo xaaladda */}
      <div className="mb-8">
        {isOn ? (
          <img src={img} alt="Light On" className="w-64 h-64" />
        ) : (
          <img src={img2} alt="Light Off" className="w-64 h-64" />
        )}
      </div>
      {/* Badhanka "On" */}
      <button
        onClick={handleTurnOn}
        className="text-3xl bg-blue-500 py-2 px-8 text-white font-bold rounded-xl mx-4"
      >
        On
      </button>
      {/* Badhanka "Off" */}
      <button
        onClick={handleTurnOff}
        className="text-3xl bg-red-500 py-2 px-8 text-white font-bold rounded-xl mx-4"
      >
        Off
      </button>
    </div>
  );
}

export default Light;
