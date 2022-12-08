import * as React from "react";
import { Component } from "react";
import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import { useUserContext } from "../../Context/userContext";
import { useUxContext } from "../../Context/uxContext";

function RegisterForm() {
  const { login } = useUserContext();
  const { showLoginForm, showRegisterForm } = useUxContext();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  function register(e) {
    e.preventDefault();
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const created = today.toISOString(); // "2020-06-13T18:30:00.000Z"
    axios
      .post(
        `${import.meta.env.VITE_API}/users`,
        {
          fullname,
          password: password,
          email: email,
          created: created,
        },
        { withCredentials: true }
      )
      .then((res) => {
        login(res.data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="register-form">
      <form className="register-info relative">
        <h2 className="text-center my-5 text-[32px] font-semibold">Register</h2>
        <button
          type="button"
          className="absolute right-[2%] top-[3%] text-[32px] spin-button"
          onClick={() => showRegisterForm(false)}
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
            onClick={() => {
              showRegisterForm(false);
              showLoginForm(true);
            }}
            className="login-button"
            type="button"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
