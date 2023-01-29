import React from "react";
import { ImArrowUp2 } from "react-icons/all";

interface IAddress {
  address: string;
  addressNumber: string;
  city: string;
  id: string;
  phoneNumber: string;
  user_id: string;
}

function CartOrderCompleteInfo({
  activeSelection,
  setActiveSelection,
  paymentMethod,
  selectedAddress,
  comments,
  setComments,
}) {
  function handleCommentsChange(str: string) {
    if (str.length <= 80) {
      setComments(str);
    }
  }
  const noneEncodedAddress =
    selectedAddress?.addressNumber +
    " " +
    selectedAddress?.address +
    " " +
    selectedAddress?.city;
  const encodedAddress = encodeURIComponent(noneEncodedAddress.trim());
  const mapAddress = `https://maps.google.com/maps?q=${encodedAddress}k&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div
      className={
        activeSelection === "completeInfo"
          ? "order-complete-info-active"
          : "order-complete-info"
      }
    >
      <h1>
        <div className="number">3</div>Complete Order
      </h1>
      <div className="complete-info">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe id="gmap_canvas" src={mapAddress}></iframe>
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
        <div className="payment-and-bill-info">
          <div className="payment-method">{paymentMethod}</div>
          <div className="bill-info">
            <div className="labels">
              Subtotal<br></br>Tip<br></br>Total
            </div>
            <div className="costs">
              29$<br></br>1$<br></br>30$
            </div>
          </div>
        </div>
        <div className="order-moving-buttons">
          <textarea
            placeholder="Add comments"
            className="comments"
            cols="30"
            rows="5"
            value={comments}
            onChange={(e) => handleCommentsChange(e.target.value)}
          ></textarea>
          <button
            type="button"
            className="next-step-button"
            onClick={() => {
              setActiveSelection("paymentInfo");
            }}
          >
            <ImArrowUp2 className="icon"></ImArrowUp2> Previous Step
          </button>
          <button className="complete-order-button" type="submit">
            Send the pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartOrderCompleteInfo;
