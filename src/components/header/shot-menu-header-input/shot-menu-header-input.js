import { useContext } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import Button from "../../button-components/button/button";
import SubmitButton from "../../button-components/submit-button/submit-button";
import "./shot-menu-header-input.scss";

const ShotMenuHeaderInput = ({ category }) => {
  const { rollSettings, setRollSettings } = useContext(ShotMenuContext);

  const submitItem = (e) => {
    setRollSettings({
      ...rollSettings,
      [`completed-${category}`]: true,
      [category]: rollSettings["rollSettingsInput"][category],
    });
  };

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
      {rollSettings[`completed-${category}`] === false ? (
        <div className="input-category-input">
          <input
            type="text"
            value={rollSettings["rollSettingsInput"][category]}
            onChange={(e) => handleChanges(e)}
            className="input-console"
          />
          <SubmitButton text="Submit" onClick={(e) => submitItem(e)} />
        </div>
      ) : (
        <div className="input-current-wrapper">
          <div className="input-current">{` ${rollSettings[category]}`}</div>
          <Button buttonType="editRollData" category={category} />
        </div>
      )}
    </div>
  );
};

export default ShotMenuHeaderInput;
