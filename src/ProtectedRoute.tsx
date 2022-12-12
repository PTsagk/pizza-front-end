import * as React from "react";
import { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./Context/userContext";
function ProtectedRoute() {
  const { user, isAdmin, isFetching, isFetchingAdmin } = useUserContext();
  if (!user && !isFetching) return <Navigate to={"/"} />;
  if (isFetching || isFetchingAdmin) return <div>Loading...</div>;
  return user && isAdmin ? <Outlet /> : <Navigate to={`/`} />;
}

export default ProtectedRoute;
