import { useContext, useState } from "react";
import "./new-popup.scss";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler, Warning } from "../../../utilities/inputUtilities";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const NewPopup = () => {
  const [shotCount, setShotCount] = useState(1);
  const [radioSelection, setRadioSelection] = useState();
  const [warningMessage, setWarningMessage] = useState();
  const { setShotsList, setRollSettings, rollSettings } =
    useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);

  const changeHandlerRadio = (e) => {
    setRadioSelection(e.target.value);
  };

  const newRoll = () => {
    console.log(radioSelection);
    if (radioSelection === undefined) {
      setWarningMessage("selectNewOption");
    }
    if (radioSelection === "blank") {
      resetList();
    }
    if (shotCount < 1) {
      setWarningMessage("customRollLessThanOne");
      return;
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
        shutterspeed: null,
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
          shutterspeed: null,
          lock: true,
        }
      )
    );
    await setShotsList(newShotList);
    clearHeader();
    setOpenPopUp("");
  };

  return (
    <div className="popup-content new-content">
      <Warning warningType={warningMessage} />
      <div className="roll-options-row new-input-row">
        <input
          type="radio"
          name="set-roll"
          value="blank"
          className="new-roll-radio"
          onChange={(e) => {
            changeHandlerRadio(e);
          }}
        />
        <label htmlFor="set-roll" className="new-roll-label">
          Start a blank roll
        </label>
      </div>
      <div className="roll-options-row new-input-row">
        <input
          type="radio"
          name="set-roll"
          value="set"
          className="new-roll-radio"
          onChange={(e) => {
            changeHandlerRadio(e);
          }}
        />
        <label htmlFor="set-roll" className="new-roll-label">
          Start a roll with shot count
        </label>
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
