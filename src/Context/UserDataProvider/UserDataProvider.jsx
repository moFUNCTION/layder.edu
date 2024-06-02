import React, { useContext } from "react";
import { createContext } from "react";
import { useAuth } from "../../@Firebase/Hooks/useAuth/useAuth";
const UserData = createContext();
export const UserDataProvider = ({ children }) => {
  const user = useAuth();
  return <UserData.Provider value={{ user }}>{children}</UserData.Provider>;
};
export const UseUserData = () => {
  return useContext(UserData);
};
