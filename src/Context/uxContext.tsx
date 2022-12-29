import * as React from "react";
import { Component, useState, useEffect } from "react";

interface IUxProvider {
  children: React.ReactNode;
}

interface IErrorMessage {
  message: string;
  show: boolean;
  isError: boolean;
}

interface IUxContext {
  isActiveRegisterForm: boolean;
  isActiveLogin: boolean;
  errorMessage: IErrorMessage;
  showLoginForm: (show: boolean) => void;
  showRegisterForm: (show: boolean) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<IErrorMessage>>;
}

const UxContext = React.createContext({} as IUxContext);

export function useUxContext() {
  return React.useContext(UxContext);
}

function UxProvider({ children }: IUxProvider) {
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [isActiveRegisterForm, setIsActiveRegisterForm] = useState(false);

  // Error messages
  const [errorMessage, setErrorMessage] = useState({
    message: "",
    show: false,
    isError: false,
  });

  function showLoginForm(show: boolean) {
    setIsActiveLogin(show);
  }
  function showRegisterForm(show: boolean) {
    setIsActiveRegisterForm(show);
  }

  return (
    <UxContext.Provider
      value={{
        isActiveLogin,
        isActiveRegisterForm,
        errorMessage,
        showLoginForm,
        showRegisterForm,
        setErrorMessage,
      }}
    >
      {children}
    </UxContext.Provider>
  );
}

export default UxProvider;
