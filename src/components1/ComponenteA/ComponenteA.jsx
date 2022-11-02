import React from "react"
import {useContext} from "react"
import { ThemeContext } from "../../context/ThemeContext"
import {UserContext} from "../../context/UserContext";


export const ComponenteA = () =>{
    const perfil = useContext(UserContext);
    const value = useContext(ThemeContext);
    console.log("value", value)

    return(
        <div style={{padding:"10px", margin:"5px", border:"1px solid red"}}> 
            <p>componente A </p>
            <p> {value.backgroundTheme}</p>
            <h3>{perfil.nombre}</h3>
            <p> {perfil.nombre} estas en el {perfil.curso}</p>
            <button onClick={()=>perfil.setCurso("curso html")}> cambiar nombre </button>
            <p> y tienes {perfil.edad} años</p>
        </div>
    )
}

