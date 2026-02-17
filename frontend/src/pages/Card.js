import React from "react";
import "./Card.css";
import { GoRepo } from "react-icons/go";
import { Link } from "react-router-dom";

function Card({ url, title, desc }) {
  return (
    <div className="card-bg ">
      <div className="card dark:bg-white">
        <Link to={url} target="_blank" className="repo-title">
          <div>
            <GoRepo size={20} />
          </div>
          <h3 className="dark:text-black font-extrabold">{title}</h3>
        </Link>
        <p className="dark:text-black">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
