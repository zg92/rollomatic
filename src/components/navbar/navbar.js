import "./navbar.scss";
import Logo from "../assets/logo.png";
import { useContext } from "react";
import { ShotMenuContext } from "../../context/shot-menu.context";
import { PopUpContext } from "../../context/popup-context";
import { logoutUser } from "../../utilities/firestore-auth";
import { UserContext } from "../../context/user.context";

const Navbar = () => {
  const { setShotsList, rollSettings } = useContext(ShotMenuContext);
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
      return;
    } else {
      activatePopup("save");
    }
  };

  const logout = () => {
    logoutUser();
    setOpenPopUp("");
  };

  return (
    <nav className="menu-bar">
      <div className="navbar-logo-wrapper">
        <img src={Logo} className="logo" />
      </div>
      <div className="navbar-links">
        <h3 className="navbar-link" onClick={() => activatePopup("new")}>
          New
        </h3>
        {user === null ? (
          <h3 className="navbar-link" onClick={() => activatePopup("login")}>
            Login
          </h3>
        ) : (
          <>
            <h3 className="navbar-link" onClick={saveCheck}>
              Save
            </h3>
            <h3 className="navbar-link" onClick={() => activatePopup("open")}>
              Open
            </h3>
            <h3 className="navbar-link" onClick={logout}>
              Logout
            </h3>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
