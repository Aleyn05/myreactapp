import React from 'react'
import '../App.css';
import { Button } from './Button2'
import './HeroSection.css'


function HeroSection() {
  return (
      <div className='hero-container'>
        <img src="./hero-banner.png" alt="banner" />
          <h1>Where Every Tail <br />Tells a Happy Tale!</h1>
        <p>Your Pet's Wellness, Our Priority</p>  
        <div className='hero-btns'>
            <Button className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'>
                Start Appointment      
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;
