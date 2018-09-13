import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greetings = (props) => 
  <div>Hey you! {props.firstName} {props.lastName}!</div>;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <br />
    <Greetings firstName="Dercilio" lastName="Fontes"/>
  </div>
);

export default App;
