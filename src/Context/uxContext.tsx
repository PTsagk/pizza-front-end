import * as React from "react";
import { Component, useState, useEffect } from "react";

interface IUxProvider {
  children: React.ReactNode;
}

interface IUxContext {
  isActiveRegister: boolean;
  isActiveLogin: boolean;
  showLoginForm: (show: boolean) => void;
  showRegisterForm: (show: boolean) => void;
}

const UxContext = React.createContext({} as IUxContext);

export function useUxContext() {
  return React.useContext(UxContext);
}

function UxProvider({ children }: IUxProvider) {
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [isActiveRegister, setIsActiveRegister] = useState(false);

  function showLoginForm(show: boolean) {
    setIsActiveLogin(show);
    setIsActiveRegister(false);
  }
  function showRegisterForm(show: boolean) {
    setIsActiveLogin(false);
    setIsActiveRegister(show);
  }

  return (
    <UxContext.Provider
      value={{
        isActiveLogin,
        isActiveRegister,
        showLoginForm,
        showRegisterForm,
      }}
    >
      {children}
    </UxContext.Provider>
  );
}

export default UxProvider;
