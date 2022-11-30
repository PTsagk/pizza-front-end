import * as React from "react";
import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminOrders from "../AdminOrders/AdminOrders";
import AdminProducts from "../AdminProducts/AdminProducts";
function Admin() {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center relative pizza-bg">
      <div className="mt-[10%] bg-white rounded-[5px] overflow-hidden">
        <Link
          to={"./products"}
          className="button bg-primary text-white px-4 text-[32px]"
        >
          Products
        </Link>
        <Link
          to={"./orders"}
          className="button bg-black text-white px-4 text-[32px]"
        >
          Orders
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<AdminProducts />}></Route>
        <Route path="/orders" element={<AdminOrders />}></Route>
      </Routes>
    </div>
  );
}

export default Admin;
