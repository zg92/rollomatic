import { useContext, useState } from "react";
import "./new-popup.scss";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler, Warning } from "../../input-components/input-component";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";
import { RadioButton } from "../../input-components/radio-component";

const NewPopup = () => {
  const [shotCount, setShotCount] = useState(1);
  const [radioSelection, setRadioSelection] = useState();
  const [warningMessage, setWarningMessage] = useState();
  const { setShotsList, setRollSettings, rollSettings, setOpenSave } =
    useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);

  const newRoll = () => {
    if (radioSelection === undefined) {
      setWarningMessage("selectNewOption");
    }
    if (radioSelection === "blank") {
      resetList();
      setOpenSave("");
    }
    if (shotCount < 1) {
      setWarningMessage("customRollLessThanOne");
      return;
    }
    if (shotCount !== Number) {
      setShotCount(1);
      setupRoll();
    }

    if (radioSelection === "set") {
      setupRoll();
    }
  };

  const clearHeader = async () => {
    setRollSettings({
      ...rollSettings,
      rollSettingsInput: { iso: "", "film-stock": "" },
      "completed-film-stock": false,
      "completed-iso": false,
    });
  };

  const resetList = async () => {
    setShotsList([
      {
        position: 0,
        aperture: null,
        shutter: null,
        lock: false,
      },
    ]);
    clearHeader();
    setOpenPopUp("");
  };

  const setupRoll = async () => {
    const newShotList = [...Array(Number(shotCount))].map((e, i) =>
      Object.assign(
        {},
        {
          position: i,
          aperture: null,
          shutter: null,
          lock: true,
        }
      )
    );
    // set first item as unlocked to allow editing
    newShotList[0]["lock"] = false;

    await setShotsList(newShotList);
    clearHeader();
    setOpenPopUp("");
    setOpenSave("");
  };

  return (
    <div className="popup-content new-content">
      <Warning warningType={warningMessage} />
      <div className="roll-options-row new-input-row">
        <RadioButton
          radioName={"set-roll"}
          radioValue={"blank"}
          setter={setRadioSelection}
          className={"new-roll-radio"}
          label={"Start a blank roll"}
        />
      </div>
      <div className="roll-options-row new-input-row">
        <RadioButton
          radioName={"set-roll"}
          radioValue={"set"}
          input={"Update saved roll"}
          setter={setRadioSelection}
          className={"new-roll-radio"}
          label={"Start a roll with shot count"}
        />
        <input
          className="new-input"
          value={Number(shotCount)}
          onChange={(e) => changeHandler(e, setShotCount)}
        />
      </div>
      <SubmitButton text="New Roll" onClick={(e) => newRoll(e)} />
    </div>
  );
};

export default NewPopup;
