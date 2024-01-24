import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <img src="./about-banner.jpg" alt="banner" />
      <h1>About Us</h1>
      <p>
        Welcome to FurryTails, your trusted partner in feline healthcare.
        <br /><br />We are your partners in ensuring the longevity and happiness of
        <br />your animal companions. Our commitment to the well-being of
        <br />your pets is reflected in our personalized and compassionate 
        <br />approach to veterinary medicine.
      </p>
    </div>


  );
}

export default About;