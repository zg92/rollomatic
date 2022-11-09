import { createContext, useState } from "react";

export const ShotMenuContext = createContext({
    photoLineItemArray : null,
    setPhotoLineItemArray : null
})

export const ShotMenuContextProvider = ({children}) => {

    const [photoLineItemArray, setPhotoLineItemArray] = useState([{
        'position': 0,
        'aperture': null,
        'shutterspeed': null,
        'lock': false,
        'completed': false
      }])

    const menuArray = {
        'position': photoLineItemArray.length,
        'aperture': null,
        'shutterspeed': null,
        'lock': false,
        'completed': false
      }

    const [openMenu, setOpenMenu] = useState({'position':null})

    const value = {photoLineItemArray, setPhotoLineItemArray, menuArray, openMenu, setOpenMenu}

    return <ShotMenuContext.Provider value = {value}>{children}</ShotMenuContext.Provider>
}