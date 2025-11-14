import React, { use } from "react";
import { CiMail } from "react-icons/ci";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import {
  AuthContext,
  EmailValueContext,
  ThemeContext,
} from "../../Contexts/Contexts";

const ForgetPassword = () => {
  const { typedEmail, setTypedEmail } = use(EmailValueContext);
  const { resetPassword } = use(AuthContext);
  const { theme } = use(ThemeContext);

  const clearField = (e) => {
    e.target.email.value = "";
    setTypedEmail("");
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = typedEmail.trim();
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset mail is send to your email",
          icon: "success",
        });
        e.target.reset();
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
    clearField(e);
  };

  return (
    <div
      className={`flex-1 flex items-center justify-center py-32 px-4 md:px-10 lg:px-20`}
    >
      <title>WarmPaws - Forget Password</title>
      <div className="max-w-md w-full mx-auto">
        <div
          className={` ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } rounded-xl shadow-xl p-8 md:p-12 text-center`}
        >
          <MdLockReset className="text-6xl text-primary mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-black dark:text-white text-secondary mt-4">
            Forgot Password?
          </h1>
          <p className="mt-4 dark:text-gray-200/80 text-gray-700/80">
            Enter your email address below and we'll send you a link to reset
            your password.
          </p>
          <form className="my-4 space-y-10" onSubmit={handleForgetPassword}>
            <div className="mb-4">
              <div className="relative">
                <CiMail className="absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-primary/50  bg-gray-200/10 focus:outline-none"
                  placeholder="email@example.com"
                  type="email"
                  name="email"
                  required
                  value={typedEmail}
                  onChange={(e) => setTypedEmail(e.target.value)}
                />
              </div>
            </div>

            <button className="mt-8 w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary/90 hover:bg-primary transition-all duration-300 transform hover:scale-105 text-white font-semibold  text-lg  leading-normal shadow-lg cursor-pointer">
              Reset Password
            </button>
          </form>
          <div className="mt-6">
            <Link
              className="text-sm font-bold text-primary/90  hover:underline"
              to="/auth/login"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
