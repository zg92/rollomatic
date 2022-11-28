import { useContext, useState } from "react";
import {
  changeHandler,
  Warning,
} from "../../../components/input-components/input-component";
import "./signup-popup.scss";
import { createUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const SignUpPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputConfirm, setPasswordInputConfirm] = useState("");
  const [warningMessage, setWarningMessage] = useState();
  const { setOpenPopUp } = useContext(PopUpContext);

  const submitCreateUser = async () => {
    if (passwordInputConfirm === "") {
      setWarningMessage("noConfirmPassword");
    }
    if (passwordInput === "") {
      setWarningMessage("noPassword");
    }
    if (usernameInput === "") {
      setWarningMessage("noUsername");
    }
    if (passwordInput !== passwordInputConfirm) {
      setWarningMessage("noPasswordMatch");
    } else {
      try {
        await createUser(usernameInput, passwordInput);
        setOpenPopUp("");
      } catch (e) {
        console.log(e);
      }
      setPasswordInput("");
      setPasswordInputConfirm("");
    }
  };

  return (
    <div className="popup-content signup-content">
      <Warning warningType={warningMessage} />
      <div className="roll-options-row ">
        <div className="popup-text">Email</div>
        <input
          className="signup-input"
          value={usernameInput}
          type="text"
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
      <SubmitButton text="Sign Up" onClick={() => submitCreateUser()} />

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
