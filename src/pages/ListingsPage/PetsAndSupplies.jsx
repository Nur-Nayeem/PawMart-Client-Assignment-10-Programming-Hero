import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion, useScroll } from "motion/react";
import useAxios from "../../hooks/useAxios";
import { MyContext, ThemeContext } from "../../Contexts/Contexts";
import Loading from "../../components/Loading";
import ListingCard from "../../components/Listings/ListingCard";

const PetsAndSupplies = () => {
  const axiosInstance = useAxios();
  const { theme } = use(ThemeContext);
  const { category, setCategory } = use(MyContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
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
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 70,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#632ee3",
          zIndex: 100,
        }}
      />

      <div className="container mx-auto mt-12 px-2.5 sm:px-0 ">
        <title>
          {"Pets and Supplies " +
            (categoryName == undefined ? "All" : categoryName)}
        </title>
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-center m-5">
            Brows Pets & Supplies
          </h2>
          <p className="dark:text-gray-200 text-gray-700 text-lg">
            Find your new best friend or the best supplies for them on PawMart,
            the premier portal for pet adoption and products.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6 mb-3">
          <form
            onSubmit={handleSearch}
            className="flex-1 flex items-center gap-1.5"
          >
            <label className="input px-4 h-12  rounded-full border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none w-full sm:w-max">
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
            <button className="btn-primary py-2.5 px-5 rounded-full cursor-pointer text-white">
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
              <option>Care Products</option>
            </select>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : listings.length < 1 ? (
          <div
            className={`${
              theme == "light" ? "glass-blur" : "glass-blur-dark"
            } py-6 text-center rounded-xl my-5`}
          >
            <h2 className="text-2xl font-medium">No Listings Found!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {listings.map((list, index) => (
              <ListingCard key={index} list={list} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PetsAndSupplies;
