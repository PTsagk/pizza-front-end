import axios from "axios";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import AuthInput from "../AuthInput/AuthInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./LoginForm.css";

function LoginForm({ closeForm, setLogin, setRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    const response = await axios.get("http://localhost:5000/users", {
      params: {
        email: email,
        password: password,
      },
    });
    // const token = await axios.get("http://localhost:5000/users/token");
    console.log(response);
  }

  return (
    <div className="login-form">
      <form className="login-info relative">
        <h2 className="text-center my-5 text-[32px] font-semibold">Login</h2>
        <button
          type="button"
          className="absolute right-[2%] top-[3%] text-[32px] spin-button"
          onClick={closeForm}
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
          className="auth-form-button bg-primary"
          type="submit"
          onClick={(e) => login(e)}
        >
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
              setRegister(false);
            }}
            className="register-button"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;

// import axios from "axios";
// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import AuthInput from "../AuthInput/AuthInput";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./LoginForm.css";

// function LoginForm({ closeForm, setLogin, setRegister }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   async function login(e) {
//     e.preventDefault();
//     axios.defaults.withCredentials = true;
//     const response = await axios.get("http://localhost:5000/users", {
//       params: {
//         email: email,
//         password: password,
//       },
//     });
//     // const token = await axios.get("http://localhost:5000/users/token");
//     console.log(response);
//   }

//   return (
//     <div className="login-form">
//       <form className="login-info relative">
//         <h2 className="text-center my-5 text-[32px] font-semibold">Login</h2>
//         <button
//           type="button"
//           className="absolute right-[2%] top-[3%] text-[32px] spin-button"
//           onClick={closeForm}
//         >
//           <AiOutlineClose />
//         </button>

//         <div>
//           <AuthInput
//             labelDisplay="Email"
//             type="email"
//             onChangeInput={(str) => setEmail(str)}
//           />
//           <AuthInput
//             labelDisplay="Password"
//             type="password"
//             onChangeInput={(str) => setPassword(str)}
//           />
//         </div>

//         <button
//           className="auth-form-button bg-primary"
//           type="submit"
//           onClick={(e) => login(e)}
//         >
//           Login
//         </button>
//         <p>
//           Don't have an account?{" "}
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               setLogin(true);
//               setRegister(false);
//             }}
//             className="register-button"
//           >
//             Register
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
