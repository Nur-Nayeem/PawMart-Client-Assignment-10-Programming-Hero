import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext, MyContext, ThemeContext } from "../../Contexts/Contexts";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddListing = () => {
  const { user } = use(AuthContext);
  const { theme } = use(ThemeContext);
  const axiosISecurenstance = useAxiosSecure();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const { recentRefetch, setRecentRefetch } = use(MyContext);
  const [loading, setLoading] = useState(false);
  const handleAddListing = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const price = parseInt(e.target.price.value) || 0;
    const location = e.target.location.value.trim();
    const image = e.target.photourl.value.trim();
    const date = e.target.date.value.trim();
    const email = user?.email;
    const description = e.target.description.value.trim();

    const listingObject = {
      name,
      category,
      price,
      location,
      image,
      date,
      email,
      description,
    };
    setLoading(true);
    axiosISecurenstance
      .post("/add-listing", listingObject)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Successfully added listing",
            icon: "success",
          });
          setRecentRefetch(!recentRefetch);
          navigate("/my-listings");
          setLoading(false);
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
        setLoading(false);
      });
  };

  return (
    <main className="flex-1 flex items-center justify-center mt-12 px-2.5 sm:px-0 ">
      <title>Add new Listing</title>
      <div
        className={`w-full max-w-4xl ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        } rounded-xl p-8 sm:p-12 shadow-2xl`}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-center dark:text-white text-secondary mb-2">
          Add New Listing
        </h1>
        <p className="text-center dark:text-gray-200 text-gray-700 mb-6 sm:mb-8">
          Fill out the form below to post your pet or product.
        </p>
        <form className="space-y-6" onSubmit={handleAddListing}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Product/Pet Name
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                placeholder="e.g., Golden Retriever Puppy"
                type="text"
                name="name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Category
              </label>
              <select
                defaultValue="Select a category"
                className="select select-primary w-full px-4 h-12  rounded-lg border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled={true}>Select a category</option>
                <option value={"Pets"}>Pets</option>
                <option value={"Pet Food"}>Pet Food</option>
                <option value={"Accessories"}>Accessories</option>
                <option value={"Care Products"}>Care Products</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Price
              </label>
              <div className="relative mt-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  ৳
                </span>
                <input
                  className="w-full h-12 p-4 pl-8 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                  placeholder="0.00"
                  type="number"
                  name="price"
                  disabled={category === "Pets"}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Location
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                placeholder="e.g., Dhaka, BD"
                type="text"
                name="location"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Image (URL)
            </label>
            <input
              className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
              placeholder="https://example.com/image.jpg"
              type="url"
              name="photourl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Date (Pick Up)
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                type="date"
                name="date"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Email
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                readOnly
                type="email"
                value={user?.email}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
              Description
            </label>
            <textarea
              className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none min-h-[120px]"
              placeholder="Provide a detailed description..."
              name="description"
            ></textarea>
          </div>
          <div className="pt-4">
            <button
              className="w-full btn-primary overflow-hidden rounded-full h-12 px-6 text-white font-bold leading-normal shadow-glow hover:scale-105 transition-transform duration-300 cursor-pointer"
              type="submit"
            >
              {loading ? (
                <span className="loading loading-spinner loading-xl text-base-100"></span>
              ) : (
                <span>Create</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddListing;
