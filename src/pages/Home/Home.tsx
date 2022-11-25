import * as React from "react";
import { Component } from "react";
import BG from "../../assets/veggiesBG.jpg";
function Home() {
  return (
    <div className="w-[100vw] h-[100vh]" style={{}}>
      <img
        src={BG}
        alt=""
        className="absolute top-0 left-0
      w-[100%] h-[100%]"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default Home;
