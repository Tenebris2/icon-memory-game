import { Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import NumberLoading from './components/NumberLoading';
import NumberEnding from './components/NumberEnding';
import NumberWrong from './components/NumberWrong';
import GameScreen from './components/GameScreen';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<GameScreen />} />
      <Route path="/loading" element={<NumberLoading />} />
      <Route path="/ending" element={<NumberEnding />} />
      <Route path="/wrong" element={<NumberWrong />} />
    </Routes>
  );
}

export default App;