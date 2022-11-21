import { useContext, useState } from "react";
import "./save-popup.css";
import { saveRoll } from "../../../utilities/firestore-save";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler } from "../../../utilities/changeHandler";
import { UserContext } from "../../../context/user.context";
import { PopUpContext } from "../../../context/popup-context";

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
    <>
      <div className="popup-title">
        <h2>Save Your Roll</h2>
      </div>
      <div className="popup-text"> Enter a name and save your roll!</div>
      <input
        className="roll-name-input"
        value={rollName}
        onChange={(e) => changeHandler(e, setRollName)}
      />
      <button className="save-roll" onClick={submitRoll}>
        Save
      </button>
    </>
  );
};

export default SavePopup;
