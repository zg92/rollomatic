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

  // This function makes it easier to populate data if a user tries to save
  // and gets the 'Data is Missing!' warning by clearing the input console
  const clearData = () => {
    if (rollSettings["rollSettingsInput"][category] === "Data is missing!") {
      setRollSettings({
        ...rollSettings,
        rollSettingsInput: {
          ...rollSettings["rollSettingsInput"],
          [category]: "",
        },
      });
    }
  };

  return (
    <div className="input-wrapper">
      <div className="category-title">{category}:</div>

      <div className="input-category-input">
        {rollSettings[`completed-${category}`] === false ? (
          <>
            <input
              type="text"
              value={rollSettings["rollSettingsInput"][category]}
              onChange={(e) => handleChanges(e)}
              onClick={clearData}
              className="input-console"
            />
            <Button buttonType="checkRollData" category={category} />
          </>
        ) : (
          <>
            <div className="input-current">{` ${rollSettings[category]}`}</div>
            <Button buttonType="editRollData" category={category} />
          </>
        )}
      </div>
    </div>
  );
};

export default ShotMenuHeaderInput;
