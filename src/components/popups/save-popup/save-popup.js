import { useContext, useState } from "react";
import "./save-popup.scss";
import { saveRoll } from "../../../utilities/firestore-save";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler } from "../../../utilities/changeHandler";
import { UserContext } from "../../../context/user.context";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const SavePopup = () => {
  const [rollName, setRollName] = useState("");
  const { shotsList, rollSettings } = useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);
  const { user } = useContext(UserContext);

  const submitRoll = async () => {
    saveRoll(user.uid, rollName, rollSettings, shotsList);
    setOpenPopUp("");
  };

  return (
    <div className="popup-content save-content">
      <div className="roll-options-row ">
        <div className="popup-text"> Enter a name and save your roll!</div>
        <input
          className="save-input"
          value={rollName}
          onChange={(e) => changeHandler(e, setRollName)}
        />
      </div>

      <SubmitButton text="Save" onClick={submitRoll} />
    </div>
  );
};

export default SavePopup;
