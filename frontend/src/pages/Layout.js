import React from "react";
import { Navbar, Footer } from "./index";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f7efec] dark:bg-zinc-900 transition-colors duration-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
