import * as React from "react";
import { Component } from "react";
import BG from "../../assets/veggiesBG.jpg";
function Home() {
  return (
    <div className="w-[100%] h-[100%]">
      <img
        src={BG}
        alt=""
        className="absolute top-0 left-0"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
}

export default Home;
