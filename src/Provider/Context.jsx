import React, { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const initialState = {
    email,
    setEmail,
  };

  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};
export default ContextProvider;
