import React, { use, useEffect, useState } from "react";
import ListingCard from "../components/Listings/ListingCard";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import { CetegoryContext } from "../Contexts/Contexts";
import { useNavigate, useParams } from "react-router";

const PetsAndSupplies = () => {
  const axiosInstance = useAxios();
  const { category, setCategory } = use(CetegoryContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("call");

    setCategory("All");
    setLoading(true);
    let url = "/listings";
    if (categoryName && categoryName !== "All") {
      url = `/listings?category=${categoryName}`;
    }
    axiosInstance
      .get(url)
      .then((data) => {
        setListings(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosInstance, categoryName, setCategory]);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === "All") {
      navigate("/category-filtered-product");
    } else {
      navigate(`/category-filtered-product/${selected}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    let url = "/listings";
    if (search) {
      url = `/search-listings?search=${search}`;
    }
    axiosInstance
      .get(url)
      .then((data) => {
        setListings(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <form
          onSubmit={handleSearch}
          className="flex-1 flex items-center gap-1.5"
        >
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
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button className="btn-primary py-3 px-5 rounded-full cursor-pointer text-white">
            Search
          </button>
        </form>

        <div className="relative w-full md:w-56">
          <select
            defaultValue={category}
            className="select select-primary w-full px-4 h-12  rounded-full border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none"
            onChange={handleCategoryChange}
          >
            <option>All</option>
            <option>Pets</option>
            <option>Pet Food</option>
            <option>Accessories</option>
            <option>Pet Care Products</option>
          </select>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {listings.map((list, index) => (
            <ListingCard key={index} list={list} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PetsAndSupplies;
