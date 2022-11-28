export const RadioButton = ({
  radioName,
  radioValue,
  label,
  className,
  setter,
}) => {
  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <>
      <input
        type="radio"
        name={radioName}
        value={radioValue}
        className={className}
        onChange={(e) => {
          changeHandler(e, setter);
        }}
      />

      <label htmlFor={radioValue}>{label}</label>
    </>
  );
};
