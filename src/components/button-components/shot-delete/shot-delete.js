import { useContext } from "react";
import { HiTrash } from "react-icons/hi";
import { PopUpContext } from "../../../context/popup-context";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import { deleteRoll } from "../../../utilities/firestore-save";
import "./shot-delete.scss";

const ShotDelete = ({ rollName, user }) => {
  const { setOpenPopUp } = useContext(PopUpContext);

  const removeRoll = async (rollName, user) => {
    await deleteRoll(rollName, user);
    setOpenPopUp("open");
  };

  return (
    <div
      className="button-icon delete-button"
      onClick={() => removeRoll(rollName, user)}
    >
      <HiTrash />
    </div>
  );
};

export default ShotDelete;
