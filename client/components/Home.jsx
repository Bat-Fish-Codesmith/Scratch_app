import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToForum = () => {
    navigate('/Forum'); 
  }

  const navigateToFishData = () => {
    navigate('/FishData');
  };

  return (
    <div>
      <h2>Welcome to the Fishing App!</h2>
      <p>Discover the exciting world of fishing and connect with fellow anglers.</p>
      <div>
      <button onClick={() => navigateToForum()}>Join the Community!</button>
        <button onClick={() => navigateToFishData()}>Learn About Fish</button>
      </div>
    </div>
  );
};

export default Home;
