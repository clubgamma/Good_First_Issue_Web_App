import React from "react";
import "./About.css";
import {logo} from './index'


const About = () => {
  return (
    <div className="about-container">
      <div className="about-bg">
        <img src={logo} className="About-logo" alt="logo" />
        <h2>About Club Gamma</h2>
        <p>Empowering Student Tech Community</p>
      </div>
      <hr />
      <div className="what-gfi">
        <h2>What is GFI</h2>
        <p>GitHub advises the usage of "good first issue" (GFI) labels to identify issues that are feasible for newcomers to handle in order to speed up beginner onboarding. However, prior research demonstrates the scarcity and inappropriateness of manually classified GFIs, demonstrating the need for automated suggestions. In this project, we propose <strong>GFI-Web-app</strong>, a <strong>proof-of-concept</strong> for automatic GFI recommendation in reality (available at <a href="https://pending.com">https://pending.com</a>). Project administrators can set up GFI-app to find and tag potential GFIs so that beginners can quickly find issues to fix when submitting their first contributions.</p>
      </div>
      <hr />
      <div className="why-gfi">
        <h2>Why GFI</h2>
        <p>This website is primarily intended for developers who wish to contribute to open source software but are unsure of where or how to begin. This website gives developers filters so they may search and choose issues and repositories based on the programming languages they are most familiar with. Additionally, they have a choice in the issues they choose to address.</p>
      </div>
      <hr />

      <div className="contribution">
        <h2>Contribution Guidelines</h2>
        <p>Welcome hackers it is really awesome have you here! Before start contributing with this project make sure you read our <a href="https://github.com/clubgamma/Good_First_Issue_Web_App/blob/main/CODE_OF_CONDUCT.md">Code Of Conduct</a>, it is really important to make this inclusive and open to everyone, otherwise, it would not be awesome to have you here</p>
      </div>
    </div>
  );
};

export default About;
