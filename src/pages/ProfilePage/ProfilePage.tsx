import React, { useState } from "react";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import OrdersInfo from "../../components/OrdersInfo/OrdersInfo";
import SettingsInfo from "../../components/SettingsInfo/SettingsInfo";
import TrackerInfo from "../../components/TrackerInfo/TrackerInfo";
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
            setMove(25);
            setActivePage("orders");
          }}
          style={{ color: move === 25 ? "white" : "#ec1a37" }}
        >
          Orders
        </button>
        <button
          onClick={() => {
            setMove(50);
            setActivePage("settings");
          }}
          style={{ color: move === 50 ? "white" : "#ec1a37" }}
        >
          Settings
        </button>
        <button
          onClick={() => {
            setMove(75);
            setActivePage("tracker");
          }}
          style={{ color: move === 75 ? "white" : "#ec1a37" }}
        >
          Tracker
        </button>
        <div className="animation" style={{ left: move + "%" }}></div>
      </nav>
      <div className="profile-body">
        {acitivePage === "address" && <AddressInfo></AddressInfo>}
        {acitivePage === "orders" && <OrdersInfo></OrdersInfo>}
        {acitivePage === "settings" && <SettingsInfo></SettingsInfo>}
        {acitivePage === "tracker" && <TrackerInfo></TrackerInfo>}
      </div>
    </div>
  );
}

export default ProfilePage;
