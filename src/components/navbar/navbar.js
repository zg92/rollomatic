import "./navbar.scss";
import Logo from "../../../src/logo.png";
import { useContext } from "react";
import { ShotMenuContext } from "../../context/shot-menu.context";
import { PopUpContext } from "../../context/popup-context";
import { logoutUser } from "../../utilities/firestore-auth";
import { UserContext } from "../../context/user.context";

const Navbar = () => {
  const { setShotsList } = useContext(ShotMenuContext);
  const { openPopUp, setOpenPopUp } = useContext(PopUpContext);
  const { user } = useContext(UserContext);

  const activatePopup = (popUpType) => {
    if (openPopUp === "") {
      setOpenPopUp(popUpType);
    }
    if (openPopUp !== "") {
      setOpenPopUp(popUpType);
    }
    if (openPopUp === popUpType) {
      setOpenPopUp("");
    }
  };

  return (
    <nav className="menu-bar">
      <div className="navbar-logo-wrapper">
        <img src={Logo} className="logo" />
      </div>
      <div className="navbar-links">
        <a className="navbar-link" onClick={() => activatePopup("new")}>
          New
        </a>
        <a className="navbar-link" onClick={() => activatePopup("save")}>
          Save
        </a>
        {user === null ? (
          <a className="navbar-link" onClick={() => activatePopup("login")}>
            Login
          </a>
        ) : (
          <>
            <a className="navbar-link" onClick={() => activatePopup("open")}>
              Open
            </a>
            <a className="navbar-link" onClick={logoutUser}>
              Logout
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
