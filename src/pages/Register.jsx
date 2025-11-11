import React, { use, useState } from "react";
import { CiLink, CiLock, CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { IoPersonOutline } from "react-icons/io5";
import { AuthContext, ThemeContext } from "../Contexts/Contexts";
import Swal from "sweetalert2";

const Register = () => {
  const { signWithGoogle, createUser, updateUserProfile } = use(AuthContext);
  const { theme } = use(ThemeContext);
  const [error, setError] = useState(false);
  const [loadingReg, setLoadingReg] = useState(false);
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    let photourl = e.target.photourl.value;
    const password = e.target.password.value;

    const upperCaseRegEx = /[A-Z]/;

    const LowerCaseRegEx = /[a-z]/;

    if (name.length < 3) {
      setError("Userame must have at least 3 latter");
      return;
    }
    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
      return;
    }
    if (!LowerCaseRegEx.test(password)) {
      setError("Must have a Lowercase letter in the password");
      return;
    }
    if (!upperCaseRegEx.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }

    setLoadingReg(true);
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photourl)
          .then(() => {
            navigate("/");
            setLoadingReg(false);
            Swal.fire({
              title: "Registration Succenfull",
              icon: "success",
              draggable: true,
            });
            e.target.reset();
          })
          .catch((err) => {
            setLoadingReg(false);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      })
      .catch((error) => {
        console.log("Registration Faild! Try again later");
        setError("Registration Faild! Try again later");
        setLoadingReg(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
    setError("");
  };

  const handleGoogleSignIn = () => {
    setError("");
    signWithGoogle()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Successfully SignIn with google",
          icon: "success",
          draggable: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };
  return (
    <div className="my-container flex items-center justify-center">
      <title>PawsMart - Register</title>
      <div
        className={`w-full max-w-lg ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        } p-8 rounded-xl`}
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-1.5">
            <span className="text-2xl gradient-text">PawsMart</span>
            <img src="/pawprint.png" alt="logo-icon" className="w-6 h-6" />
          </h1>
          <p className="text-lg dark:text-white text-secondary mt-2">
            Create Your Account
          </p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Name
            </label>
            <div className="relative">
              <IoPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Email
            </label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
                placeholder="email@example.com"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Photo URL
            </label>
            <div className="relative">
              <CiLink className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
                placeholder="Enter your photo url"
                type="text"
                name="photourl"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Password
            </label>
            <div className="relative">
              <CiLock className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
                placeholder="••••••"
                type={eye ? "text" : "password"}
                name="password"
                required
              />

              <span
                onClick={() => setEye(!eye)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {eye ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
          <p className="text-sm text-rose-500 mb-2.5">{error}</p>
          <button className="w-full flex items-center justify-center rounded-full py-3 px-6 btn-primary hover:bg-primary transition-all duration-300 transform hover:scale-105 text-white font-semibold  text-lg  leading-normal shadow-lg cursor-pointer">
            {loadingReg ? (
              <span className="loading loading-spinner loading-xl text-base-100"></span>
            ) : (
              <span>Register</span>
            )}
          </button>
        </form>

        <div className="flex items-center justify-between my-5">
          <hr className="text-gray-300 w-[45%]" />
          <span>Or</span>
          <hr className="text-gray-300 w-[45%]" />
        </div>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2.5 w-full h-12 rounded-full border-2 border-primary/50 dark:bg-gray-200/20 dark:hover:bg-gray-200/10 bg-white hover:bg-gray-100  transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="dark:text-white text-secondary">
            Already have an Account?
            <Link
              to="/auth/login"
              className="ml-1.5 font-medium gradient-text hover:underline"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
