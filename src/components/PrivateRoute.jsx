import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated") === "true";

  console.log("PrivateRoute check →", isAuthenticated); // Debugging

  if (!isAuthenticated) {
    // If NOT authenticated → always redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
