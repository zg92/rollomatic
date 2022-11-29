import { useState, useEffect, useContext } from "react";
import { Warning } from "../../input-components/input-component";
import ShotMenuHeaderInput from "../shot-menu-header-input/shot-menu-header-input";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import "./shot-menu-header.scss";

const ShotMenuHeader = () => {
  const [warningMessage, setWarningMessage] = useState();
  const { completedHeader } = useContext(ShotMenuContext);

  useEffect(() => {
    if (completedHeader === false) {
      setWarningMessage("headerIncomplete");
    }
  }, [completedHeader]);

  return (
    <div className="header-wrapper">
      {!completedHeader ? <Warning warningType={warningMessage} /> : null}
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
