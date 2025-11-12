import React from "react";
import { ClipLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="text-center text-3xl font-bold text-secondary h-96 flex justify-center items-center">
      <ClipLoader
        color="#9f62f2"
        size={96}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderWidth: "6px",
          borderStyle: "solid",
          borderBottomColor: "transparent",
        }}
      />
    </div>
  );
};

export default Loading;
