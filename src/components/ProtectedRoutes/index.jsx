import React, { useContext } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
  const { userData, globalLoading } = useContext(UserContext);
  const location = useLocation();

  if (globalLoading) {
    return null;
  }

  return userData ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default ProtectedRoutes;
