import React, { useContext } from "react";
import {GlobalContext} from '../index'

function Header() {
  const { headerColor } = useContext(GlobalContext);
  console.log(headerColor)
  return (
    <div style={{ backgroundColor: headerColor }}>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
