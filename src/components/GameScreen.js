import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';

// Reverting to a hardcoded list of common tech stack keys
const allTechStackKeys = [
    "react", "angular", "vuejs", "python", "nodejs", "java",
    "cplusplus", "go", "ruby", "swift", "kotlin", "adobe", "aws", "azure",
    "docker", "git", "github", "googlecloud", "html5", "css3", "jira",
    "kubernetes", "linux", "mongodb", "mysql", "php", "postgresql",
    "sass", "spring", "typescript", "ubuntu", "vscode", "webpack" 
];

function GameScreen() {
    const navigate = useNavigate();
    const [level, setLevel] = useState(Number(localStorage.getItem("level")) || 1);
    const [iconSequence, setIconSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [displaySequence, setDisplaySequence] = useState(true);
    const [progressBarWidth, setProgressBarWidth] = useState(100);

    // Determine available tech stack keys for the current level
    const availableTechStackKeys = allTechStackKeys.slice(0, Math.min(level * 3, allTechStackKeys.length));

    useEffect(() => {
        if (displaySequence) {
            // Sequence length now corresponds to the level number
            const sequence = generateIconSequence(level);
            setIconSequence(sequence);
            localStorage.setItem("icon-sequence-answer", JSON.stringify(sequence));
            
            const totalTime = level * 1000 + 2000; // Total time for display
            let startTime = Date.now();

            const interval = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                const remainingTime = totalTime - elapsedTime;
                const newWidth = (remainingTime / totalTime) * 100;
                setProgressBarWidth(Math.max(0, newWidth));

                if (remainingTime <= 0) {
                    clearInterval(interval);
                    setDisplaySequence(false);
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [level, displaySequence]);

    const generateIconSequence = (length) => {
        const sequence = [];
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableTechStackKeys.length);
            sequence.push(availableTechStackKeys[randomIndex]);
        }
        return sequence;
    };

    const checkCorrection = () => {
        const correctSequence = JSON.parse(localStorage.getItem("icon-sequence-answer"));
        
        if (JSON.stringify(userSequence) === JSON.stringify(correctSequence)) {
            localStorage.setItem("level", level + 1);
            navigate("/ending");
        } else {
            localStorage.setItem("user-sequence", JSON.stringify(userSequence));
            navigate("/wrong");
        }
    };

    const addToSequence = (iconKey) => {
        setUserSequence((prevSequence) => [...prevSequence, iconKey]);
    };

    const clearUserSequence = () => {
        setUserSequence([]);
    };

    return (
        <div className="mainScreen">
            <h2 className="mainLevel">
                {displaySequence ? `Level: ${level}` : "What was the sequence?"}
            </h2>

            {displaySequence ? (
                <>
                    <div className="icon-sequence-container">
                        {iconSequence.map((iconKey, index) => (
                            <StackIcon key={index} name={iconKey} className="icon-display" />
                        ))}
                    </div>
                    <div className="progress-container">
                        <div id="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
                    </div>
                </>
            ) : (
                <>
                    {/* User input display moved above buttons */}
                    {!displaySequence && userSequence.length > 0 && (
                        <div id="user-sequence-display" className="icon-sequence-container">
                            {userSequence.map((iconKey, index) => (
                                <StackIcon key={index} name={iconKey} className="icon-display" />
                            ))}
                        </div>
                    )}

                    <div className="icon-selection-container"> {/* Moved above buttons */}
                        {availableTechStackKeys.map((iconKey, index) => (
                            <div key={index} onClick={() => addToSequence(iconKey)}>
                                <StackIcon name={iconKey} className="icon-selection" />
                            </div>
                        ))}
                    </div>

                    <div className="button-container">
                        <button className="mainButton" onClick={checkCorrection}>Check</button>
                        <button className="mainButton secondary" onClick={clearUserSequence}>Clear</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default GameScreen;