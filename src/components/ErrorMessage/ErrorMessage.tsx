import * as React from "react";
import { Component } from "react";
import { useUxContext } from "../../Context/uxContext";
import "./ErrorMessage.css";
function ErrorMessage() {
  const { errorMessage, setErrorMessage } = useUxContext();

  function removeMessage() {
    const tmp = { ...errorMessage };
    tmp.show = false;
    setErrorMessage(tmp);
  }
  if (!errorMessage.show) return <></>;
  return (
    <button
      className={`error-message font-outfit ${
        errorMessage.isError ? "type-error" : "type-success"
      }`}
      onClick={() => removeMessage()}
    >
      {errorMessage.message}
    </button>
  );
}

export default ErrorMessage;
