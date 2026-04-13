import React from 'react'
import './Footer.css'
import { GoRepo, GoHeart, GoMarkGithub } from "react-icons/go";

function Footer() {
  return (
    <div className='footer-bg'>
      <div className='footer-content'>
        <div className='footer-section'>
          <GoMarkGithub className='footer-logo-icon' />
          <span className='footer-brand'>Club Gamma</span>
        </div>

        <div className='footer-section'>
          <a className='repo-link' href="https://github.com/clubgamma/Good_First_Issue_Web_App" target="_blank" rel="noreferrer">
            <GoRepo />
            <span>Repository</span>
          </a>
        </div>

        <div className='footer-section'>
          <p className='footer-credit'>
            Made with <GoHeart className='heart-icon' /> by Club Gamma
          </p>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2024 Club Gamma · Good First Issue Project</p>
      </div>
    </div>
  )
}

export default Footer