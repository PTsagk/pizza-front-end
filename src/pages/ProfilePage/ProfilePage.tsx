import React, { useState } from "react";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import SettingsInfo from "../../components/SettingsInfo/SettingsInfo";
import "./ProfilePage.css";

function ProfilePage() {
  const [move, setMove] = useState(0);
  const [acitivePage, setActivePage] = useState("address");
  return (
    <div className="profile-page">
      <nav className="profile-nav-bar">
        <button
          onClick={() => {
            setMove(0);
            setActivePage("address");
          }}
          style={{ color: move === 0 ? "white" : "#ec1a37" }}
        >
          Address
        </button>
        <button
          onClick={() => {
            setMove(33);
            setActivePage("orders");
          }}
          style={{ color: move === 33 ? "white" : "#ec1a37" }}
        >
          Orders
        </button>
        <button
          onClick={() => {
            setMove(67);
            setActivePage("settings");
          }}
          style={{ color: move === 67 ? "white" : "#ec1a37" }}
        >
          Settings
        </button>
        <div className="animation" style={{ left: move + "%" }}></div>
      </nav>
      <div className="profile-body">
        {acitivePage === "address" && <AddressInfo></AddressInfo>}
        {acitivePage === "orders" && <OrdersInfo></OrdersInfo>}
        {acitivePage === "settings" && <SettingsInfo></SettingsInfo>}
      </div>
    </div>
  );
}

export default ProfilePage;
