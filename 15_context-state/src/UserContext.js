import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefinedd); //undefined -> before hand no loggedin user

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "rajan",
    email: "rajan@gmail.com",
    dob: "01/01/2000",
  });
  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
