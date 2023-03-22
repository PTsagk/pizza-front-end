import React from "react";
import "./OrdersInfo.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Order from "./Order";

interface IOrderData {
  address_id: number;
  comments: string;
  count: number;
  created: string;
  doorbell: string;
  floor: number;
  order_id: number;
  payment: string;
  phone: string;
  product_id: number;
  product_type: string;
  total_price: number;
}

function OrdersInfo() {
  const [orderData, setOrderData] = useState<IOrderData[]>([]);
  let uniquIds: number[] = [];
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get(`${import.meta.env.VITE_API}/order`, {})
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(orderData);
  orderData.forEach((order) => {
    if (!uniquIds.includes(order.order_id)) {
      uniquIds.push(order.order_id);
    }
  });

  return (
    <div className="orders">
      <h1 className="page-title">Orders</h1>
      {uniquIds?.map((orderId) => {
        const orderItems = orderData.filter(
          (data) => data.order_id === orderId
        );
        return <Order data={orderItems}></Order>;
      })}
    </div>
  );
}

export default OrdersInfo;
