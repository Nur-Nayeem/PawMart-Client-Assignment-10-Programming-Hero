import React, { useEffect, useRef, useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { Link, useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";
import OrderFormModal from "../../components/OrderFormModal/OrderFormModal";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
  const axiosInstance = useAxios();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/listings/${id}`)
      .then((data) => setDetails(data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [axiosInstance, id]);

  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.showModal();
  };

  return (
    <main className="container mx-auto flex-1 flex flex-col justify-center py-20 px-2.5 sm:px-0 ">
      <title>{details.name}</title>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link
            to={-1}
            className="mb-4 flex items-center gap-2 text-primary cursor-pointer hover:underline"
          >
            <FaArrowLeft />
            Back
          </Link>
          <div
            className={`w-full max-w-5xl mx-auto rounded-xl shadow-2xl shadow-black/50 overflow-hidden`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative w-full aspect-square md:aspect-auto">
                <img
                  alt={details.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={details.image || "/fallback.png"}
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.png";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent md:bg-linear-to-r md:from-black/10"></div>
              </div>
              <div className="flex flex-col p-8 md:p-10 lg:p-12 space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-bold tracking-tight dark:text-white text-secondary">
                    {details.name}
                  </h1>

                  <div className="mt-2.5">
                    <span>Category:</span>
                    <span className="ml-2.5 bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {details.category}
                    </span>
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold gradient-text text-glow">
                  ৳ {details.price}
                </div>
                <div className="space-y-3 pt-2">
                  <h2 className="text-lg font-semibold dark:text-white text-secondary">
                    Description
                  </h2>
                  <p className="text-sm leading-relaxed ">
                    {details.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 dark:text-gray-400 text-gray-700">
                  <CiLocationOn className="text-lg" />
                  <span className="text-sm">{details.location}</span>
                </div>
                <div className="flex items-center gap-2 dark:text-gray-400 text-gray-700">
                  <CiMail className="text-lg" />
                  <span className="text-sm">{details.email}</span>
                </div>

                <div className="pt-6">
                  <button
                    onClick={openModal}
                    className="w-full btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-3 px-4 rounded-full font-bold cursor-pointer "
                  >
                    {details.category === "Pets" ? "Adopt Now" : "Order Now"}
                  </button>
                </div>
                <OrderFormModal modalRef={modalRef} id={id} details={details} />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default DetailsPage;
