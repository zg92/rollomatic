import { useContext, useState } from "react";
import "./save-popup.scss";
import { saveRoll, updateRoll } from "../../../../utilities/firestore-save";
import { ShotMenuContext } from "../../../../context/shot-menu.context";
import { Warning } from "../../../../components/input-components/input-component";
import { UserContext } from "../../../../context/user.context";
import { PopUpContext } from "../../../../context/popup-context";
import SubmitButton from "../../../button-components/submit-button/submit-button";
import SavePopUpOptions from "../save-popup-options/save-pop-up-options";

const SavePopup = () => {
  const [rollName, setRollName] = useState("");
  const [radioSelection, setRadioSelection] = useState();
  const [warningMessage, setWarningMessage] = useState();
  const { shotsList, rollSettings, openSave } = useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);
  const { user } = useContext(UserContext);

  console.log(openSave);

  const submitRoll = async () => {
    if (rollName === "" && radioSelection === "new") {
      setWarningMessage("noRollname");
    } else {
      saveRollOption();
      setOpenPopUp("");
    }
  };

  const saveRollOption = async () => {
    if (radioSelection === undefined) {
      setWarningMessage("selectNewOption");
    }
    if (radioSelection === "new") {
      await saveRoll(user.uid, rollName, rollSettings, shotsList);
    }

    if (radioSelection === "update") {
      await updateRoll(user.uid, openSave, rollSettings, shotsList);
    }
  };

  return (
    <div className="popup-content save-content">
      <Warning warningType={warningMessage} />
      <SavePopUpOptions
        setRadioSelection={setRadioSelection}
        radioSelection={radioSelection}
        setRollName={setRollName}
        rollName={rollName}
      />
      <SubmitButton text="Save" onClick={submitRoll} />
    </div>
  );
};

export default SavePopup;
