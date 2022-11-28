import { useContext } from "react";
import "./App.scss";
import ShotMenuHeader from "./components/header/shot-menu-header/shot-menu-header";
import DropdownList from "./components/shot-menu/dropdown-list/dropdown-list";
import ShotMenuWrapper from "./components/shot-menu/shot-menu-wrapper/shot-menu-wrapper";
import { ShotMenuContext } from "./context/shot-menu.context";
import Navbar from "./components/navbar/navbar";
import SavePopup from "./components/popups/save-popup/save-popup-wrapper/save-popup";
import { PopUpContext } from "./context/popup-context";
import LoginPopup from "./components/popups/login-popup/login-popup";
import PopUp from "./components/popups/popup.js/popup";
import SignUpPopup from "./components/popups/signup-popup/signup-popup";
import NewPopup from "./components/popups/new-popup/new-popup";
import OpenPopup from "./components/popups/open-popup/open-popup";

function App() {
  const { openShotSettingMenu } = useContext(ShotMenuContext);
  const { openPopUp, blur } = useContext(PopUpContext);

  console.log(blur);

  return (
    <div className="App">
      <Navbar />
      <div
        className="blur"
        style={
          blur === true
            ? {
                backdropFilter: "blur(3px)",
              }
            : { backdropFilter: "blur(0px)", zIndex: "-1" }
        }
      />
      <div className="app-wrapper">
        <ShotMenuHeader />
        <ShotMenuWrapper />
        {openShotSettingMenu["position"] !== null ? (
          <DropdownList position={openShotSettingMenu["position"]} />
        ) : null}
      </div>
      {openPopUp === "new" ? (
        <PopUp type={<NewPopup />} title="Start a New Roll" />
      ) : null}
      {openPopUp === "save" ? (
        <PopUp type={<SavePopup />} title="Save Your Roll" />
      ) : null}
      {openPopUp === "open" ? (
        <PopUp type={<OpenPopup />} title="Select a Roll to Open" />
      ) : null}
      {openPopUp === "login" ? (
        <PopUp type={<LoginPopup />} title="Login to Your account" />
      ) : null}
      {openPopUp === "signup" ? (
        <PopUp type={<SignUpPopup />} title="Signup For an Account" />
      ) : null}
    </div>
    // </div>
  );
}

export default App;
