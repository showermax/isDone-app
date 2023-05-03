import React from 'react';
import logo from './done-checkmark-svgrepo-com.svg';
import './App.css';
import {MainContent} from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={'burger'}>///</div>
        <div>
          <img src={logo} className="App-logo" alt="logo"/>
          <div> Search </div>
        </div>
      </header>
      <MainContent />
      <footer></footer>
    </div>
  );
}

export default App;
