import * as React from "react";
import { Component } from "react";
import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";
import { Link } from "react-router-dom";
function RegisterForm() {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [addressNumber, setAddressNumber] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");

  return (
<<<<<<< HEAD
    <div className="auth-form-c">
      <form className="bg-white w-[750px] p-5">
=======
    <div className="register-form">
      <form className="register-info">
>>>>>>> 168d0b363236b0f708a27cfee974a9648a7540df
        <h2 className="text-center my-5 text-[32px] font-semibold">Register</h2>
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
        <div className="location">
          <AuthInput
            labelDisplay="Address"
            type="text"
            onChangeInput={(str) => setAddress(str)}
          />
          <AuthInput
            labelDisplay="Number"
            type="text"
            onChangeInput={(str) => setAddressNumber(str)}
          />
        </div>
        <AuthInput
          labelDisplay="City"
          type="text"
          onChangeInput={(str) => setCity(str)}
        />
        <AuthInput
          labelDisplay="Postal Code"
          type="text"
          onChangeInput={(str) => setPostalCode(str)}
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;

//<div
//   className="w-[100%] flex justify-center auth-form-c
// "
// >
//   <form className="bg-white w-[750px] p-5">
//     <h2 className="text-center my-5 text-[32px] font-semibold">Register</h2>
//     <AuthInput
//       labelDisplay="Full Name"
//       type="text"
//       onChangeInput={(str) => setFullname(str)}
//     />
//     <AuthInput
//       labelDisplay="Email"
//       type="email"
//       onChangeInput={(str) => setEmail(str)}
//     />
//     <AuthInput
//       labelDisplay="Password"
//       type="password"
//       onChangeInput={(str) => setPassword(str)}
//     />
//     <div className="flex">
//       <AuthInput
//         labelDisplay="Address"
//         type="text"
//         onChangeInput={(str) => setAddress(str)}
//       />
//       <AuthInput
//         labelDisplay="Number"
//         type="text"
//         onChangeInput={(str) => setAddressNumber(str)}
//       />
//     </div>
//     <AuthInput
//       labelDisplay="City"
//       type="text"
//       onChangeInput={(str) => setCity(str)}
//     />
//     <AuthInput
//       labelDisplay="Postal Code"
//       type="text"
//       onChangeInput={(str) => setPostalCode(str)}
//     />
//   </form>
// </div>
