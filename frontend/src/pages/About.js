import React from "react";
import "./About.css";
import {logo} from './index'



import { FaGithub, FaTwitter } from "react-icons/fa";
import { GoRepo, GoPerson } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";

const About = () => {
  return (
    <div className="main">
      {/* <header className="header navbar">
        <div className="logo-img">
          <img src={logo} alt="Club Gamma Logo" className="About-logo" />
          <div>
          <h1>Club Gamma</h1>
          <p>Empowering Student Tech Community</p>
          </div>
        </div>
        <div className="social-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/form">Add Repo</a></li>
          </ul>
          <a href="https://github.com/clubgamma">
            <FaGithub />
          </a>
          <a href="https://twitter.com/club_gamma">
            <FaTwitter />
          </a>
        </div>
      </header> */}
      <section className="what-is-gfi">
        <h2>What is GFI?</h2>
        <p>
          GitHub advises the usage of "good first issue" (GFI) labels to identify
          issues that are feasible for newcomers to handle in order to speed up
          beginner onboarding. However, prior research demonstrates the scarcity
          and inappropriateness of manually classified GFIs, demonstrating the
          need for automated suggestions. In this project, we propose
          GFI-Web-app, a proof-of-concept for automatic GFI recommendation in
          reality. Project administrators can set up GFI-app to find and tag
          potential GFIs so that beginners can quickly find issues to fix when
          submitting their first contributions.
        </p>
      </section>
      <section className="motivation">
        <h2>Motivation for the Project</h2>
        <p>
          This website is primarily intended for developers who wish to
          contribute to open source software but are unsure of where or how to
          begin. This website gives developers filters so they may search and
          choose issues and repositories based on the programming languages they
          are most familiar with. Additionally, they have a choice in the issues
          they choose to address.
        </p>
      </section>
      <section className="how-to-contribute">
        <h2>How to Contribute</h2>
        <ol>
          <li>Visit our GitHub repository: <a href="https://github.com/clubgamma/Good_First_Issue_Web_App">Good_First_Issue_Web_App</a></li>
          <li>Explore open issues and select a good first issue.</li>
          <li>Fork the repository and create a branch for your work.</li>
          <li>Make the necessary changes and commit them.</li>
          <li>Create a pull request to propose your changes.</li>
          <li>Participate in discussions and complete the assigned tasks.</li>
        </ol>
      </section>
      {/* <footer className="footer">
        <p>Find us on GitHub: <a href="https://github.com/clubgamma/Good_First_Issue_Web_App">clubgamma/Good_First_Issue_Web_App</a></p>
      </footer> */}


    </div>
  );
};

export default About;






