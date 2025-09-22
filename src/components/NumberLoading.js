import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NumberLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/game");
    }, 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mainScreen">
      <h1>Loading...</h1>
    </div>
  );
}

export default NumberLoading;