import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./LoginForm.css";
import { useUserContext } from "../../Context/userContext";
import { useUxContext } from "../../Context/uxContext";

function LoginForm() {
  const { login } = useUserContext();
  const { showLoginForm, showRegisterForm } = useUxContext();
  const [emailInputActive,setEmailInputActive]=useState(false)
  const [passwordInputActive,setPasswordInputActive]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setErrorMessage } = useUxContext();

  const [showResend, setShowResend] = useState(false);

  function handleLogin(e) {
    console.log(email, password)
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
      .catch((e) => {
        setErrorMessage((prev) => {
          const tmp = { ...prev };
          tmp.show = true;
          tmp.message = e.response.data;
          tmp.isError = true;
          return tmp;
        });
        setShowResend(true);
      });
  }

  

  return (
    <div className="login-form">
      <form className="login-info">
        <button
          type="button"
          className="close-login-button"
          onClick={() => showLoginForm(false)}
        >
          <AiOutlineClose />
        </button>
        <h1 className="page-title">Login</h1>
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
            type="button"
          >
           <span> Register</span>
          </button>
        </p>
        {/* {showResend && (
          <p>
            <button
              type="button"
              className="register-button"
              onClick={() => handleResendEmail()}
            >
              Resend Email
            </button>
          </p>
        )} */}
      </form>
    </div>
  );
}

export default LoginForm;
