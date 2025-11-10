import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ListingCard from "../components/Listings/ListingCard";
import useAxios from "../hooks/useAxios";

const PetsAndSupplies = () => {
  const axiosInstance = useAxios();
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axiosInstance.get("/listings").then((data) => setListings(data.data));
  }, [axiosInstance]);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-10">
          Brows Pets & Supplies
        </h2>
        <p>
          Find your new best friend or the best supplies for them on PawMart,
          the premier portal for pet adoption and products.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="flex-1 flex items-center gap-1.5">
          <label className="input px-4 h-12  rounded-full border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <button className="btn-primary py-3 px-5 rounded-full cursor-pointer text-white">
            Search
          </button>
        </div>
        <div className="relative w-full md:w-56">
          <select
            defaultValue="Select a category"
            className="select select-primary w-full px-4 h-12  rounded-full border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none"
          >
            <option disabled={true}>Select a category</option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {listings.map((list, index) => (
          <ListingCard key={index} list={list} />
        ))}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
