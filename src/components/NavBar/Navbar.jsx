import React, { use } from "react";
import { IoLogOut, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { AuthContext, ThemeContext } from "../../Contexts/Contexts";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const { user, logOutUSer } = use(AuthContext);
  const { theme } = use(ThemeContext);
  const imgUrl = user?.photoURL || "/avatar.png";
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
    <div className={`${theme == "light" ? "glass-blur" : "glass-blur-dark"} `}>
      <div className="rounded-2xl flex justify-between items-center py-4 px-2.5 md:px-0 container mx-auto  ">
        <div className="flex justify-center items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <IoMenu className="h-6 w-6 cursor-pointer text-primary" />
            </div>
            <ul
              tabIndex="-1"
              className={`menu menu-sm dropdown-content ${
                theme == "light" ? "gradient-bg" : "gradient-bg-dark"
              } rounded-box z-10 mt-7 w-52 p-4 shadow cursor-pointer`}
            >
              <NavLink
                to={"/"}
                className="hover:scale-105 hover:text-primary transition-all duration-300"
              >
                Home
              </NavLink>

              <NavLink
                to={"/category-filtered-product"}
                className="hover:scale-105 hover:text-primary transition-all duration-300"
              >
                Pets & Supplies
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to={"/add-listing"}
                    className="hover:scale-105 hover:text-primary transition-all duration-300"
                  >
                    Add Listing
                  </NavLink>
                  <NavLink
                    to={"/my-listings"}
                    className="hover:scale-105 hover:text-primary transition-all duration-300"
                  >
                    My Listing
                  </NavLink>
                  <NavLink
                    to={"/my-orders"}
                    className="hover:scale-105 hover:text-primary transition-all duration-300"
                  >
                    My Orders
                  </NavLink>
                </>
              )}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-xl font-bold flex items-center gap-1 w-36"
          >
            <span className="text-2xl gradient-text">
              <Typewriter
                words={["PawMart"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
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
              to={"/category-filtered-product"}
              className="hover:scale-105 hover:text-primary transition-all duration-300"
            >
              Pets & Supplies
            </NavLink>
            {user && (
              <>
                <NavLink
                  to={"/add-listing"}
                  className="hover:scale-105 hover:text-primary transition-all duration-300"
                >
                  Add Listing
                </NavLink>
                <NavLink
                  to={"/my-listings"}
                  className="hover:scale-105 hover:text-primary transition-all duration-300"
                >
                  My Listing
                </NavLink>
                <NavLink
                  to={"/my-orders"}
                  className="hover:scale-105 hover:text-primary transition-all duration-300"
                >
                  My Orders
                </NavLink>
              </>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {/* toggle night and light mode */}
          <ToggleTheme />
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    src={imgUrl}
                    alt="Profile"
                    onError={(e) => {
                      e.currentTarget.src = "/avatar.png";
                      e.currentTarget.classList.add("scale-105");
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
                <li className="text-sm font-bold my-5 px-1">
                  {user?.displayName}
                </li>
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
    </div>
  );
};

export default Navbar;
