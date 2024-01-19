import React from 'react'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Where Every Tail Tells a Happy Tale!</h1>
        <p>Your Pet's Wellness, Our Priority</p>  
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Start Appointment      
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
