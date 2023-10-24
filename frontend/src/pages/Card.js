import React from 'react'
import './Card.css'
import { GoRepo } from "react-icons/go";
import { Link } from 'react-router-dom';

function Card({url, title, desc}) {
  return (
    <div className='card-bg'>
      <div className='card'>
        <Link to={url} target='_blank' className='repo-title'>
          <div><GoRepo size={20} /></div>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card