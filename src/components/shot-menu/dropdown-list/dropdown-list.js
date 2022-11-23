import React, { useContext, useRef } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./dropdown-list.scss";

const DropdownList = () => {
  const {
    shotsList,
    setShotsList,
    setOpenShotSettingMenu,
    openShotSettingMenu,
  } = useContext(ShotMenuContext);
  const dropdownMenu = useRef(document.querySelector(".dropdown-list-wrapper"));

  const listData = {
    aperture: ["f/2.8", "f/4", "f/5.6", "f/8", "f/11", "f/16", "f/22"],
    shutterspeed: [
      "1000",
      "500",
      "250",
      "125",
      "60",
      "30",
      "15",
      "8",
      "4",
      "2",
      "1",
      "1sec",
      "2sec",
    ],
  };

  const closeMenu = (arrayCopy) => {
    if (
      arrayCopy[openShotSettingMenu["position"]]["aperture"] !== null ||
      arrayCopy[openShotSettingMenu["position"]]["shutterspeed"] !== null
    ) {
      setOpenShotSettingMenu({ position: null });
    }
  };

  const setData = async (listItem) => {
    const arrayCopy = [...shotsList];
    arrayCopy[openShotSettingMenu["position"]] = {
      ...shotsList[openShotSettingMenu["position"]],
      [openShotSettingMenu["dropdownType"]]: listItem,
    };
    await setShotsList(arrayCopy);
    closeMenu(arrayCopy);
  };

  return (
    <div className="dropdown-list-wrapper" ref={dropdownMenu}>
      <ul className="dropdown-list">
        {listData[openShotSettingMenu["dropdownType"]].map((listItem) => (
          <li
            className="dropdown-list-item"
            key={listItem}
            onClick={() => setData(listItem)}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
