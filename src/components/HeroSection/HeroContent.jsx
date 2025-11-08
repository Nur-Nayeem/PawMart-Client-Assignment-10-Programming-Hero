import React from "react";

const HeroContent = ({ slide }) => {
  return (
    <>
      <h2 className="text-center text-4xl sm:text-5xl font-semibold">
        {slide.title}
      </h2>
      <p className="text-lg text-center my-6">{slide.des}</p>
      <button className="btn-primary font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-4xl cursor-pointer hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-lg">
        Adopt Now
      </button>
    </>
  );
};

export default HeroContent;
