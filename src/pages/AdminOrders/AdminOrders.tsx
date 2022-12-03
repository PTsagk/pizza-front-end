import * as React from "react";
import { Component } from "react";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./AdminOrders.css";
function AdminOrders() {
  return (
    <ul className="orders-list w-[1200px] h-[1000px] m-10 flex flex-col overflow-y-auto">
      <OrderCard status={"completed"} />
      <OrderCard status={"completed"} />
      <OrderCard status={"active"} />
      <OrderCard status={"completed"} />
      <OrderCard status={"pending"} />
    </ul>
  );
}

export default AdminOrders;
