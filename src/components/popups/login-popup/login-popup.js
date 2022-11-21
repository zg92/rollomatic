import { useContext, useState } from "react";
import { changeHandler } from "../../../utilities/changeHandler";
import "./login-popup.css";
import {} from "../../../utilities/firestore-save";
import { loginUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";

const LoginPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setOpenPopUp } = useContext(PopUpContext);

  const login = async () => {
    loginUser(usernameInput, passwordInput);
    setUsernameInput("");
    setPasswordInput("");
  };

  return (
    <>
      <div className="popup-title">
        <h2>Login to your account</h2>
      </div>
      <div className="popup-text">Email</div>
      <input
        className="roll-name-input"
        value={usernameInput}
        type="text"
        onChange={(e) => changeHandler(e, setUsernameInput)}
      />
      <div className="popup-text"> Password</div>
      <input
        className="roll-name-input"
        value={passwordInput}
        type="password"
        onChange={(e) => changeHandler(e, setPasswordInput)}
      />
      <button className="login-button" onClick={() => login()}>
        Login
      </button>
      <div className="bottom-prompt">
        Don't have an account?{" "}
        <div
          className="bottom-prompt-link"
          onClick={() => setOpenPopUp("signup")}
        >
          Sign up
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
