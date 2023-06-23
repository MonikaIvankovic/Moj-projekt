import React, { useState } from "react";
import Container from "../../../components/container";

const ProgressBar = () => {
  const [currentLength, setCurrentLength] = useState(0);

  const increaseLength = () => {
    if (currentLength < 100) {
      setCurrentLength(currentLength + 5);
    } else if (currentLength === 100) {
      setCurrentLength(100);
      alert("Dostigao si maximum");
    }
  };

  const decreaseLength = () => {
    if (currentLength > 0) {
      setCurrentLength(currentLength - 5);
    } else if (currentLength === 0) {
      setCurrentLength(0);
      alert("Dostigao si minimum");
    }
  };

  return (
    <Container>
      <div className="progressbar">
        <h1>Progress bar</h1>
        {currentLength}%
        <progress id="progress" value={currentLength} max="100"></progress>
        <br />
        <div className="progressbar__wrapper">
          <button
            className="btn"
            onClick={decreaseLength}
            disabled={currentLength <= 0}
          >
            -
          </button>
          <button
            className="btn"
            onClick={increaseLength}
            disabled={currentLength >= 100}
          >
            +
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProgressBar;
