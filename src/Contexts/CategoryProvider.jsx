import React, { useState } from "react";
import { CetegoryContext } from "./Contexts";

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const categoryInfo = {
    category,
    setCategory,
  };
  return <CetegoryContext value={categoryInfo}>{children}</CetegoryContext>;
};

export default CategoryProvider;
