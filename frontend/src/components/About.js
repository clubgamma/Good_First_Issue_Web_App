import React from 'react'
import logo from './logo.png'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GoRepo, GoPerson } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
const About = () => {
  return (
    <>
      <div className="main">
        {/* header */}
        <div className="header">
          <div className="heading">
            <div className="logo-img">
              <img src={logo} className="About-logo" alt="logo" />
            </div>
            <h1>Club Gamma</h1>
          </div>
          <div className="header-content">
            <span>Empowering Student Tech Community</span>
          </div>
          <div className="social-links">
            <ul>
              <li>
                <a href="https://github.com/clubgamma">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/club_gamma">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="center">My Repositories</h2>
        <div className="repositories">
          {/* repo container starts here  */}
          <div className="repo-container">
            <div className="repo-name">
              <h2>
                <span className="repo-icons">
                  <GoRepo />
                </span>

                <a href="https://github.com/clubgamma/Good_First_Issue_Web_App" target={"_blank"}>
                  Good_First_Issue_Web_App
                </a>
              </h2>
            </div>
            <div className="repo-description">
              <p>A simple react-native expo app to never forget anything. </p>
            </div>
            <div className="repo-contributors">
              <h4>
                <span className="repo-icons">
                  <HiUserGroup />
                </span>
                Contributors
              </h4>
              <div className="contributor-container">
                <div className="contributor-icon"></div>
                <div className="contributor-names">
                  <div className="c-namecontainer">
                    <span className="repo-icons">
                      <GoPerson />
                    </span>
                    <span className="nameofcontributor">Nishu0</span>
                  </div>

                  <div className="c-namecontainer">
                    <span className="repo-icons">
                      <GoPerson />
                    </span>
                    <span className="nameofcontributor">syprogrammer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* repo container ends here  */}
        </div>
      </div>
    </>
  );
}

export default About