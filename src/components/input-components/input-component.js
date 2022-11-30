export const changeHandler = (e, setter) => {
  setter(e.target.value);
};

export const Warning = ({ warningType }) => {
  const warningObject = {
    noUsername: "You must enter an email",
    noPassword: "You must enter a password",
    noUsernameOrPassword: "You must enter an email and password",
    noRollname: "You must enter a roll name to save",
    customRollLessThanOne: "You must enter a shot count greater than 0",
    noPasswordMatch: "Your passwords did not match",
    selectNewOption: "You must select an option for your new roll",
    noSaves: "You have no rolls saved",
    headerIncomplete: "Cannot save without required information below",
    invalidEmail: "There was an issue with the provided email",
    invalidPassword: "There was an issue with the provided password",
    weakPassword: "Your password must be at least 6 characters",
    accoutExists: "The account you signed up already exists",
    nonNumberEntered: "A non-integer was entered",
    noUserFound: "Account does not exist",
  };

  return (
    <div className="warning-text-wrapper" style={{ color: "red" }}>
      {warningObject[warningType]}
    </div>
  );
};
