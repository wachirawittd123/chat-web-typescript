import { createContext, useEffect, useState } from "react";
import { ICookieUser } from "../interface/common";
import axios from "axios";

let context: ICookieUser = {
    uid: "",
    email: "",
    photoUrl: ""
}

export const AuthContext = createContext<any | null>(context);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  useEffect(() => {
    queryUserById()
  }, []);

  const queryUserById = async() => {
    const result = await axios({
      method: "post",
      url: `/api/user/userById`,
    })
    if(result?.data?.result) {
      setCurrentUser(result?.data?.result)
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};