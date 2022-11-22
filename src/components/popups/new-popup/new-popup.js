import { useContext, useState } from "react";
import "./new-popup.scss";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler } from "../../../utilities/changeHandler";
import { PopUpContext } from "../../../context/popup-context";
import SubmitButton from "../../button-components/submit-button/submit-button";

const NewPopup = () => {
  const [shotCount, setShotCount] = useState(Number);

  const { setShotsList, setRollSettings, rollSettings } =
    useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);

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
    <div className="popup-content">
      <div className="popup-title">
        <h2>Start a New Roll</h2>
      </div>
      <div className="roll-options-row new-wrapper">
        Start a blank roll
        <SubmitButton text="New Roll" onClick={resetList} />
      </div>
      <div className="roll-options-row new-wrapper">
        Start a roll with shot count
        <input
          className="shot-count-input"
          value={Number(shotCount)}
          onChange={(e) => changeHandler(e, setShotCount)}
        />
        <SubmitButton text="New Roll" onClick={setupRoll} />
      </div>
    </div>
  );
};

export default NewPopup;
