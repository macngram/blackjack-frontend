import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lobby from './view/Lobby'
import Layout from "./layout/Layout";

function App() {

  return (
    <div className="App">
      <Layout>
        <Lobby />
      </Layout>
    </div>
  );
}

export default App;
