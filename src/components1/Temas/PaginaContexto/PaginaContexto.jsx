import  {ThemeContext}  from "../../../context/ThemeContext"
import {ComponenteA} from "../../ComponenteA/ComponenteA";
import {UserContext} from "../../../context/UserContext";
import { useState } from "react";
import React from 'react';

export const PaginaContexto = () =>{
    const [curso, setCurso] = useState("");
    return(
        <div>
             <p>pagina contexto</p>
                <UserContext.Provider value ={{nombre: "rodrigo", edad:25, curso:curso, setCurso:setCurso}}>
                    <ThemeContext.Provider value = {{backgroundTheme: "blue", fontFamilyTheme:"Arial"}}>
                        <ComponenteA/> 
                    </ThemeContext.Provider>
                </UserContext.Provider>
        </div>
    )
}


