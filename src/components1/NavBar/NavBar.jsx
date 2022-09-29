
import "./NavBar.css";

import CardWidget from "../../components1/CardWidget/CardWidget"

export const NavBar = ()=>{  
    return(
      <nav className='navegacion'> 
        <img className='logo' src="" alt="logo" />
        <ul className='list'>
            <li><a href="/">inicio</a></li>
            <li><a href="/">Electrodomesticos</a></li>
            <li><a href="/">Muebles</a></li>
            <li><a href="/">Tecnología</a></li>
        </ul>
   
      </nav>
    )
}

export default NavBar


