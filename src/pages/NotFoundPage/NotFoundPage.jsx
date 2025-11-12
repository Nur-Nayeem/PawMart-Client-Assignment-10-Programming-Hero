import React, { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Contexts/Contexts";

const NotFoundPage = () => {
  const { theme } = use(ThemeContext);
  return (
    <section
      className={`h-screen flex flex-1 items-center justify-center py-16 px-2.5 sm:px-0  ${
        theme == "light" ? "gradient-bg" : "gradient-bg-dark"
      }`}
    >
      <title>Error-404</title>
      <div className="relative w-full max-w-2xl text-center">
        <div
          className={`relative ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } rounded-xl p-8 md:p-12 shadow-2xl shadow-black/20`}
        >
          <h1
            className={`text-8xl md:text-9xl font-black drop-shadow-lg ${
              theme == "light" ? "text-[#362920]" : "text-white"
            }`}
          >
            404
          </h1>
          <div className="flex flex-col items-center gap-4 mt-6">
            <p
              className={`text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center ${
                theme == "light" ? "text-[#362920]" : "text-white"
              }`}
            >
              Oops! Page Not Found
            </p>
            <p
              className={`text-base font-normal leading-normal max-w-[480px] text-center ${
                theme == "light" ? "text-[#362920]/80" : "text-white/80"
              }`}
            >
              The page you're looking for must have gone for a walk.
            </p>
            <Link
              to={"/"}
              className="mt-5 block btn-primary shadow-glow hover:scale-101 transition-transform duration-300 text-white py-4 px-8 rounded-xl font-bold cursor-pointer"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
