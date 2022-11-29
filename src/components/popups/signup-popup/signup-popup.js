import { useContext, useState, useEffect } from "react";
import {
  changeHandler,
  Warning,
} from "../../../components/input-components/input-component";
import "./signup-popup.scss";
import { createUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";
import { UserContext } from "../../../context/user.context";

const SignUpPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputConfirm, setPasswordInputConfirm] = useState("");
  const [warningMessage, setWarningMessage] = useState();
  const { setOpenPopUp } = useContext(PopUpContext);
  const { user } = useContext(UserContext);

  const signUp = async () => {
    try {
      await createUser(usernameInput, passwordInput);
    } catch (e) {
      console.log(e);
      if (e.code === "auth/invalid-email") {
        setWarningMessage("invalidEmail");
      }
      if (e.code === "auth/weak-password") {
        setWarningMessage("weakPassword");
      }
      if (e.code === "auth/email-already-in-use") {
        setWarningMessage("weakPassword");
      }
    }
    setPasswordInput("");
    setPasswordInputConfirm("");
  };

  const createUserChecks = async () => {
    if (passwordInput === "") {
      setWarningMessage("noPassword");
    }
    if (usernameInput === "") {
      setWarningMessage("noUsername");
    }
    if (passwordInput !== passwordInputConfirm) {
      setWarningMessage("noPasswordMatch");
    } else {
      signUp();
    }
  };

  useEffect(() => {
    if (user) setOpenPopUp("");
  }, [user]);

  return (
    <div className="popup-content signup-content">
      <Warning warningType={warningMessage} />
      <div className="roll-options-row">
        <div className="popup-text">Email</div>
        <input
          className="signup-input"
          value={usernameInput}
          type="email"
          onChange={(e) => changeHandler(e, setUsernameInput)}
        />

        <div className="popup-text"> Password</div>
        <input
          className="signup-input"
          value={passwordInput}
          type="password"
          onChange={(e) => changeHandler(e, setPasswordInput)}
        />

        <div className="popup-text"> Confirm Password</div>
        <input
          className="signup-input"
          value={passwordInputConfirm}
          type="password"
          onChange={(e) => changeHandler(e, setPasswordInputConfirm)}
        />
      </div>
      <SubmitButton text="Sign Up" onClick={() => createUserChecks()} />

      <div className="bottom-prompt">
        Already Have an Account?
        <div
          className="bottom-prompt-link"
          onClick={() => setOpenPopUp("login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default SignUpPopup;
