import * as React from "react";
import { Component } from "react";
import MyVeggiesBG from "../../assets/MyVeggies.png";
function Pizzas() {
  return (
    <div className="w-[100%] h-[100%] relative">
      <img
        src={MyVeggiesBG}
        alt=""
        className="absolute top-0 left-0 object-cover"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default Pizzas;
