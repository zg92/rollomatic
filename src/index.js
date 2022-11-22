import React from "react";
import ReactDOM from "react-dom/client";
import "./sassStyles/_global.scss";
import App from "./App";
import { ShotMenuContextProvider } from "././context/shot-menu.context";
import { PopUpContextProvider } from "./context/popup-context";
import { UserContextProvider } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <PopUpContextProvider>
        <ShotMenuContextProvider>
          <App />
        </ShotMenuContextProvider>
      </PopUpContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
