import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Fishing App!</h2>
      <p>Discover the exciting world of fishing and connect with fellow anglers.</p>
      <div>
        <Link to="/Forum">
          <button>Join the Chat</button>
        </Link>
        <Link to="/fishinfo">
          <button>Learn about Fish</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
