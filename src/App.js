import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NumberLoading from './components/NumberLoading';
import NumberEnding from './components/NumberEnding';
import NumberWrong from './components/NumberWrong';
import GameScreen from './components/GameScreen';

function App() {
  const navigate = useNavigate();

  const startLevel = () => {
    localStorage.setItem("level", 1);
    navigate("/game"); // Navigate to the game screen
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="mainScreen">
          <i className="fa-solid fa-brain fa-fade fa-6x"></i>
          <h1 className="mainTitle">Icon Memory</h1>
          <h2 className="mainDescription">Memorize the sequence of tech icons. Can you do it?</h2>
          <button className="mainButton" onClick={startLevel}>Start</button>
        </div>
      } />
      <Route path="/game" element={<GameScreen />} />
      <Route path="/loading" element={<NumberLoading />} />
      <Route path="/ending" element={<NumberEnding />} />
      <Route path="/wrong" element={<NumberWrong />} />
    </Routes>
  );
}

export default App;