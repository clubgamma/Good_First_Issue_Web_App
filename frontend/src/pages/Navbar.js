import React from 'react'
import './Navbar.css'
import {logo} from './index'
import { FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
 
function Navbar() {
  const { theme, toggleTheme } = useTheme()
 
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
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </li>
          <li>
            <a href="https://github.com/clubgamma" target='_blank' rel="noopener noreferrer">
              <FaGithub />
              <p>GitHub</p>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/club_gamma" target='_blank' rel="noopener noreferrer">
              <FaTwitter />
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
 
export default Navbar