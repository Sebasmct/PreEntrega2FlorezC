//import logo from './logo.svg';
import './App.css';
import './components1/ContactoPage/ContactoPage'

import NavBar from './components1/NavBar/NavBar';
import ItemListContainer from './components1/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;