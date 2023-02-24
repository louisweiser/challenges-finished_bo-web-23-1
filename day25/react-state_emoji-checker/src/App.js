import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [pufferfish, setPufferfish] = useState("🐡");
  const [whale, setWhale] = useState("🐋");
  const [clownfish, setClownfish] = useState("🐠");
  const validCode = "🐡🐠🐋";
  const handlePufferfishClick = () => {
    if (pufferfish === "🐡") {
      setPufferfish("🐠");
    } else if (pufferfish === "🐠") {
      setPufferfish("🐋");
    } else {
      setPufferfish("🐡");
    }
  };
  const handleWhaleClick = () => {
    if (whale === "🐡") {
      setWhale("🐠");
    } else if (whale === "🐠") {
      setWhale("🐋");
    } else {
      setWhale("🐡");
    }
  };
  const handleClownfishClick = () => {
    if (clownfish === "🐡") {
      setClownfish("🐠");
    } else if (clownfish === "🐠") {
      setClownfish("🐋");
    } else {
      setClownfish("🐡");
    }
  };
  const handleReset = () => {
    setPufferfish("🐡");
    setWhale("🐋");
    setClownfish("🐠");
  };
  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handlePufferfishClick}>
          <span role="img" aria-label="Pufferfish">
            {pufferfish}
          </span>
        </button>
        <button type="button" onClick={handleWhaleClick}>
          <span role="img" aria-label="Whale">
            {whale}
          </span>
        </button>
        <button type="button" onClick={handleClownfishClick}>
          <span role="img" aria-label="Clownfish">
            {clownfish}
          </span>
        </button>
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {pufferfish + whale + clownfish === validCode && <p>Valid code!</p>}
    </div>
  );
}
