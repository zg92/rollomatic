import React, { useContext, useEffect, useRef } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./dropdown-lock.css";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi";

const DropdownLock = ({ position }) => {
  const {
    shotsList,
    setShotsList,
    openShotSettingMenu,
    setOpenShotSettingMenu,
  } = useContext(ShotMenuContext);
  const lockButton = useRef(document.querySelector(".dropdown-lock-icon"));

  const lockToggle = async () => {
    const arrayCopy = [...shotsList];
    arrayCopy[position] = {
      ...arrayCopy[position],
      lock: arrayCopy[position]["lock"] === false ? true : false,
    };
    await setShotsList(arrayCopy);
    if (shotsList[position]["lock"] !== true) {
      setOpenShotSettingMenu({ ...openShotSettingMenu, position: null });
    }
  };

  useEffect(() => {
    shotsList[position]["lock"] === true
      ? (lockButton.current.style.background = "grey")
      : (lockButton.current.style.background = "green");
  }, [shotsList[position]["lock"]]);

  return (
    <div className="button-wrapper">
      <div
        className="button-icon edit-button"
        ref={lockButton}
        onClick={lockToggle}
      >
        {shotsList[position]["lock"] === true ? (
          <HiOutlineLockClosed />
        ) : (
          <HiOutlineLockOpen />
        )}
      </div>
    </div>
  );
};

export default DropdownLock;
