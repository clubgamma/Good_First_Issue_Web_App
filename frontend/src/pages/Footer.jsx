import React from 'react'
import './Footer.css'
import { GoRepo, GoPerson } from "react-icons/go";

function Footer() {
  return (
    <div className='footer-bg'>
      <a className='repo-link' href="https://github.com/clubgamma/Good_First_Issue_Web_App" target={"_blank"}>
        <GoRepo />
        <p>Go to repository</p>
      </a>
    </div>
  )
}

export default Footer