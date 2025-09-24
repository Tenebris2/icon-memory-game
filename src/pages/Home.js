import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

  const startLevel = () => {
    localStorage.setItem("level", 1);
    navigate("/game"); // Navigate to the game screen
  };
	return (
		<div className="mainScreen">
			<i className="fa-solid fa-brain fa-fade fa-6x"></i>
			<h1 className="mainTitle">Icon Memory</h1>
			<h2 className="mainDescription">Memorize the sequence of tech icons. Can you do it?</h2>
			<button className="mainButton" onClick={startLevel}>Start</button>
		</div>
	)
}

export default Home
