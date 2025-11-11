import React, { use } from "react";
import { Navigate } from "react-router";
import Loading from "../components/Loading";
import { AuthContext } from "../Contexts/Contexts";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = use(AuthContext);
  if (authLoading) {
    return <Loading />;
  } else if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
