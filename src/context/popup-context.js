import { createContext, useState } from "react";

export const PopUpContext = createContext();

export const PopUpContextProvider = ({ children }) => {
    
  const [openPopUp, setOpenPopUp] = useState("");
  const value = { openPopUp, setOpenPopUp };

  return (
    <PopUpContext.Provider value={value}>{children}</PopUpContext.Provider>
  );
};
