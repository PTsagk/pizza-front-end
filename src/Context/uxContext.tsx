import * as React from "react";
import { Component, useState, useEffect } from "react";

interface IUxProvider {
  children: React.ReactNode;
}

interface IUxContext {
  isActiveRegisterForm: boolean;
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
  const [isActiveRegisterForm, setIsActiveRegisterForm] = useState(false);

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
        showLoginForm,
        showRegisterForm,
      }}
    >
      {children}
    </UxContext.Provider>
  );
}

export default UxProvider;
