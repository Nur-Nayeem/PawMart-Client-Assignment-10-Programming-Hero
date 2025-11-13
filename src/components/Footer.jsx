import React, { use } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { ThemeContext } from "../Contexts/Contexts";

const Footer = () => {
  const { theme } = use(ThemeContext);
  return (
    <footer
      className={`w-full ${
        theme == "light" ? "glass-blur" : "glass-blur-dark"
      } mt-12 py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 `}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:justify-items-end gap-8 px-2.5">
        <div className="space-y-4 ">
          <Link
            to={"/"}
            className="text-xl font-bold flex items-center gap-1.5"
          >
            <span className="text-2xl gradient-text">PawMart</span>
            <img src="/pawprint.png" alt="logo-icon" className="w-6 h-6" />
          </Link>
          <p className="text-sm">
            PawMart connects local pet owners and buyers for adoption and pet
            care products.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm flex flex-col">
            <Link
              className="hover:text-primary transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-primary transition-colors duration-200"
              to="#"
            >
              Contact
            </Link>

            <Link
              className="hover:text-primary transition-colors duration-200"
              to="#"
            >
              Terms of Service
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebook className="hover:text-primary transition-colors duration-200 cursor-pointer" />
            <FaXTwitter className="hover:text-primary transition-colors duration-200 cursor-pointer" />
            <FaInstagram className="hover:text-primary transition-colors duration-200 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm dark:text-gray-300 text-secondary/80">
        <hr className="my-5 max-w-5xl mx-auto dark:text-gray-300/10 text-gray-600/10" />
        <p>© 2025 PawMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
