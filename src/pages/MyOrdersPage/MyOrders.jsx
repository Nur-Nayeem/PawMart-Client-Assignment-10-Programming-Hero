import React, { use, useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { AuthContext, ThemeContext } from "../../Contexts/Contexts";
import MyOrdersTableRow from "../../components/TablesRow/MyOredersTableRow";
import Loading from "../../components/Loading";
const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const { theme } = use(ThemeContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/order?email=${user?.email}`)
      .then((data) => {
        setMyOrders(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [axiosInstance, user?.email]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("My Orders Report", doc.internal.pageSize.getWidth() / 2, 20, {
      align: "center",
    });

    const head = [
      [
        "ListingId",
        "Product/Listing Name",
        "Buyer Name",
        "Price",
        "Quantity",
        "Address",
        "Date",
        "Phone",
      ],
    ];

    const body = myOrders.map((row) => [
      row.listingId || row._id || "",
      row.productName || row.title || "",
      row.buyerName || user?.name || "",
      row.price || 0,
      row.quantity || 1,
      row.address || "",
      row.date || "",
      row.phone || "",
    ]);
    autoTable(doc, {
      startY: 30,
      head,
      body,
      theme: "striped",
      headStyles: { fillColor: [99, 110, 114] },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      styles: { fontSize: 10, cellPadding: 3 },
    });
    doc.save("MyOrdersReport.pdf");
    Swal.fire({
      title: "Report Downloaded!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <section className="mt-12 grow px-2.5 sm:px-0">
      <title>My Orders</title>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">
            My Orders
          </h1>
          {myOrders.length > 0 && (
            <button
              onClick={handleDownloadPDF}
              className="btn-primary shadow-glow hover:scale-105 transition-transform duration-300 text-white py-2 px-4 rounded-full font-bold cursor-pointer "
            >
              Download Report
            </button>
          )}
        </div>

        {myOrders.length < 1 ? (
          loading ? (
            <Loading />
          ) : (
            <div
              className={`${
                theme == "light" ? "glass-blur" : "glass-blur-dark"
              } py-6 text-center rounded-xl`}
            >
              <h2 className="text-2xl font-medium">
                You Don't have any orders!
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
                    Product/Listing Name
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Buyer Name
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Price
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Quantity
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Address
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80">
                    Date
                  </th>
                  <th className="p-4 text-sm font-semibold dark:text-white/80 rounded-tr-lg">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((row, index) => (
                  <MyOrdersTableRow key={index} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
