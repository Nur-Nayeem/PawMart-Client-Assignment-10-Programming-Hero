import React, { use } from "react";
import { ThemeContext } from "../Contexts/Contexts";

const AddListing = () => {
  const { theme } = use(ThemeContext);
  return (
    <main className="flex-1 flex items-center justify-center">
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
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Product/Pet Name
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                placeholder="e.g., Golden Retriever Puppy"
                type="text"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                Category
              </label>
              <select
                defaultValue="Pick a text editor"
                className="select select-primary w-full px-4 h-12  rounded-lg border-2 border-primary/50 bg-base-100/50  outline-none focus:outline-none"
              >
                <option disabled={true}>Select a category</option>
                <option>Pets</option>
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
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
                  $
                </span>
                <input
                  className="w-full h-12 p-4 pl-8 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                  placeholder="0.00"
                  type="number"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2 dark:text-white text-secondary"
                for="location"
              >
                Location
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                placeholder="e.g., Dhaka, BD"
                type="text"
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
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-semibold mb-2 dark:text-white text-secondary"
                for="date"
              >
                Date (Pick Up)
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                type="date"
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2 dark:text-white text-secondary"
                for="email"
              >
                Email
              </label>
              <input
                className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none"
                readonly=""
                type="email"
                value="user@pawmart.com"
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
            ></textarea>
          </div>
          <div className="pt-4">
            <button
              className="w-full btn-primary overflow-hidden rounded-full h-12 px-6 text-white font-bold leading-normal shadow-glow hover:scale-105 transition-transform duration-300 cursor-pointer"
              type="submit"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddListing;
