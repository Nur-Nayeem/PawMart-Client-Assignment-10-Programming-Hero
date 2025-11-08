import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="gradient-bg">
      <header className="fixed top-2 w-full z-50">
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto pt-30">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
