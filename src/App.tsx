import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lobby from './view/Lobby'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Lobby />
      </header>
    </div>
  );
}

export default App;
