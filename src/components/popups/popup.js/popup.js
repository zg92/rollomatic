import "./popup.scss";
import { HiX } from "react-icons/hi";
import { useContext } from "react";
import { PopUpContext } from "../../../context/popup-context";

const PopUp = ({ type, title }) => {
  const { setOpenPopUp } = useContext(PopUpContext);

  const closePopup = () => {
    setOpenPopUp("");
  };

  return (
    <div className="popup-background-blur">
      <div className="popup-wrapper">
        <div className="exit-out">
          <HiX className="x" onClick={closePopup} />
        </div>
        <div className="popup-title">
          <h2>{title}</h2>
        </div>
        {type}
      </div>
    </div>
  );
};

export default PopUp;
