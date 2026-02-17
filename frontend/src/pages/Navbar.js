import { Moon, Sun } from "lucide-react";
import "./Navbar.css";
import { logo } from "./index";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="navbar-bg dark:bg-zinc-900">
      <div className="navbar-title">
        <img src={logo} className="About-logo" alt="logo" />
        <h1 className="dark:text-white">club gamma</h1>
      </div>

      <div className="navbar-tabs">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/repositories">Repositories</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </div>

      <div className="social-links">
        <ul>
          <li>
            <Link to="https://github.com/clubgamma" target="_blank">
              <FaGithub />
              <p>GitHub</p>
            </Link>
          </li>

          <li>
            <Link to="https://twitter.com/club_gamma" target="_blank">
              <FaTwitter />
              <p>Twitter</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="dark-mode-wrapper flex items-center justify-center">
        {theme === "light" ? (
          <Button
            onClick={() => setTheme("dark")}
            size="icon"
            className="
      relative
      h-10 w-10
      rounded-full
      bg-white/70
      dark:bg-black/40
      backdrop-blur-md
      border border-gray-200
      dark:border-gray-700
      shadow-md
      hover:scale-105
      hover:bg-gray-100
      dark:hover:bg-gray-800
      transition-all duration-300

    "
          >
            <Moon className="h-5 w-5 text-gray-700 dark:text-white transition-colors duration-300" />
          </Button>
        ) : (
          <Button
            onClick={() => setTheme("light")}
            size="icon"
            className="
      relative
      h-10 w-10
      rounded-full
      bg-white/70
      dark:bg-black/40
      backdrop-blur-md
      border border-gray-200
      dark:border-gray-700
      shadow-md
      hover:scale-105
      hover:bg-gray-100
      dark:hover:bg-gray-800
      transition-all duration-300
    "
          >
            <Sun className="h-5 w-5 text-yellow-500 transition-colors duration-300" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
