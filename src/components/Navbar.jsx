import React, { use, useEffect } from "react";
import { IoLogOut, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext, ThemeContext } from "../Contexts/Contexts";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUSer } = use(AuthContext);
  const { theme, setTheme } = use(ThemeContext);
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOutUser = () => {
    logOutUSer()
      .then(() => {
        Swal.fire({
          title: "Logout successfull",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };

  return (
    <div
      className={` ${
        theme == "light" ? "glass-blur" : "glass-blur-dark"
      } rounded-2xl flex justify-between items-center py-4 px-2.5 md:px-10`}
    >
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

            <NavLink
              to={"/add-linsting"}
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Add Listing
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-bold flex items-center gap-1.5">
          <span className="text-2xl gradient-text">PawsMart</span>
          <img src="/pawprint.png" alt="logo-icon" className="w-6 h-6" />
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

          <NavLink
            to={"/add-linsting"}
            className="hover:scale-105 hover:text-primary transition-all duration-300"
          >
            Add Listing
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <label className="toggle text-base-content">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.currentTarget.src = "/avater.jpg";
                  }}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className={`menu  menu-sm dropdown-content ${
                theme == "light" ? "gradient-bg" : "gradient-bg-dark"
              } rounded-box z-50 mt-3 w-52 p-2 shadow`}
            >
              <div className="">
                <li className="text-sm font-bold">{user?.displayName}</li>
              </div>
              <li>
                <button
                  onClick={handleSignOutUser}
                  className="btn btn-sm text-left py-2 btn-primary text-white rounded-2xl"
                >
                  <IoLogOut className="text-sm" /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to={"/auth/login"}
              className="hidden sm:block shadow-glow hover:scale-105 transition-transform duration-300 py-2 px-4 rounded-full font-bold cursor-pointer "
            >
              Login
            </Link>
            <Link
              to={"/auth/register"}
              className="hidden sm:block btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
            >
              Register
            </Link>

            {/* mobile e only login btn dekhabe */}
            <Link
              to={"/auth/login"}
              className="block sm:hidden btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
