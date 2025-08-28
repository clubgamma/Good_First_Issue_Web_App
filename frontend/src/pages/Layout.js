import React from 'react'
import {Navbar, Footer} from './index'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div>
      <header>
        <h1>Good First Issue Web App</h1>
        <nav>
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleTheme} className="dark-toggle-btn">
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout