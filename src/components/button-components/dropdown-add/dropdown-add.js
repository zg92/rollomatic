import { useContext, useEffect } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./dropdown-add.css";

const DropdownAdd = () => {
  const {
    shotsList,
    setShotsList,
    shotObjectEmpty,
    openShotSettingMenu,
    setOpenShotSettingMenu,
  } = useContext(ShotMenuContext);

  const addRow = () => {
    const arrayCopy = [...shotsList];
    arrayCopy.map((lineItem) => (lineItem["lock"] = true));
    setShotsList([
      ...arrayCopy,
      {
        position: shotsList.length,
        aperture: null,
        shutterspeed: null,
        lock: false,
      },
    ]);
    setOpenShotSettingMenu({ ...openShotSettingMenu, position: null });
  };

  return (
    <div className="button-wrapper">
      <div className="button-icon add-button" onClick={addRow}>
        <HiOutlinePlusSm />
      </div>
    </div>
  );
};

export default DropdownAdd;
