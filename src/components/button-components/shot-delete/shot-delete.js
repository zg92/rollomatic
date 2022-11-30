import { useContext } from "react";
import { HiTrash } from "react-icons/hi";
import { PopUpContext } from "../../../context/popup-context";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { deleteRoll, getRoll } from "../../../utilities/firestore-save";
import "./shot-delete.scss";

const ShotDelete = ({ rollName, user }) => {
  const { setOpenPopUp } = useContext(PopUpContext);
  const { setOpenSave } = useContext(ShotMenuContext);

  // Checks if currently open roll is the same as the one being deleted and prevents a user from updating an already deleted roll
  const checkOpenRoll = async () => {
    const checkedRoll = await getRoll(user, rollName);
    if (checkedRoll.exists() === false) {
      setOpenSave("");
    }
  };

  const removeRoll = async () => {
    await deleteRoll(rollName, user);
    await checkOpenRoll();
    setOpenPopUp("open");
  };

  return (
    <div className="button-icon delete-button" onClick={removeRoll}>
      <HiTrash />
    </div>
  );
};

export default ShotDelete;
