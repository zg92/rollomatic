import { useContext } from "react";
import { HiMinusSm } from "react-icons/hi";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./dropdown-remove.css";

const DropdownRemove = () => {
  const { shotsList, setShotsList } = useContext(ShotMenuContext);

  const removeRow = async () => {
    const arrayCopy = [...shotsList];
    arrayCopy[arrayCopy.length - 2] = {
      ...arrayCopy[arrayCopy.length - 2],
      lock: false,
    };
    setShotsList(
      arrayCopy.filter((item) => item.position !== shotsList.length - 1)
    );
  };

  return (
    <div className="button-icon remove-button" onClick={removeRow}>
      <HiMinusSm />
    </div>
  );
};

export default DropdownRemove;
