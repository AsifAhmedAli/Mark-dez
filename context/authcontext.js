import React, { createContext, useState } from "react";
import { Text } from "react-native";
export const authContext = createContext();

export const AuthProvider = ({ props }) => {
  const [Test, setTest] = useState("test value");
  return <authContext.Provider value={{ Test }}>{props}</authContext.Provider>;
  //   return <Text>asdfasdf</Text>;
};

// export default AuthProvider;
