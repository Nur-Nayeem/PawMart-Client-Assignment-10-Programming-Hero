import React from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
// import useAxios from "../hooks/useAxios";

const MyOrdersTableRow = ({ row }) => {
  //   const axiosInstance = useAxios();
  return (
    <>
      <tr className="bg-white/30 dark:bg-white/5 border-b backdrop-blur-md ">
        <td className="p-4 font-medium dark:text-white/90 rounded-bl-lg">
          {row._id}
        </td>
        <td className="p-4 font-medium">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={row.image || "/fallback.png"} alt={row.name} />
            </div>
          </div>
        </td>
        <td className="p-4 dark:text-white/70">{row.productName}</td>
        <td className="p-4 dark:text-white/70">{row.buyerName}</td>
        <td className="p-4 dark:text-white/70">৳ {row.price}</td>
        <td className="p-4 dark:text-white/70">{row.quantity}</td>
        <td className="p-4 dark:text-white/70">{row.address}</td>
        <td className="p-4 dark:text-white/70">{row.date}</td>
        <td className="p-4 dark:text-white/70 rounded-br-lg">{row.phone}</td>
      </tr>
    </>
  );
};

export default MyOrdersTableRow;
