import React from 'react';
import { useNavigate } from 'react-router-dom';

function NumberEnding() {
  const navigate = useNavigate();

  const nextLevel = () => {
    navigate("/game"); // Go back to game screen to start next level
  };

  return (
    <div className="mainScreen">
      <h1>Correct!</h1>
      <button className="mainButton" onClick={nextLevel}>Next Level</button>
    </div>
  );
}

export default NumberEnding;