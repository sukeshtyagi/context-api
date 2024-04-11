import React, { useContext } from "react";
import {GlobalContext} from '../index'

function Footer() {
  const { footerColor } = useContext(GlobalContext);
  return (
    <div style={{ backgroundColor: footerColor }}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
