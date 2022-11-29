import { useContext } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import Button from "../../button-components/button/button";
import "./shot-menu-header-input.scss";

const ShotMenuHeaderInput = ({ category }) => {
  const { rollSettings, setRollSettings } = useContext(ShotMenuContext);

  const handleChanges = (e) => {
    setRollSettings({
      ...rollSettings,
      rollSettingsInput: {
        ...rollSettings["rollSettingsInput"],
        [category]: e.target.value,
      },
    });
  };

  return (
    <div className="input-wrapper">
      <div className="category-title">{category}:</div>
      <div className="input-category-input">
        <input
          type="text"
          value={rollSettings["rollSettingsInput"][category]}
          onChange={(e) => handleChanges(e)}
          className="input-console"
          style={
            rollSettings[`completed-${category}`] === true
              ? {
                  background: "grey",
                  border: "black solid 2px",
                  pointerEvents: "none",
                }
              : { background: "white" }
          }
        />
        {rollSettings[`completed-${category}`] === false ? (
          <Button buttonType="checkRollData" category={category} />
        ) : (
          <Button buttonType="editRollData" category={category} />
        )}
      </div>
    </div>
  );
};

export default ShotMenuHeaderInput;
