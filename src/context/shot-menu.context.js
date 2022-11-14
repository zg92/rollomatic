import { createContext, useState } from "react";

export const ShotMenuContext = createContext({
    shotsList : null,
    setShotsList : null
})

export const ShotMenuContextProvider = ({children}) => {

    const [rollSettings, setRollSettings] = useState({
      'film-stock': null,
      'iso': null,
      'rollSettingsInput': {'iso':'','film-stock':''},
      'completed-film-stock': false,
      'completed-iso': false,
    })

    const [shotsList, setShotsList] = useState([{
        'position': 0,
        'aperture': null,
        'shutterspeed': null,
        'lock': false,
      }])

    const shotObjectEmpty = {
        'position': shotsList.length,
        'aperture': null,
        'shutterspeed': null,
        'lock': false,
      }

    const [openShotSettingMenu, setOpenShotSettingMenu] = useState({'position':null, 'dropdownType':null})

    const value = {shotsList, setShotsList, shotObjectEmpty, openShotSettingMenu, 
      setOpenShotSettingMenu, rollSettings, setRollSettings}

    return <ShotMenuContext.Provider value = {value}>{children}</ShotMenuContext.Provider>
}