import { useContext } from "react";
import { ShotMenuContext } from "../../../../context/shot-menu.context";
import { changeHandler } from "../../../input-components/input-component";
import { RadioButton } from "../../../input-components/radio-component";
import "./save-pop-up-options.scss";

const SavePopUpOptions = ({
  setRadioSelection,
  radioSelection,
  setRollName,
  rollName,
}) => {
  const { openSave } = useContext(ShotMenuContext);

  //   determines which options to display to a user depending on if they have a saved roll open

  return (
    <div>
      {openSave !== "" ? (
        <div className="save-roll-options-wrapper">
          <div className="save-roll-option-line">
            <RadioButton
              radioName={"save-roll"}
              radioValue={"update"}
              label={"Update saved roll"}
              setter={setRadioSelection}
            />
          </div>
          <div className="save-roll-option-line">
            <RadioButton
              radioName={"save-roll"}
              radioValue={"new"}
              label={"Save as new roll (enter a name)"}
              setter={setRadioSelection}
            />
          </div>
          <input
            className="save-input"
            type="text"
            value={rollName}
            onChange={(e) => changeHandler(e, setRollName)}
            style={
              radioSelection !== "new"
                ? {
                    background: "grey",
                    border: "black solid 2px",
                    pointerEvents: "none",
                  }
                : { background: "white" }
            }
          />
        </div>
      ) : (
        <div className="roll-options-row ">
          <div className="save-roll-options-wrapper">
            <div className="save-roll-option-line">
              <div className="save-roll-label">
                Save as new roll (enter a name)
              </div>
            </div>
            <input
              className="save-input"
              value={rollName}
              onChange={(e) => changeHandler(e, setRollName)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SavePopUpOptions;
