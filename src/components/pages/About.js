import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-us-container'>
      <img src="./about-banner.jpg" alt="banner" />
      <h1>About Us</h1>
      <p>
        Welcome to FurryTails, your trusted partner in feline healthcare.
        <br /><br />At FurryTails, we understand the unique bond between your pets
        <br />and their owners. Our dedicated team of veterinarians and staff
        <br /> are passionate about providing compassionate, personalized care
        <br /> to ensure the well-being of your feline family members.
      </p>
    </div>


  );
}

export default About;