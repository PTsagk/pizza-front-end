import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./Context/userContext";
import UxProvider from "./Context/uxContext";
import AddressProvider from "./Context/addressContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <UserProvider>
      <AddressProvider>
        <UxProvider>
          <App />
        </UxProvider>
      </AddressProvider>
    </UserProvider>
  </BrowserRouter>
);
