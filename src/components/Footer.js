import React, { useContext } from "react";
import GlobalContext from "./stateProvider";

function Footer() {
  const { state, setState } = useContext(GlobalContext);
const footerColor=state.footerColor
  return (
    <div style={{ backgroundColor: footerColor }}>
      <h1>Footer</h1>
      <p>
        count <span>{state.count}</span>
      </p>
    </div>
  );
}

export default Footer;
