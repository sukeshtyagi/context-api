import React, { useContext } from "react";
import GlobalContext from "./stateProvider";

function Header() {
  const { state } = useContext(GlobalContext);
  
  return (
    <div style={{ backgroundColor: state.headerColor }}>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
