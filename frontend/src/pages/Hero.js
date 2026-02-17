import React from 'react'
import './Hero.css'
import { lightModeLogoWithName } from './index'

function Hero() {
  return (
    <div className="hero-bg dark:bg-black">
      <div className="w-60 h-60 rounded-full dark:bg-slate-300 flex items-center justify-center shadow-[0_0_20px_#00ffff,0_0_40px_#00ffff]">
        <img
          src={lightModeLogoWithName}
          alt="Light Mode Logo"
          className="w-44 h-44 object-contain"
        />
      </div>
    </div>
  );
}


export default Hero