import * as React from "react";
import { Component } from "react";
import "./missingPage.css";
import MissingError from "../../assets/notFound.png";
import { Link } from "react-router-dom";
function MissingPage() {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-gradient-to-t
  from-primary to-linear_dark relative"
    >
      <img
        src={MissingError}
        alt="page not found"
        className="absolute top-[25%] left-0 w-[100%] object-cover md:top-0
        missing-bg"
      />
      <div className="w-[100%] flex justify-center items-center">
        <Link to={"/"} className="button back-btn font-outfit">
          I still want pizza
        </Link>
      </div>
    </div>
  );
}

export default MissingPage;
