import React from 'react'
import './Hero.css'
import {lightModeLogoWithName} from './index'

function Hero() {
  return (
    <div className='hero-bg'>
      <div>
        <img src={lightModeLogoWithName} alt="Light Mode Logo" />
        {/* <h1>Welcome to Club Gamma</h1> */}
      </div>
    </div>
  )
}

export default Hero