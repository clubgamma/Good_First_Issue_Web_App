import React from 'react'
import './Card.css'
import { GoRepo } from "react-icons/go";
import { Link } from 'react-router-dom';

function Card({ url, image, title, desc, issue, tags }) {
  return (
    <div className='card-details'>
      <Link to={url} target='_blank' className='repo-title'>
        <img src={image} alt='' className='repo-image' />
        <h3>{title}</h3>
        <GoRepo size={30} />
      </Link>
      
      <div className='repo-details'>
        {/* <h4>Issue:</h4> */}
        <p>{desc}</p>
      </div>

      <div className='issue-details'>
        <h4>Issue:</h4>
        <p>{issue}</p>
      </div>

      <div className='tags'>
        {tags.map((tag, index) => (
          <span key={index} className='tag'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Card