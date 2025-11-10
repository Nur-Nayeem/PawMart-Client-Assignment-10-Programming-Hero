import React, { use } from "react";
import { CiLocationOn } from "react-icons/ci";
import { ThemeContext } from "../../Contexts/Contexts";
import { Link } from "react-router";

const ListingCard = ({ list }) => {
  const { theme } = use(ThemeContext);
  const { _id, name, category, price, location, image } = list;
  const badges =
    (category == "Accessories" && "bg-[#ff9a85]/30 text-[#8b3f2f]") ||
    (category == "Pets" && "bg-[#8ad6c9] text-[#006251]") ||
    (category == "Pet Food" && "bg-[#C3B091] text-[#5d4a2a]") ||
    "bg-primary/70 text-gray-200";
  return (
    <div
      className={`flex flex-col rounded-xl ${
        theme == "light" ? "glass-blur" : "glass-blur-dark"
      } overflow-hidden shadow-sm hover:scale-103 transition-transform duration-300`}
    >
      <img src={image || "/fallback.png"} alt={name} className="w-full h-52" />
      <div className="p-4 flex flex-col grow gap-2">
        <div className="flex justify-between items-start">
          <h3 className=" dark:text-white text-secondary text-lg font-bold">
            {name}
          </h3>
          <span
            className={`dark:bg-gray-600 dark:text-gray-100 ${badges} text-xs font-semibold px-2.5 py-0.5 rounded-full`}
          >
            {category}
          </span>
        </div>
        <p className="dark:text-white text-secondary text-lg font-bold">
          ৳{price}
        </p>
        <div className="flex items-center dark:text-gray-100 text-gray-600 text-sm">
          <CiLocationOn className="text-base mr-1" />
          <span>{location}</span>
        </div>
        <Link
          to={`/pet-and-supplies/${_id}`}
          className="btn-primary py-2 px-4 text-center rounded-full font-bold cursor-pointer shadow-glow hover:scale-101 transition-transform duration-300 dark:text-white text-base-100"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
