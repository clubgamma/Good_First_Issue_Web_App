import React from "react";
import "./Footer.css";
import { GoRepo } from "react-icons/go";

function Footer() {
  return (
    <footer className="footer-bg">
      <a
        className="repo-link"
        href="https://github.com/clubgamma/Good_First_Issue_Web_App"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to GitHub repository"
      >
        <GoRepo />
        <p>Go to repository</p>
      </a>

      <p className="footer-text">
        © {new Date().getFullYear()} Club Gamma · Made for Open Source Beginners 💙
      </p>
    </footer>
  );
}

export default Footer;