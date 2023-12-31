import React, { useState } from 'react';
import axios from 'axios';

const FishData = () => {
  const [fishName, setFishName] = useState('');
  const [fishData, setFishData] = useState(null);

  const searchFish = async () => {
    try {
      // whatever the api endpoint
      const response = await axios.get(`/api/fish?name=${fishName}`);
      setFishData(response.data);
    } catch (error) {
      console.error('Error searching for fish:', error);
    }
  };

  const renderFishInfo = () => {
    if (fishData) {
      //whatever we want the fish data to look like
      return (
        <div>
          <h3>{fishData.name}</h3>
          <p>{fishData.description}</p>
          {/* Add more details as needed */}
          <img src={fishData.image} alt={fishData.name} />
           //if we want to add the lopgic to flip the image and reveal the data
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Fish Data</h2>
      <div>
        <input
          type="text"
          placeholder="Enter fish name"
          value={fishName}
          onChange={(e) => setFishName(e.target.value)}
        />
        <button onClick={searchFish}>Search</button>
      </div>
      {renderFishInfo()}
    </div>
  );
};

export default FishData;


