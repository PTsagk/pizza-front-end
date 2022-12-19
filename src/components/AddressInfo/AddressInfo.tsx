import React, { useEffect, useState } from "react";
import "./AddressInfo.css";

import axios from "axios";
import AddressComponent from "./AddressComponent";
import { useAddressContext } from "../../Context/addressContext";

function AddressInfo() {
  const [addPanel, setAddPanel] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingAddressId, setUpdatingAddressId] = useState(0);
  const [townInput, setTownInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [addressNumberInput, setAddressNumberInput] = useState(0);
  const [phoneNumberInput, setPhoneNumberInput] = useState(0);

  //get address info from context
  const { addresses, setAddresses } = useAddressContext();

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
        city: townInput,
        address: addressInput,
        addressNumber: addressNumberInput,
        phoneNumber: phoneNumberInput,
      })
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e));
    setAddPanel(false);
  }

  function updateAddress() {
    if (updatingAddressId !== 0) {
      console.log("update request");
      axios.patch(`${import.meta.env.VITE_API}/address`, {
        address: addressInput,
        addressNumber: addressNumberInput,
        city: townInput,
        phoneNumber: phoneNumberInput,
        addressId: updatingAddressId,
      });
    }
    setAddPanel(false);
  }
  return (
    <>
      <div className="add-address-button-container">
        <button
          className="add-address-button"
          onClick={() => {
            setAddPanel(!addPanel);
            setIsUpdating(false);
            setTownInput("");
            setAddressInput("");
            setAddressNumberInput(null);
            setPhoneNumberInput(null);
          }}
        >
          Add+
        </button>
      </div>
      <div className="address-info">
        {/*if the pannel to add address is closed display address*/}
        {!addPanel &&
          addresses?.map((add) => {
            return (
              <AddressComponent
                id={add.id}
                town={add.city}
                address={add.address}
                addressNumber={add.addressNumber}
                phoneNumber={add.phoneNumber}
                setAddPanel={setAddPanel}
                setTownInput={setTownInput}
                setAddressInput={setAddressInput}
                setAddressNumberInput={setAddressNumberInput}
                setPhoneNumberInput={setPhoneNumberInput}
                setIsUpdating={setIsUpdating}
                setUpdatingAddressId={setUpdatingAddressId}
              ></AddressComponent>
            );
          })}

        {/* else if the pannel is open show inputs*/}
        {addPanel && (
          <div className="add-address">
            <div className="add-address-info">
              <div>
                <label htmlFor="town">Town</label>
                <input
                  onChange={(e) => setTownInput(e.target.value)}
                  type="text"
                  id="town"
                  value={townInput}
                />
              </div>
              <div>
                <label htmlFor="Address">Address</label>
                <input
                  onChange={(e) => setAddressInput(e.target.value)}
                  type="text"
                  id="Address"
                  value={addressInput}
                />
              </div>
              <div>
                <label htmlFor="StreetNumber">Street Number</label>
                <input
                  onChange={(e) => {
                    const number = e.target.value;
                    setAddressNumberInput(Number(number));
                  }}
                  type="number"
                  id="StreetNumber"
                  value={addressNumberInput}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  onChange={(e) => {
                    const number = e.target.value;
                    setPhoneNumberInput(Number(number));
                  }}
                  type="number"
                  id="phoneNumber"
                  value={phoneNumberInput}
                />
              </div>
              <div className="address-buttons">
                {!isUpdating && (
                  <button onClick={() => addAddress()}>Add</button>
                )}
                {isUpdating && (
                  <button onClick={() => updateAddress()}>Save</button>
                )}
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
    </>
  );
}

export default AddressInfo;
