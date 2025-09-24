import { useNavigate } from 'react-router-dom';
import '../assets/styles/NumberWrong.css'

function NumberWrong() {
  const navigate = useNavigate();

  const restartGame = () => {
    localStorage.setItem("level", 1);
    navigate("/"); // Go back to the main screen
  };

  return (
    <div className="mainScreen">
      <h1 className="wrong">Wrong Answer!</h1>
      <button className="mainButton" onClick={restartGame}>Try Again</button>
    </div>
  );
}

export default NumberWrong;