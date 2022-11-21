import { useContext, useEffect, useState } from "react";
import "./open-popup.css";
import { getRolls } from "../../../utilities/firestore-save";
import { UserContext } from "../../../context/user.context";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { PopUpContext } from "../../../context/popup-context";

const OpenPopup = () => {
  const { user } = useContext(UserContext);
  const { setShotsList, setRollSettings, rollSettings } =
    useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);
  const [rollData, setRollData] = useState([]);

  const getRollData = async () => {
    const currentRollData = await getRolls(user.uid);
    const dataArray = [];
    currentRollData.forEach((dataItem) => dataArray.push(dataItem.data()));
    setRollData(dataArray);
  };

  const openRoll = (index) => {
    setShotsList(rollData[index]["rollData"]);
    setRollSettings({
      ...rollSettings,
      "film-stock": rollData[index]["metaData"].filmStock,
      iso: rollData[index]["metaData"].iso,
      "completed-film-stock": true,
      "completed-iso": true,
    });
    setOpenPopUp("");
  };

  useEffect(() => {
    getRollData();
  }, []);

  return (
    <>
      <div className="popup-title">
        <h2>Select a Roll to Open</h2>
      </div>
      <div className="popup-text">Click on a roll below to open it</div>
      <div className="saved-rolls-list">
        {rollData.map((i, index) => (
          <div
            className="saved-roll-line-item-wrapper"
            onClick={() => openRoll(index)}
            key={index}
          >
            <div className="saved-roll-line-item-data">
              Name: {i.metaData.rollName}
            </div>
            <div className="saved-roll-line-item-data">
              Data: {i.metaData.date}{" "}
            </div>
            <div className="saved-roll-line-item-data">
              Film Stock: {i.metaData.filmStock}
            </div>
            <div className="saved-roll-line-item-data">
              {" "}
              ISO: {i.metaData.iso}{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OpenPopup;
