import React from "react";
import "./AddressInfo.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function AddressInfo() {
  return (
    <div className="address-info">
      <button className="add-address-button">Add+</button>
      <div className="address">
        <div className="location-info">
          <HiLocationMarker className="location-icon"></HiLocationMarker>
          <h3>Agios Dimitrios</h3>
          <span>6</span>
        </div>
        <div className="contact-info">
          <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
          6923424642
        </div>
        <div className="user-info">
          <FaUserCircle className="user-icon"></FaUserCircle>
          <h3>Panagiotis Tsagkouris</h3>
        </div>
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AddressInfo;
