import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utilities/firestore-auth";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      setUser(user);
    });
  }, [user]);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
