import React from 'react';
import './Hero.css';
import { lightModeLogoWithName } from './index';
import { Link } from 'react-router-dom';
import { GoCode, GoRocket, GoBook } from "react-icons/go";

// A simple reusable card component for the hero section
const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);


function Hero() {
  return (
    <div className='hero-bg'>
      <div className='hero-content'>
        <img src={lightModeLogoWithName} alt="Club Gamma Logo" className="hero-logo" />
        <h1 className="hero-headline">The Open Source Hub of NIT Agartala</h1>
        <p className="hero-subheadline">
          A community where students collaborate, learn, and contribute to open-source projects.
        </p>
        <Link to="/repositories" className="cta-button">
          Explore Projects
        </Link>
      </div>

      <div className="feature-cards-container">
        <FeatureCard 
            icon={<GoCode size={40} />}
            title="Contribute"
            description="Find beginner-friendly issues and make your first pull request on real-world projects."
        />
        <FeatureCard 
            icon={<GoBook size={40} />}
            title="Learn"
            description="Gain hands-on experience with modern technologies and best practices in software development."
        />
        <FeatureCard 
            icon={<GoRocket size={40} />}
            title="Innovate"
            description="Join us to build innovative solutions and bring new ideas to life from scratch."
        />
      </div>
    </div>
  )
}

export default Hero;
