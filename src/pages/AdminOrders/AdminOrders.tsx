import * as React from "react";
import { Component } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
function AdminOrders() {
  return (
    <ul className="w-[1200px] h-[1000px] m-10 flex flex-col bg-black overflow-y-auto">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </ul>
  );
}

export default AdminOrders;
