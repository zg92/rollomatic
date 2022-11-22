import { useContext } from "react";
import { HiCheck } from "react-icons/hi";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./header-check.scss";

const HeaderCheck = ({ category }) => {
  const { rollSettings, setRollSettings } = useContext(ShotMenuContext);

  const submitItem = () => {
    setRollSettings({
      ...rollSettings,
      [`completed-${category}`]: true,
      [category]: rollSettings["rollSettingsInput"][category],
    });
  };

  return (
    <div className="button-icon check-roll-button" onClick={submitItem}>
      <HiCheck />
    </div>
  );
};

export default HeaderCheck;
