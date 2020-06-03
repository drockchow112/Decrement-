import React from 'react';
import logo from './logo.svg';
import './App.css';
import Decrement from "./Decrement"

function App() {
  return (
    <div className = "decContainer">
      <Decrement counter={10} />
      <Decrement counter={20} />
      <Decrement counter={100} />
    </div>
  );
}



export default App;
