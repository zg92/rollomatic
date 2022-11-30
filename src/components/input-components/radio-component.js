export const RadioButton = ({
  radioName,
  radioValue,
  label,
  className,
  setter,
  labelClass,
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

      <label htmlFor={radioValue} className={labelClass}>
        {label}
      </label>
    </>
  );
};
