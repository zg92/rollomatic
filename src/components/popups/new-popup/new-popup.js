import { useContext, useState } from "react";
import "./new-popup.scss";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler } from "../../../utilities/changeHandler";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const NewPopup = () => {
  const [shotCount, setShotCount] = useState(Number);
  const [radioSelection, setRadioSelection] = useState();

  const { setShotsList, setRollSettings, rollSettings } =
    useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);

  const changeHandlerRadio = (e) => {
    setRadioSelection(e.target.value);
  };

  const newRoll = () => {
    if (radioSelection === "blank") {
      resetList();
    }

    if (radioSelection === "set") {
      setupRoll();
    }
  };

  const clearHeader = async () => {
    await setRollSettings({
      ...rollSettings,
      "film-stock": null,
      iso: null,
      "completed-film-stock": false,
      "completed-iso": false,
    });
  };

  const resetList = async () => {
    await setShotsList([
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
        <label for="set-roll" className="new-roll-label">
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
        <label for="set-roll" className="new-roll-label">
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
