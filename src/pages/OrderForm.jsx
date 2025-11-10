import React, { use, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { useNavigate, useParams } from "react-router";
import { AuthContext, ThemeContext } from "../Contexts/Contexts";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const OrderForm = () => {
  const { theme } = use(ThemeContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [listing, setListing] = useState({});
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);

  useEffect(() => {
    axiosInstance
      .get(`/pets-and-supplies/${id}`)
      .then((data) => setListing(data.data))
      .catch((err) => console.log(err));
  }, [axiosInstance, id]);

  const onOrderFormSubmit = (e) => {
    e.preventDefault();
    const address = e.target.address.value.trim();
    const phone = e.target.phone.value.trim();
    const date = e.target.date.value;
    const note = e.target.note.value.trim();
    const quantity = e.target.name.value;
    const orderFormObj = {
      productId: id,
      productName: listing.name,
      category: listing.category,
      buyerName: user.displayName,
      email: user.email,
      location: listing.location,
      quantity,
      price: listing.price,
      image: listing.image,
      address,
      phone,
      date,
      note,
    };
    axiosInstance
      .post("/order-pet-or-supplies", orderFormObj)
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire({
            title: "Submitted!",
            text: "Your Order is Successfully submitted",
            icon: "success",
          });
          e.target.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };

  return (
    <section className="flex justify-center">
      <div
        className={`w-full max-w-4xl rounded-xl ${
          theme == "light" ? "glass-blur" : "glass-blur-dark"
        }`}
      >
        <form onSubmit={onOrderFormSubmit} className="relative p-6 sm:p-8">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
            type="button"
          >
            <CgClose
              onClick={() => navigate(-1)}
              className="text-xl cursor-pointer"
            />
          </button>
          <div className="mb-6">
            <p className="dark:text-white text-secondary text-2xl sm:text-[32px] font-bold">
              Confirm Your Order
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
            <div className="flex flex-col">
              <div className="mb-6">
                <img
                  alt="Golden Retriever Puppy"
                  className="w-full h-auto object-cover rounded-lg aspect-4/3"
                  src={listing.image}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Product Name
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="name of the pet or supplies"
                    type="text"
                    readOnly
                    defaultValue={listing.name}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Product ID
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={listing._id}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Price
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={listing.price}
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Quantity
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    readOnly={listing.category === "Pets"}
                    type="number"
                    defaultValue={1}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 md:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Buyer Name
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="text"
                    readOnly
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Email
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    type="email"
                    readOnly
                    defaultValue={user?.email}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Shipping Address
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="Enter your full address"
                    name="address"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Phone Number
                  </label>
                  <input
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50 bg-base-100/50 focus:outline-none"
                    placeholder="(+880) 1456-7890"
                    type="tel"
                    name="phone"
                    required
                  />
                </div>
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
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-secondary">
                    Additional Notes
                  </label>
                  <textarea
                    className="w-full h-12 p-4 rounded-lg border-2 border-primary/50  bg-base-100/50 focus:outline-none min-h-[100px]"
                    placeholder="Any special instructions or questions?"
                    rows="3"
                    name="note"
                  ></textarea>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <button className="w-full btn-primary shadow-glow hover:scale-101 transition-transform duration-300 text-white py-3 px-4 rounded-lg font-bold cursor-pointer ">
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
