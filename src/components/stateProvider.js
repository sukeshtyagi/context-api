import React, { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const initialState = {
    headerColor: "orange",
    footerColor: "cyan",
    count: 0,
    increaseCount: function (count) {
      return count + 1;
    },
  };

  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
