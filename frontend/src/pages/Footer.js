import React from "react";
import "./Footer.css";
import { GoRepo } from "react-icons/go";

function Footer() {
  return (
    <div className="footer-bg dark:bg-gray-900">
      <a
        className="repo-link"
        href="https://github.com/clubgamma/Good_First_Issue_Web_App"
        target={"_blank"}
      >
        <GoRepo />
        <p className="dark:text-white">Go to repository</p>
      </a>
    </div>
  );
}

export default Footer;
