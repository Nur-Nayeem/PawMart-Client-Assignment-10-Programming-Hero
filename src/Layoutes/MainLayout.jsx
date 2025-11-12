import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../Contexts/Contexts";

const MainLayout = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className={theme == "light" ? "gradient-bg" : "gradient-bg-dark"}>
      <header className="fixed top-0 w-full z-50">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="pt-20 px-2.5 sm:px-0 min-h-[calc(100vh-311px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
