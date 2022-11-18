import { useContext, useRef } from "react";
import "./App.css";
import ShotMenuHeader from "./components/header/shot-menu-header/shot-menu-header";
import DropdownList from "./components/shot-menu/dropdown-list/dropdown-list";
import ShotMenuWrapper from "./components/shot-menu/shot-menu-wrapper/shot-menu-wrapper";
import { ShotMenuContext } from "./context/shot-menu.context";
import Navbar from "./components/navbar/navbar";
import SavePopup from "./components/popups/save-popup/save-popup";
import { PopUpContext } from "./context/popup-context";
import LoginPopup from "./components/popups/login-popup/login-popup";
import PopUp from "./components/popups/popup.js/popup";
import SignUpPopup from "./components/popups/signup-popup/signup-popup";

function App() {
  const { openShotSettingMenu } = useContext(ShotMenuContext);
  const { openPopUp } = useContext(PopUpContext);

  return (
    <div className="App">
      <Navbar />
      <div className="app-wrapper">
        <ShotMenuHeader />
        <ShotMenuWrapper />
        {openShotSettingMenu["position"] !== null ? (
          <DropdownList position={openShotSettingMenu["position"]} />
        ) : null}
      </div>
      {openPopUp === "save" ? <PopUp type={<SavePopup />} /> : null}
      {openPopUp === "login" ? <PopUp type={<LoginPopup />} /> : null}
      {openPopUp === "signup" ? <PopUp type={<SignUpPopup />} /> : null}
    </div>
  );
}

export default App;
