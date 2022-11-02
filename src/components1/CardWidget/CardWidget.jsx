
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export const CardWidget  = () =>{

    return(
        <div>
            <FontAwesomeIcon icon = {faCoffee}/>
            <span>5</span>
        </div>
       
    )
}

