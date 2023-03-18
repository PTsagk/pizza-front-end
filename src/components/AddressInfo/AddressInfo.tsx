import { useState } from "react";
import "./AddressInfo.css";

import axios from "axios";
import AddressComponent from "./AddressComponent";
import { useAddressContext } from "../../Context/addressContext";
import { useUserContext } from "../../Context/userContext";
import { useUxContext } from "../../Context/uxContext";

function AddressInfo() {
  const [addPanel, setAddPanel] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingAddressId, setUpdatingAddressId] = useState(0);
  const [townInput, setTownInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [addressNumberInput, setAddressNumberInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");

  //formating the addres inputs to use in the google map
  const noneEncodedAddress =
    addressNumberInput + " " + addressInput + " " + townInput;
  const encodedAddress = encodeURIComponent(noneEncodedAddress.trim());
  const mapAddress = `https://maps.google.com/maps?q=${encodedAddress}k&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  //get address info from context
  const { addresses, setAddresses } = useAddressContext();
  const { user } = useUserContext();
  const { setErrorMessage } = useUxContext();

  function addAddress() {
    if (!user) return;
    if (!townInput) {
      setErrorMessage((prev) => {
        const tmp = { ...prev };
        tmp.isError = true;
        tmp.show = true;
        tmp.message = "All fields are required";
        return tmp;
      });
      return;
    }
    axios.defaults.withCredentials = true;
    axios
      .post(`${import.meta.env.VITE_API}/address`, {
        city: townInput,
        address: addressInput,
        addressNumber: addressNumberInput.toString(),
        phoneNumber: phoneNumberInput.toString(),
        id: user.id,
      })
      .then((resp) => {
        setAddresses(resp.data);
      })
      .catch((e) =>
        setErrorMessage((prev) => {
          const tmp = { ...prev };
          tmp.isError = true;
          tmp.show = true;
          tmp.message = e.message;
          return tmp;
        })
      );
    setAddPanel(false);
  }

  function updateAddress() {
    if (updatingAddressId !== 0) {
      console.log("update request");
      axios
        .patch(`${import.meta.env.VITE_API}/address`, {
          address: addressInput,
          addressNumber: addressNumberInput.toString(),
          city: townInput,
          phoneNumber: phoneNumberInput.toString(),
          addressId: updatingAddressId,
        })
        .then((resp) => {
          setAddresses(resp.data);
          setAddPanel(false);
        })
        .catch((e) =>
          setErrorMessage((prev) => {
            const tmp = { ...prev };
            tmp.isError = true;
            tmp.show = true;
            tmp.message = "Fields are required";
            return tmp;
          })
        );
    }
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
            setAddressNumberInput("");
            setPhoneNumberInput("");
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
                key={add.id}
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
        {!addPanel && addresses.length == 0 && (
          <div className="no-addresses-message">No addresses found!</div>
        )}
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
                    setAddressNumberInput(number.toString());
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
                    setPhoneNumberInput(number.toString());
                  }}
                  type="number"
                  id="phoneNumber"
                  value={phoneNumberInput}
                />
              </div>
              <div className="address-buttons-container">
                {!isUpdating && (
                  <button onClick={() => addAddress()}>Add</button>
                )}
                {isUpdating && (
                  <button onClick={() => updateAddress()}>Save</button>
                )}
                <button onClick={() => setAddPanel(false)}>Cancel</button>
              </div>
            </div>

            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src={mapAddress}
                ></iframe>
                <style>
                  .mapouter
                  {
                    "position:relative;text-align:right;height:500px;width:600px;"
                  }
                </style>
                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddressInfo;
