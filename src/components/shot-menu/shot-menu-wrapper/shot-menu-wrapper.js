import { useContext } from "react";
import { ShotMenuContext } from "../../../context/shot-menu.context";
import Button from "../../button-components/button/button";
import ShotMenuDropdownWrapper from "../shot-menu-dropdown-wrapper/shot-menu-dropdown-wrapper";
import "./shot-menu-wrapper.css";

const ShotMenuWrapper = () => {
  const { shotsList } = useContext(ShotMenuContext);

  return (
    <div className="menu-line-wrapper">
      {shotsList.map((lineData) => (
        <div className="line-data-wrapper" key={lineData["position"]}>
          <div className="shot-menu-wrapper">
            <ShotMenuDropdownWrapper lineData={lineData} />
          </div>
          <div className="line-button-wrapper">
            {lineData["position"] === shotsList.length - 1 ? (
              <div className="add-remove-menu">
                <Button buttonType="addShot" />
                {lineData["position"] !== 0 ? (
                  <Button buttonType="removeShot" />
                ) : null}
              </div>
            ) : (
              <Button buttonType="editShot" position={lineData["position"]} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShotMenuWrapper;
