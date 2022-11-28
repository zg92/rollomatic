import { createContext, useEffect, useState } from "react";

export const PopUpContext = createContext();

export const PopUpContextProvider = ({ children }) => {
  const [openPopUp, setOpenPopUp] = useState("");
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    openPopUp !== "" ? setBlur(true) : setBlur(false);
  }, [openPopUp]);

  const value = { openPopUp, setOpenPopUp, blur, setBlur };

  return (
    <PopUpContext.Provider value={value}>{children}</PopUpContext.Provider>
  );
};
