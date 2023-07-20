import React, { useState } from "react";
import logo from "../assets/logo1.svg";

import "./App.css";
import { MainContent } from "../pages/MainContent";
import { useWindowSize } from "../shared/hooks/useWindowSize";

function App() {
  let [showNavbar, setShowNavbar] = useState([true, false]);
  let windowSize = useWindowSize();
  let k = 0;
  if (windowSize < 600) k = 1;
  return (
    <div className="App">
      <header className="App-header">
        <div className={"burger"} onClick={() => setShowNavbar(showNavbar.map((el, i) => (i === k ? !el : el)))}>
          <img src={"menu.svg"} className={"menuIco"} alt={'Open the menu'}/>
        </div>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div> Search</div>
        </div>
      </header>
      <MainContent showNavbar={showNavbar[k]} />
      <footer></footer>
    </div>
  );
}

export default App;
