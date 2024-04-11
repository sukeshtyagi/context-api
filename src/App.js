import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="outer">
      <Header />

      <div className="p">
        <input type="text" placeholder="Enter color code" />
        <button>Change color</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
