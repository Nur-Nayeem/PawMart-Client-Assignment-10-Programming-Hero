import React, { use } from "react";
import { CiLocationOn } from "react-icons/ci";
import { ThemeContext } from "../../contexts/ThemeContext";

const ListingCard = ({ category = "food" }) => {
  const { theme } = use(ThemeContext);
  const badges =
    (category == "acceddoris" && "bg-[#ff9a85]/30 text-[#8b3f2f]") ||
    (category == "pet" && "bg-[#8ad6c9] text-[#006251]") ||
    (category == "food" && "bg-[#C3B091] text-[#5d4a2a]") ||
    "bg-primary/70 text-gray-200";

  return (
    <div
      className={`flex flex-col rounded-xl ${
        theme == "light" ? "glass-blur" : "glass-blur-dark"
      } overflow-hidden shadow-sm hover:scale-103 transition-transform duration-300`}
    >
      <img
        alt="A fluffy white cat napping in a plush pet bed"
        className="w-full h-52 object-cover"
        src="./Plush_Pet_Bed.png"
      />
      <div className="p-4 flex flex-col grow gap-2">
        <div className="flex justify-between items-start">
          <h3 className=" dark:text-white text-secondary text-lg font-bold">
            Plush Pet Bed
          </h3>
          <span
            className={`dark:bg-gray-600 dark:text-gray-100 ${badges} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
          >
            Accessories
          </span>
        </div>
        <p className="dark:text-white text-secondary text-lg font-bold">
          $45.00
        </p>
        <div className="flex items-center dark:text-gray-100 text-gray-600 text-sm">
          <CiLocationOn className="text-base mr-1" />
          <span>Chewy</span>
        </div>
        <button className="btn-primary py-2 px-4 rounded-full font-bold cursor-pointer shadow-glow hover:scale-101 transition-transform duration-300 dark:text-white text-base-100">
          See Details
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
