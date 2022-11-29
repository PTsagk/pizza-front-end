import * as React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AdminOrders from "../AdminOrders/AdminOrders";
import AdminProducts from "../AdminProducts/AdminProducts";
function Admin() {
  return (
    <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center relative pizza-bg">
      <div className="mt-[10%] bg-white rounded-[5px] overflow-hidden">
        <button className="button bg-primary text-white px-4 text-[32px]">
          Products
        </button>
        <button className="button bg-black text-white px-4 text-[32px]">
          Orders
        </button>
      </div>
      <Routes>
        <Route path="/" element={<AdminProducts />}></Route>
        <Route path="/orders" element={<AdminOrders />}></Route>
      </Routes>
    </div>
  );
}

export default Admin;
