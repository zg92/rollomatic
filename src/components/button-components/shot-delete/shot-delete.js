import { useContext } from "react";
import { HiTrash } from "react-icons/hi";
import { PopUpContext } from "../../../context/popup-context";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { deleteRoll } from "../../../utilities/firestore-save";
import "./shot-delete.scss";

const ShotDelete = ({ rollName, user }) => {
  const { setOpenPopUp } = useContext(PopUpContext);
  const { openSave, setOpenSave } = useContext(ShotMenuContext);

  // Checks if currently open roll is the same as the one being deleted and prevents a user from updating an already deleted roll
  const checkOpenRoll = () => {
    if (openSave === rollName) {
      setOpenSave("");
    }
  };

  const removeRoll = async () => {
    await deleteRoll(rollName, user);
    checkOpenRoll();
    setOpenPopUp("open");
  };

  return (
    <div className="button-icon delete-button" onClick={removeRoll}>
      <HiTrash />
    </div>
  );
};

export default ShotDelete;
