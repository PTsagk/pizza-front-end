import * as React from "react";
import { Component } from "react";
import "./AuthInput.css";
interface IAuthInput {
  labelDisplay: string;
  type: string;
  onChangeInput: (str) => void;
}

function AuthInput({ labelDisplay, type, onChangeInput }: IAuthInput) {
  const [selected, setSelected] = React.useState(false);
  const [_input, set_Input] = React.useState("");

  function handleChange(str: string) {
    set_Input(str);
    onChangeInput(str);
  }

  return (
    <div className="w-[100%] relative h-[30px] mb-5 font-bold font-outfit flex items-center inputs">
      <label
        htmlFor=""
        className={`
         w-[100%]  auth-label`}
        style={{
          transform: selected || _input ? "translateX(0)" : "translateX(45%)",
        }}
      >
        {labelDisplay}
      </label>
      <input
        type={type}
        value={_input}
        onChange={(e) => handleChange(e.target.value)}
        onSelect={() => setSelected(true)}
        onBlur={(e) => setSelected(false)}
        className="auth-input"
      />
    </div>
  );
}

export default AuthInput;
