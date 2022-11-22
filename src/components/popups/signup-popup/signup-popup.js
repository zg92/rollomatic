import { useContext, useState } from "react";
import { changeHandler } from "../../../utilities/changeHandler";
import "./signup-popup.scss";
import { createUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const SignUpPopup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordInputConfirm, setPasswordInputConfirm] = useState("");
  const { setOpenPopUp } = useContext(PopUpContext);

  const submitCreateUser = async () => {
    if (passwordInput === passwordInputConfirm) {
      try {
        await createUser(usernameInput, passwordInput);
        setOpenPopUp("");
      } catch (e) {
        console.log(e);
      }
    } else {
      console.warning("passwords must match");
    }
    setPasswordInput("");
    setPasswordInputConfirm("");
  };

  return (
    <div className="popup-content signup-content">
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
