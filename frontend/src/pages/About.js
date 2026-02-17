import React from "react";
import "./About.css";
import { logo } from './index'


const About = () => {
  return (
    <div className="about-container dark:bg-zinc-900 dark:text-gray-300 transition-colors duration-300">

      <div className="about-bg dark:black">
        <img src={logo} className="About-logo" alt="logo" />
        <h2 className="dark:text-white">About Club Gamma</h2>
        <p className="dark:text-gray-400">
          Empowering Student Tech Community
        </p>
      </div>

      <hr className="dark:border-zinc-700" />

      <div className="what-gfi">
        <h2 className="dark:text-white">What is GFI</h2>
        <p className="dark:text-gray-400">
          GitHub advises the usage of "good first issue" (GFI) labels to identify issues that are feasible for newcomers to handle in order to speed up beginner onboarding. However, prior research demonstrates the scarcity and inappropriateness of manually classified GFIs, demonstrating the need for automated suggestions. In this project, we propose <strong className="dark:text-cyan-400">GFI-Web-app</strong>, a <strong>proof-of-concept</strong> for automatic GFI recommendation in reality (available at <a href="https://pending.com" className="dark:text-cyan-400">https://pending.com</a>). Project administrators can set up GFI-app to find and tag potential GFIs so that beginners can quickly find issues to fix when submitting their first contributions.
        </p>
      </div>

      <hr className="dark:border-zinc-700" />

      <div className="why-gfi">
        <h2 className="dark:text-white">Why GFI</h2>
        <p className="dark:text-gray-400">
          This website is primarily intended for developers who wish to contribute to open source software but are unsure of where or how to begin. This website gives developers filters so they may search and choose issues and repositories based on the programming languages they are most familiar with. Additionally, they have a choice in the issues they choose to address.
        </p>
      </div>

      <hr className="dark:border-zinc-700" />

      <div className="contribution">
        <h2 className="dark:text-white">Contribution Guidelines</h2>
        <p className="dark:text-gray-400">
          Welcome hackers it is really awesome have you here! Before start contributing with this project make sure you read our{" "}
          <a
            href="https://github.com/clubgamma/Good_First_Issue_Web_App/blob/main/CODE_OF_CONDUCT.md"
            className="dark:text-cyan-400"
          >
            Code Of Conduct
          </a>, it is really important to make this inclusive and open to everyone, otherwise, it would not be awesome to have you here.
        </p>
      </div>

    </div>

  );
};

export default About;
