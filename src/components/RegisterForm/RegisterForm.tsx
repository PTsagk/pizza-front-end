import * as React from "react";
import { Component } from "react";
import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
function RegisterForm({ closeForm, setLogin, setRegister }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  async function register(e) {
    e.preventDefault();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const created = today.toISOString(); // "2020-06-13T18:30:00.000Z"
    const response = await axios.post(
      "http://localhost:5000/users",
      {
        username: fullname,
        password: password,
        email: email,
        created: created,
      },
      { withCredentials: true }
    );
    console.log(response);
  }

  return (
    <div className="register-form">
      <form className="register-info relative">
        <h2 className="text-center my-5 text-[32px] font-semibold">Register</h2>
        <button
          type="button"
          className="absolute right-[2%] top-[3%] text-[32px] spin-button"
          onClick={closeForm}
        >
          <AiOutlineClose />
        </button>

        <AuthInput
          labelDisplay="Full Name"
          type="text"
          onChangeInput={(str) => setFullname(str)}
        />
        <AuthInput
          labelDisplay="Email"
          type="email"
          onChangeInput={(str) => setEmail(str)}
        />
        <AuthInput
          labelDisplay="Password"
          type="password"
          onChangeInput={(str) => setPassword(str)}
        />
        <button
          className="auth-form-button bg-primary"
          type="submit"
          onClick={(e) => register(e)}
        >
          Register
        </button>
        <p>
          Already have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLogin(false);
              setRegister(true);
            }}
            className="login-button"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
