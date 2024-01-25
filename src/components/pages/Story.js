import React, { useState, useEffect } from 'react';
import './Story.css';

function Story() {
   // State variable to store the background image URL
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch the background image URL or set it from some source
  const imageUrl = './story.jpg'; // Replace with the correct path to your image
  setBackgroundImage(imageUrl);
  }, []);

  return (        
      <div className='story-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Our Furpect Story</h1>
      <p>
        <br />At FurryTails, we envision a world where every pet
        <br/>enjoys a life of optimal health, happiness, and companionship,
        <br/>supported by compassionate and advanced veterinary care.
          </p>
          </div>
  );
};

export default Story;
