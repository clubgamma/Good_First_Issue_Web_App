import React from 'react'
import './Navbar.css'
import {logo} from './index'
import { FaGithub, FaTwitter } from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-bg'>
      <div className='navbar-title'>
        <img src={logo} className="About-logo" alt="logo" />
        <h1>club gamma</h1>
      </div>

      <div className='navbar-tabs'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/repositories'>Repositories</NavLink>
          </li>
          <li>
            <NavLink to='/form'>Form</NavLink>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <ul>
          <li>
            <Link to="https://github.com/clubgamma" target='_blank'>
              <FaGithub />
              <p>GitHub</p>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/club_gamma" target='_blank'>
              <FaTwitter />
              <p>Twitter</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar