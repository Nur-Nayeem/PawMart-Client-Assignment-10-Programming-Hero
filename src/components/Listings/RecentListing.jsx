import React, { use, useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import useAxios from "../../hooks/useAxios";
import { MyContext } from "../../Contexts/Contexts";
import Loading from "../Loading";

const RecentListing = () => {
  const [recentListing, setRecentListing] = useState([]);
  const axiosInstanse = useAxios();
  const { recentRefetch } = use(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstanse.get("/listings?recent=true&limit=6").then((data) => {
      setRecentListing(data.data.result);
      setLoading(false);
    });
  }, [axiosInstanse, recentRefetch]);

  return (
    <div className="px-2.5 sm:px-0 my-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Recent Listings
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {recentListing.map((list, index) => (
            <ListingCard key={index} list={list} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentListing;
