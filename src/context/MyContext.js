import React, { Children, createContext, useState } from "react";

export const Context = createContext();

export const WelcomeContext = ({ children }) => {
  const message = "Hi! Welcome to React";
  return <Context.Provider value={{ message }}>{children}</Context.Provider>;
};

export const NameContext = ({ children }) => {
  const [nameData, setNameData] = useState({
    fname: "Subhadeep",
    lname: "Chell",
  });
  return (
    <Context.Provider value={{ nameData, setNameData }}>
      {children}
    </Context.Provider>
  );
};
