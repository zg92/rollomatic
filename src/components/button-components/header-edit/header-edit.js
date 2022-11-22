import { useContext } from "react";
import { HiPencil } from "react-icons/hi";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./header-edit.scss";

const HeaderEdit = ({ category }) => {
  const { rollSettings, setRollSettings } = useContext(ShotMenuContext);

  const editHeader = () => {
    setRollSettings({ ...rollSettings, [`completed-${category}`]: false });
  };

  return (
    <div className="button-icon edit-roll-button" onClick={() => editHeader()}>
      <HiPencil />
    </div>
  );
};

export default HeaderEdit;
