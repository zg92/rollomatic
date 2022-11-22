import { useContext, useEffect, useState } from "react";
import { changeHandler } from "../../../utilities/changeHandler";
import "./login-popup.scss";
import {} from "../../../utilities/firestore-save";
import { loginUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";
import { UserContext } from "../../../context/user.context";

const LoginPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setOpenPopUp } = useContext(PopUpContext);
  const { user } = useContext(UserContext);

  const login = async () => {
    loginUser(usernameInput, passwordInput);
    setPasswordInput("");
  };

  useEffect(() => {
    if (user) setOpenPopUp("");
  }, [user]);

  return (
    <div className="popup-content login-content">
      <div className="roll-options-row">
        <div className="popup-text">Email</div>
        <input
          className="login-input"
          value={usernameInput}
          type="text"
          onChange={(e) => changeHandler(e, setUsernameInput)}
        />
      </div>
      <div className="roll-options-row">
        <div className="popup-text"> Password</div>
        <input
          className="login-input"
          value={passwordInput}
          type="password"
          onChange={(e) => changeHandler(e, setPasswordInput)}
        />
      </div>
      <SubmitButton text="Login" onClick={() => login()} />

      <div className="bottom-prompt">
        Don't have an account?{" "}
        <div
          className="bottom-prompt-link"
          onClick={() => setOpenPopUp("signup")}
        >
          Sign up
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
