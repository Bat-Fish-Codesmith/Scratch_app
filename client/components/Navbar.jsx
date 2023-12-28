import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToForum = () => {
    navigate('/Forum');
  };

  const navigateToFishData = () => {
    navigate('/FishData');
  };

  const navigateToLogout = () => {
    navigate('/logout');
  };

  return (
    <nav>
      <ul>
        <li><button onClick={() => navigateToHome()}>Home</button></li>
        <li><button onClick={() => navigateToForum()}>Forum</button></li>
        <li><button onClick={() => navigateToFishData()}>Fish Data</button></li>
        <li><button onClick={() => navigateToLogout()}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
