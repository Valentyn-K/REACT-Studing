import React from "react";
import Timer from "../Timer/TimerContainer";
import StepSelector from "../StepSelector/StepSelectorContainer";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

function App() {
  return (
    <div style={containerStyle}>
      <Timer />
      <StepSelector />
    </div>
  );
}

export default App;
