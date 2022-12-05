import * as React from "react";
import { Component } from "react";
import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";
function RegisterForm() {
  return (
    <div
      className="w-[100%] flex justify-center auth-form-c
    "
    >
      <form className="bg-white w-[750px] p-5">
        <h2 className="text-center my-5 text-[32px] font-semibold">Register</h2>
        <AuthInput
          labelDisplay="Full Name"
          type="text"
          onChangeInput={(str) => console.log(str)}
        />
        <AuthInput
          labelDisplay="Email"
          type="email"
          onChangeInput={(str) => console.log(str)}
        />
        <AuthInput
          labelDisplay="Password"
          type="password"
          onChangeInput={(str) => console.log(str)}
        />
        <div className="flex">
          <AuthInput
            labelDisplay="Address"
            type="text"
            onChangeInput={(str) => console.log(str)}
          />
          <AuthInput
            labelDisplay="Number"
            type="text"
            onChangeInput={(str) => console.log(str)}
          />
        </div>
        <AuthInput
          labelDisplay="City"
          type="text"
          onChangeInput={(str) => console.log(str)}
        />
        <AuthInput
          labelDisplay="Postal Code"
          type="text"
          onChangeInput={(str) => console.log(str)}
        />
      </form>
    </div>
  );
}

export default RegisterForm;
