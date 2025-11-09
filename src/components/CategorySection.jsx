import React, { use } from "react";
import { MdOutlineHealthAndSafety, MdOutlineToys } from "react-icons/md";
import { PiBowlFood, PiDog } from "react-icons/pi";
import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

const CategorySection = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className="my-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Explore Our Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4 px-2.5">
        <Link
          to={"/pets-and-supplies"}
          className={`flex flex-1 gap-3 rounded-xl  ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-5 flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="text-white bg-linear-to-r from-blue-400 to-cyan-400 rounded-full p-3">
            <PiDog className="text-5xl" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="dark:text-white text-[#362920] text-xl font-semibold leading-tight">
              Pets
            </h3>
            <p className="dark:text-gray-100 text-gray-700 text-sm font-normal leading-normal">
              Find dogs, cats, and more
            </p>
          </div>
        </Link>
        <Link
          to={"/pets-and-supplies"}
          className={`flex flex-1 gap-3 rounded-xl ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-5 flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="text-white bg-linear-to-r from-orange-400 to-red-400 rounded-full p-3">
            <PiBowlFood className="text-5xl" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="dark:text-white text-secondary text-xl font-semibold leading-tight">
              Pet Food
            </h3>
            <p className="dark:text-gray-100 text-gray-700 text-sm font-normal leading-normal">
              Nutritious meals and treats
            </p>
          </div>
        </Link>
        <Link
          to={"/pets-and-supplies"}
          className={`flex flex-1 gap-3 rounded-xl  ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-5 flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="text-white bg-linear-to-l from-purple-400 to-pink-400 rounded-full p-3">
            <MdOutlineToys className="text-5xl" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="dark:text-white text-secondary text-xl font-semibold leading-tight">
              Accessories
            </h3>
            <p className="dark:text-gray-100 text-gray-700 text-sm font-normal leading-normal">
              Toys, leashes, and beds
            </p>
          </div>
        </Link>
        <Link
          to={"/pets-and-supplies"}
          className={`flex flex-1 gap-3 rounded-xl  ${
            theme == "light" ? "glass-blur" : "glass-blur-dark"
          } p-5 flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
        >
          <div className="text-white bg-linear-to-r from-green-400 to-emerald-400 rounded-full p-3">
            <MdOutlineHealthAndSafety className="text-5xl" />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="dark:text-white text-secondary text-xl font-semibold leading-tight">
              Pet Care Products
            </h3>
            <p className="dark:text-white text-gray-700 text-sm font-normal leading-normal">
              Health and wellness products
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
