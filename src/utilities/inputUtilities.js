export const changeHandler = (e, setter) => {
  setter(e.target.value);
};

export const Warning = ({ warningType, firebaseMessage }) => {
  const warningObject = {
    noUsername: "You must enter a email",
    noPassword: "You must enter a password",
    noConfirmPassword: "You must confirm your password",
    noUsernameOrPassword: "You must enter an email and password",
    noRollname: "You must enter a roll name to save",
    customRollLessThanOne: "You must enter a shot count greater than 0",
    noPasswordMatch: "Your passwords did not match",
    selectNewOption: "You must select an option for your new roll",
  };

  return (
    <div className="warning-text-wrapper" style={{ color: "red" }}>
      {warningObject[warningType]}
    </div>
  );
};
