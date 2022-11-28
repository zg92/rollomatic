import ShotMenuDropdown from "../shot-menu-dropdown/shot-menu-dropdown";
import "./shot-menu-dropdown-wrapper.scss";

const ShotMenuDropdownWrapper = ({ lineData }) => {
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-shot-number-wrapper">
        {lineData["position"] + 1}
      </div>
      <div className="dropdown-settings-wrapper">
        <ShotMenuDropdown
          dropdownType={"aperture"}
          data={lineData["aperture"]}
          position={lineData["position"]}
        />
        <ShotMenuDropdown
          dropdownType={"shutter"}
          data={lineData["shutter"]}
          position={lineData["position"]}
        />
      </div>
    </div>
  );
};

export default ShotMenuDropdownWrapper;
