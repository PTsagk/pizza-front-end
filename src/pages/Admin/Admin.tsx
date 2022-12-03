import * as React from "react";
import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminOrders from "../AdminOrders/AdminOrders";
import AdminProducts from "../AdminProducts/AdminProducts";
import MissingPage from "../MissingPage/MissingPage";
function Admin() {
  return (
    <div
      className="w-[100%] min-h-[100vh] flex flex-col justify-center
     items-center relative pizza-bg"
    >
      <Routes>
        {/* <Route path="/" element={<AdminProducts />}></Route> */}
        <Route path="/orders" element={<AdminOrders />}></Route>
        <Route path="/products" element={<AdminProducts />}></Route>
        <Route path="/*" element={<MissingPage />}></Route>
      </Routes>
    </div>
  );
}

export default Admin;
