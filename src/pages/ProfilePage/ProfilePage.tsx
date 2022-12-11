import React, { useState } from "react";
import AddressInfo from "../../components/AddressInfo/AddressInfo";
import "./ProfilePage.css";

function ProfilePage() {
  const [move, setMove] = useState(0);
  return (
    <div className="profile-page">
      <nav className="profile-nav-bar">
        <button
          onClick={() => setMove(0)}
          style={{ color: move === 0 ? "white" : "#ec1a37" }}
        >
          Address
        </button>
        <button
          onClick={() => setMove(25)}
          style={{ color: move === 25 ? "white" : "#ec1a37" }}
        >
          Orders
        </button>
        <button
          onClick={() => setMove(50)}
          style={{ color: move === 50 ? "white" : "#ec1a37" }}
        >
          Settings
        </button>
        <button
          onClick={() => setMove(75)}
          style={{ color: move === 75 ? "white" : "#ec1a37" }}
        >
          Tracker
        </button>
        <div className="animation" style={{ left: move + "%" }}></div>
      </nav>
      <div className="profile-body">
        <AddressInfo></AddressInfo>
      </div>
    </div>
  );
}

export default ProfilePage;
