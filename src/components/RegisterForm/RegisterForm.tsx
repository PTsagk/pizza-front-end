import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import { useUserContext } from "../../Context/userContext";

import { useUxContext } from "../../Context/uxContext";

function RegisterForm() {
  const { showLoginForm, showRegisterForm, errorMessage, setErrorMessage } =
    useUxContext();
  const { login } = useUserContext();
  const [emailInputActive,setEmailInputActive]=useState(false)
  const [nameInputActive,setNameInputActive]=useState(false)
  const [passwordInputActive,setPasswordInputActive]=useState(false)
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        showRegisterForm(false);
      })
      .catch((e) =>
        setErrorMessage((prev) => {
          const tmp = { ...prev };
          tmp.isError = true;
          tmp.show = true;
          tmp.message = e.response.data;
          return tmp;
        })
      );
  }

  return (
    <div className="register-form">
      <form className="register-info">
      <button
          type="button"
          className="close-login-button"
          onClick={() => showRegisterForm(false)}
        >
          <AiOutlineClose />
        </button>
        <h2 className="page-title">Register</h2>
        <div className="login-input-container">
          <label className={nameInputActive?"login-label-focused":"login-label"}>Full name</label>
          <input type="email" className="login-input" onChange={(e)=>{
            setFullname(e.target.value)
              if(!e.target.value){
                setNameInputActive(false)
              }else{
                setNameInputActive(true)
              }
          }}/>

        </div>
        <div className="login-input-container">
          <label className={emailInputActive?"login-label-focused":"login-label"}>Email</label>
          <input type="email" className="login-input" onChange={(e)=>{
            setEmail(e.target.value)
              if(!e.target.value){
                setEmailInputActive(false)
              }else{
                setEmailInputActive(true)
              }
          }}/>

        </div>
        <div className="login-input-container">
          <label className={passwordInputActive?"login-label-focused":"login-label"}>Password</label>
          <input type="password" className="login-input" onChange={(e)=>{
            console.log(password)
            setPassword(e.target.value)
              if(!e.target.value){
                setPasswordInputActive(false)
              }else{
                setPasswordInputActive(true)
              }
          }}/>
        </div>
        <button
          className="login-button"
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
              showLoginForm(true)
            }}
            type="button"
          >
            <span>Login</span>
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
