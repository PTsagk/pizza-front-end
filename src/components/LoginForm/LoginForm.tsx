import axios from "axios";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import AuthInput from "../AuthInput/AuthInput";
import { useState } from "react";
import "./LoginForm.css";
import { useUserContext } from "../../Context/userContext";
import { useUxContext } from "../../Context/uxContext";

function LoginForm() {
  const { user, login } = useUserContext();
  const { showLoginForm, showRegisterForm } = useUxContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .get(`${import.meta.env.VITE_API}/users`, {
        params: {
          email: email,
          password: password,
        },
      })
      .then((res) => login(res.data))
      .catch((e) => console.log(e));
  }

  return (
    <div className="login-form">
      <form className="login-info relative">
        <h2 className="text-center my-5 text-[32px] font-semibold">Login</h2>
        <button
          type="button"
          className="absolute right-[2%] top-[3%] text-[32px] spin-button"
          onClick={() => showLoginForm(false)}
        >
          <AiOutlineClose />
        </button>

        <div>
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
        </div>

        <button
          className="auth-form-button bg-[#ec1a37]"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={() => {
              showLoginForm(false);
              showRegisterForm(true);
            }}
            className="register-button"
            type="button"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
