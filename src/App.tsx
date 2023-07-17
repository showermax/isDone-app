import React, {useState} from 'react';
import logo from './logo1.svg';
import ico from '../public/menu.svg';

import './App.css';
import {MainContent} from "./components/MainContent";
import {useWindowSize} from "./hooks/useWindowSize";


function App() {
    let [showNavbar,setShowNavbar] = useState([true,false])
    let  windowSize=useWindowSize()
    let k = 0
    if (windowSize<600) k=1
  return (
    <div className="App">
      <header className="App-header">
          <div className={'burger'} onClick={()=>setShowNavbar(showNavbar.map((el,i)=> i===k ? !el:el))}>
             <img src={'menu.svg'} className={'menuIco'}/>
          </div>
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
          <div> Search </div>
        </div>
      </header>
      <MainContent showNavbar={showNavbar[k]}/>
      <footer></footer>
    </div>
  );
}

export default App;
