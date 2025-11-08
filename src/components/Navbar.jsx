import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="glass-blur rounded-2xl flex justify-between items-center py-4 px-2.5 md:px-10">
      <div className="flex justify-center items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden cursor-pointer">
            <IoMenu className="h-6 w-6" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content flex flex-col gap-2.5 gradient-bg rounded-box z-10 mt-7 w-52 p-4 shadow cursor-pointer"
          >
            <NavLink
              to={"/"}
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Home
            </NavLink>

            <NavLink
              to={"/pet-and-supplies"}
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Pets & Supplies
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-bold flex items-center gap-1.5">
          <span className="text-2xl gradient-text">PawsMart</span>
          <img src="./pawprint.png" alt="logo-icon" className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="hidden lg:flex justify-center items-center gap-8 cursor-pointer">
          <NavLink
            to={"/"}
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Home
          </NavLink>

          <NavLink
            to={"/pet-and-supplies"}
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Pets & Supplies
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <Link
          to={"/login"}
          className="hidden sm:block shadow-glow hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full font-bold cursor-pointer "
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="hidden sm:block btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
        >
          Register
        </Link>

        {/* mobile e only login btn dekhabe */}
        <Link
          to={"/login"}
          className="block sm:hidden btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
