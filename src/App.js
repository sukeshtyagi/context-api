import React, { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalContext from "./components/stateProvider";

function App() {
  const { state } = useContext(GlobalContext);
  const { setState } = useContext(GlobalContext);
  const count = state.count;
  const func = state.increaseCount;
  const headerColor = state.headerColor;
  const footerColor = state.footerColor;

  return (
    <div className="outer">
      <Header />

      <div className="p">
        <input
          type="text"
          placeholder="Enter Header color"
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              headerColor: e.target.value,
            }));
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Footer color "
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              footerColor: e.target.value,
            }));
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            setState((prevState) => ({
              ...prevState,
              count: func(count),
            }));
            console.log("clicked");
          }}
        >
          Increase Count
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
