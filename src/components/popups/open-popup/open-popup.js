import { useContext, useEffect, useState } from "react";
import "./open-popup.scss";
import { getRolls } from "../../../utilities/firestore-save";
import { UserContext } from "../../../context/user.context";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { PopUpContext } from "../../../context/popup-context";
import { Warning } from "../../../utilities/inputUtilities";
import ShotDelete from "../../button-components/shot-delete/shot-delete";

const OpenPopup = () => {
  const { user } = useContext(UserContext);
  const {
    setShotsList,
    setRollSettings,
    rollSettings,
    setOpenShotSettingMenu,
    setOpenSave,
    openSave,
  } = useContext(ShotMenuContext);
  const { setOpenPopUp } = useContext(PopUpContext);
  const [rollData, setRollData] = useState([]);

  // de-nests retrieved firebase data for use in rendering options to the user
  const getRollData = async () => {
    const currentRollData = await getRolls(user.uid);
    const dataArray = [];
    currentRollData.forEach((dataItem) => dataArray.push(dataItem.data()));
    setRollData(dataArray);
    setOpenShotSettingMenu({ position: null, dropdownType: null });
  };

  // gets roll data for use in parsing function
  useEffect(() => {
    getRollData();
  }, []);

  // returns specific roll data based on selection from popup
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
    setOpenSave(rollData[index]["metaData"]["rollName"]);
  };

  return (
    <div className="popup-content open-content">
      <div className="saved-rolls-list">
        {rollData.length > 0 ? (
          rollData.map((i, index) => (
            <div
              className="saved-roll-line-item-wrapper"
              onClick={() => openRoll(index)}
              key={index}
            >
              <div className="saved-roll-line-item-data">
                <b>Name:</b>{" "}
                <i className="metadata-name">{i.metaData.rollName}</i>
              </div>
              <div className="saved-roll-line-item-data">
                <b>Date:</b> <i className="metadata-name">{i.metaData.date}</i>
              </div>
              <ShotDelete rollName={i.metaData.rollName} user={user.uid} />
            </div>
          ))
        ) : (
          <div className="saved-roll-warning-wrapper">
            <Warning warningType="noSaves" />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenPopup;
