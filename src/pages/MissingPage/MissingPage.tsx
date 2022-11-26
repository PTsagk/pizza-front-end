import * as React from "react";
import { Component } from "react";
function MissingPage() {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-gradient-to-t
  from-primary to-linear_dark relative"
    >
      <img
        src="https://i.imgur.com/Btf3JPT.png"
        alt="page not found"
        className="absolute top-[25%] left-0 w-[100%] object-cover md:top-0"
      />
    </div>
  );
}

export default MissingPage;
