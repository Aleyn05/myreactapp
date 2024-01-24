import React, { useState, useEffect } from 'react';
import './Mission.css';

function Mission() {
  // State variable to store the background image URL
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch the background image URL or set it from some source
    const imageUrl = './mission-banner2.jpg'; // Replace with the correct path to your image
    setBackgroundImage(imageUrl);
  }, []);

  return (
    <div className='mission-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Mission</h1>
      <p>
        Our mission is to provide exceptional, personalized veterinary care,
        <br/>fostering the well-being of pets and strengthening the human-animal bond.
        <br/>We are committed to delivering veterinary services with compassionate care,
        <br/>maintaining high standards in veterinary medicine through innovating, educating,
        <br/>and providing advanced technologies.
      </p>
    </div>
  );
}

export default Mission;
