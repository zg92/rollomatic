import "./navbar.scss";

import { useContext } from "react";
import Logo from "../navbar-logo/logo";
import { UserContext } from "../../../context/user.context";
import { PopUpContext } from "../../../context/popup-context";
import { logoutUser } from "../../../utilities/firestore-auth";
import { ShotMenuContext } from "../../../context/shot-menu.context";

const Navbar = () => {
  const { rollSettings, setCompletedHeader } = useContext(ShotMenuContext);
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

  const saveCheck = () => {
    if (rollSettings["film-stock"] === "" || rollSettings["iso"] === "") {
      setCompletedHeader(false);
    } else {
      activatePopup("save");
      setCompletedHeader(true);
    }
  };

  const logout = () => {
    logoutUser();
    setOpenPopUp("");
  };

  return (
    <nav className="menu-bar">
      <p className="navbar-logo-wrapper">
        <Logo />
      </p>
      <div className="navbar-links">
        <p className="navbar-link" onClick={() => activatePopup("new")}>
          New
        </p>
        {user === null ? (
          <p className="navbar-link" onClick={() => activatePopup("login")}>
            Login
          </p>
        ) : (
          <>
            <p className="navbar-link" onClick={saveCheck}>
              Save
            </p>
            <p className="navbar-link" onClick={() => activatePopup("open")}>
              Open
            </p>
            <p className="navbar-link" onClick={logout}>
              Logout
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
