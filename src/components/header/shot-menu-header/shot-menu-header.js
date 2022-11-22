import ShotMenuHeaderInput from "../shot-menu-header-input/shot-menu-header-input";
import "./shot-menu-header.scss";

const ShotMenuHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="header-items">
        <div className="header-inputs">
          <ShotMenuHeaderInput category={"film-stock"} />
          <ShotMenuHeaderInput category={"iso"} />
        </div>
      </div>
    </div>
  );
};

export default ShotMenuHeader;
