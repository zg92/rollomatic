import { useContext, useState } from "react";
import { changeHandler } from "../../../utilities/changeHandler";
import "./signup-popup.css";
import { createUser } from "../../../utilities/firestore-auth";
import { PopUpContext } from "../../../context/popup-context";

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
      <div className="popup-text"> Confirm Password</div>
      <input
        className="roll-name-input"
        value={passwordInputConfirm}
        type="password"
        onChange={(e) => changeHandler(e, setPasswordInputConfirm)}
      />
      <button className="sign-up-button" onClick={() => submitCreateUser()}>
        Sign Up
      </button>
      <div className="bottom-prompt">
        Already Have an Account?
        <div
          className="bottom-prompt-link"
          onClick={() => setOpenPopUp("login")}
        >
          Login
        </div>
      </div>
    </>
  );
};

export default SignUpPopup;
