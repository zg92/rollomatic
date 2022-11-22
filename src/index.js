import React from "react";
import ReactDOM from "react-dom/client";
import "./sassStyles/_global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
