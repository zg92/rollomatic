import { useContext, useState } from "react";
import "./new-popup.css";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { changeHandler } from "../../../utilities/changeHandler";
import { PopUpContext } from "../../../context/popup-context";

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
    <>
      <div className="popup-title">
        <h2>Start a New Roll</h2>
      </div>
      <div>
        Start Blank
        <button className="setup-roll" onClick={resetList}>
          New Roll
        </button>
      </div>
      <div>
        Set Shot Count
        <input
          className="shot-count-input"
          value={Number(shotCount)}
          onChange={(e) => changeHandler(e, setShotCount)}
        />
      </div>
      <button className="setup-roll" onClick={setupRoll}>
        New Roll
      </button>
    </>
  );
};

export default NewPopup;
