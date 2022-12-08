import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./ProfileCard.css";
function Profile({ close }) {
  return (
    <div className="profile-card">
      <button onClick={close} className="bg-primary text-white p-2">
        Close
      </button>
      <div className="circle">
        <span>P</span>
      </div>
      <div className="username">Ptsag</div>
      <button className="logout">Logout</button>
      <div className="profile-options">
        <button className="show-address">Address</button>
        <button className="show-orders">Orders</button>
      </div>
      <div className="address-container">
        <button className="add-address">Add+</button>
        <div className="address">
          <HiOutlineLocationMarker className="location-icon"></HiOutlineLocationMarker>
          <p>Karaoli kai Dimitriou</p>
          <button className="delete-address">Delete</button>
        </div>
        <div className="address">
          <HiOutlineLocationMarker className="location-icon"></HiOutlineLocationMarker>
          <p>Karaoli kai Dimitriou</p>
          <button className="delete-address">Delete</button>
        </div>
        <div className="address">
          <HiOutlineLocationMarker className="location-icon"></HiOutlineLocationMarker>
          <p>Karaoli kai Dimitriou</p>
          <button className="delete-address">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
