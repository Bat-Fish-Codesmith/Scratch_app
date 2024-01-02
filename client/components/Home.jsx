import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-heading">Welcome to the Fishing App!</h2>
      <p className="app-description">Discover the exciting world of fishing and connect with fellow anglers.</p>
      <div>
        <Link to="/Forum">
          <button className="join-chat-btn">Join the Chat</button>
        </Link>
        <Link to="/FishData">
          <button className="learn-fish-btn">Learn about Fish</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
