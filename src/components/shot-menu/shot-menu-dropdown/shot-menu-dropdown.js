import { useContext } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./shot-menu-dropdown.scss";

const ShotMenuDropdown = ({ dropdownType, data, position }) => {
  const { openShotSettingMenu, setOpenShotSettingMenu, shotsList } =
    useContext(ShotMenuContext);

  const menuStateSetter = () => {
    if (shotsList[position]["lock"] !== true) {
      if (openShotSettingMenu["position"] !== null) {
        setOpenShotSettingMenu({ position: null, dropdownType: null });
      }
      if (openShotSettingMenu["position"] === null) {
        setOpenShotSettingMenu({
          position: position,
          dropdownType: dropdownType,
        });
      }
    }
  };

  return (
    <div className="dropdown-wrapper" onClick={menuStateSetter}>
      <div className="dropdown-group">
        <div className="dropdown-type"> {dropdownType}: </div>
        <div className="dropdown-result">{data === null ? "n/a" : data}</div>
      </div>
    </div>
  );
};

export default ShotMenuDropdown;
