import "./submit-button.scss";

const SubmitButton = ({ text, ...otherProps }) => {
  return (
    <div className="button-submit" {...otherProps}>
      {text}
    </div>
  );
};

export default SubmitButton;
