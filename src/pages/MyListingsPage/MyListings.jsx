import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext, ThemeContext } from "../../Contexts/Contexts";
import Loading from "../../components/Loading";
import MylistingTableDataRow from "../../components/TablesRow/MylistingTableDataRow";

const MyListings = () => {
  const [myListings, setMyListings] = useState([]);
  const AxiosSecureInstance = useAxiosSecure();
  const { user } = use(AuthContext);
  const { theme } = use(ThemeContext);
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AxiosSecureInstance.get(`/my-listings?email=${user?.email}`)
      .then((data) => {
        setMyListings(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [AxiosSecureInstance, user?.email, refetch]);

  return (
    <section className="mt-12 grow px-2.5 sm:px-0">
      <title>My Listings</title>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">
            My Listings
          </h1>
          <Link
            to={"/add-listing"}
            className="btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
          >
            Add New
          </Link>
        </div>

        {myListings.length < 1 ? (
          loading ? (
            <Loading />
          ) : (
            <div
              className={`${
                theme == "light" ? "glass-blur" : "glass-blur-dark"
              } py-6 text-center rounded-xl`}
            >
              <h2 className="text-2xl font-medium">
                You Don't have any Listings!
              </h2>
            </div>
          )
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/40 border-white/60 dark:bg-white/10 backdrop-blur-md border-b dark:border-white/20">
                <tr>
                  <th className="p-4 text-sm font-semibold dark:text-white/80 rounded-tl-lg">
                    ListingId
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Image
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Name
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Category
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Price
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Location
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Owner's Email
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80 rounded-tr-lg text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {myListings.map((row, index) => (
                  <MylistingTableDataRow
                    key={index}
                    row={row}
                    setRefetch={setRefetch}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyListings;
