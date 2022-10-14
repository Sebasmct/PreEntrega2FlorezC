import "./NavBar.css";
import logo from "./logo.jpg";
import CardWidget from "../CardWidget/CardWidget"

import React, { Component }  from 'react';

export const NavBar = ()=>{  
    return(
      <nav className='navegacion'> 
        <img className='logo' src={logo} alt="logo" />
        <ul className='list'>
            <li><a href="/">inicio</a></li>
            <li><a href="/">Electrodomesticos</a></li>
            <li><a href="/">Muebles</a></li>
            <li><a href="/">Tecnología</a></li>
        </ul>
        <CardWidget/>
      </nav>
    )
}

export default NavBar

