import HeaderEdit from "../header-edit/header-edit";
import DropdownAdd from "../dropdown-add/dropdown-add";
import DropdownLock from "../dropdown-lock/dropdown-lock";
import DropdownRemove from "../dropdown-remove/dropdown-remove";
import HeaderCheck from "../header-check/header-check";
import "./button.scss";

const Button = ({ buttonType, ...otherProps }) => {
  const buttonClasses = {
    addShot: <DropdownAdd />,
    removeShot: <DropdownRemove />,
    editShot: <DropdownLock {...otherProps} />,
    editRollData: <HeaderEdit {...otherProps} />,
    checkRollData: <HeaderCheck {...otherProps} />,
  };

  return <div className="button-wrapper">{buttonClasses[buttonType]}</div>;
};

export default Button;
