import { createContext, useState } from "react";

export const ShotMenuContext = createContext();

export const ShotMenuContextProvider = ({ children }) => {
  const [rollSettings, setRollSettings] = useState({
    "film-stock": "",
    iso: "",
    rollSettingsInput: { iso: "", "film-stock": "" },
    "completed-film-stock": false,
    "completed-iso": false,
    rollname: null,
  });

  const [openSave, setOpenSave] = useState("");

  const [completedHeader, setCompletedHeader] = useState("");

  const [shotsList, setShotsList] = useState([
    {
      position: 0,
      aperture: null,
      shutter: null,
      lock: false,
    },
  ]);

  const [openShotSettingMenu, setOpenShotSettingMenu] = useState({
    position: null,
    dropdownType: null,
  });

  const value = {
    shotsList,
    setShotsList,
    openShotSettingMenu,
    setOpenShotSettingMenu,
    rollSettings,
    setRollSettings,
    openSave,
    setOpenSave,
    completedHeader,
    setCompletedHeader,
  };

  return (
    <ShotMenuContext.Provider value={value}>
      {children}
    </ShotMenuContext.Provider>
  );
};
