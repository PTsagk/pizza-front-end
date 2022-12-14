import React, { useEffect, useState } from "react";
import "./AddressInfo.css";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

function AddressInfo() {
  const [addPanel, setAddPanel] = useState(false);
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState(0);
  const [postalCode, setPostalCode] = useState(0);
  const [addresses, setAddresses] = useState([]);

  async function refreshAddresses() {
    const { data } = await axios.get(`${import.meta.env.VITE_API}/address`);
    setAddresses(data);
  }

  useEffect(() => {
    refreshAddresses();
  }, [addPanel]);

  function addAddress() {
    axios.defaults.withCredentials = true;
    axios
      .post(`${import.meta.env.VITE_API}/address`, {
        town,
        address,
        addressNumber,
        postalCode,
      })
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e));
    setAddPanel(false);
  }
  return (
    <div className="address-info">
      <button
        className="add-address-button"
        onClick={() => setAddPanel(!addPanel)}
      >
        Add+
      </button>
      {!addPanel &&
        // <div className="address">
        //   <div className="location-info">
        //     <HiLocationMarker className="location-icon"></HiLocationMarker>
        //     <h3>Agios Dimitrios</h3>
        //     <span>6</span>
        //   </div>
        //   <div className="contact-info">
        //     <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
        //     6923424642
        //   </div>
        //   <div className="user-info">
        //     <FaUserCircle className="user-icon"></FaUserCircle>
        //     <h3>Panagiotis Tsagkouris</h3>
        //   </div>
        //   <div>
        //     <button>Update</button>
        //     <button>Delete</button>
        //   </div>
        // </div>
        addresses.map((address) => {
          return (
            <div className="address">
              <div className="location-info">
                <HiLocationMarker className="location-icon"></HiLocationMarker>
                <h3>{address.address}</h3>
                <span>{address.addressNumber}</span>
              </div>
              <div className="contact-info">
                <BsFillTelephoneFill className="phone-icon"></BsFillTelephoneFill>
                {address.phoneNumber}
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
          );
        })}

      {addPanel && (
        <div className="add-address">
          <div className="add-address-info">
            <div>
              <label htmlFor="town">Town</label>
              <input
                onChange={(e) => setTown(e.target.value)}
                type="text"
                id="town"
              />
            </div>
            <div>
              <label htmlFor="Address">Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="Address"
              />
            </div>
            <div>
              <label htmlFor="StreetNumber">Street Number</label>
              <input
                onChange={(e) => {
                  const number = e.target.value;
                  setAddressNumber(Number(number));
                }}
                type="number"
                id="StreetNumber"
              />
            </div>
            <div>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                onChange={(e) => {
                  const number = e.target.value;
                  setPostalCode(Number(number));
                }}
                type="number"
                id="postalCode"
              />
            </div>
            <div className="address-buttons">
              <button onClick={() => addAddress()}>Add</button>
              <button onClick={() => setAddPanel(false)}>Cancel</button>
            </div>
          </div>
          <img
            crossOrigin="anonymous"
            src="http://localhost:5000/image/devil.jpg"
            alt=""
            className="image"
          />
        </div>
      )}
    </div>
  );
}

export default AddressInfo;
