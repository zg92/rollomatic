import { createContext, useState } from "react";

export const PopUpContext = createContext({
    openSavePopUp : Boolean,
    setOpenSavePopUp : null
})

export const PopUpContextProvider = ({children}) => {
    const [openSavePopUp, setOpenSavePopUp] = useState(false)

const value = {openSavePopUp, setOpenSavePopUp} 

return <PopUpContext.Provider value = {value} >{children}</PopUpContext.Provider>
}