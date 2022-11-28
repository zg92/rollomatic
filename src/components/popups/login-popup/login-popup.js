import { useContext, useEffect, useState } from "react";
import {
  changeHandler,
  Warning,
} from "../../../components/input-components/input-component";
import "./login-popup.scss";
import { loginUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";
import { UserContext } from "../../../context/user.context";

const LoginPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { setOpenPopUp } = useContext(PopUpContext);
  const [warningMessage, setWarningMessage] = useState();
  const { user } = useContext(UserContext);

  const login = async () => {
    if (usernameInput === "") {
      setWarningMessage("noUsername");
    }
    if (passwordInput === "") {
      setWarningMessage("noPassword");
    }
    if (usernameInput === "" && passwordInput === "") {
      setWarningMessage("noUsernameOrPassword");
    } else {
      loginUser(usernameInput, passwordInput);
      setPasswordInput("");
    }
  };

  // closes popup if user is logged in
  useEffect(() => {
    if (user) setOpenPopUp("");
  }, [user]);

  return (
    <div className="popup-content login-content">
      <Warning warningType={warningMessage} />
      <div className="roll-options-row">
        <div className="popup-text">Email</div>
        <input
          className="login-input"
          value={usernameInput}
          type="email"
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
