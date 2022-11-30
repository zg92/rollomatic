import "./logo.scss";
import { HiCamera } from "react-icons/hi";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <HiCamera className="logo-img" size={60} />
      <h3 className="logo-text">Roll-o-Matic</h3>
    </div>
  );
};

export default Logo;
