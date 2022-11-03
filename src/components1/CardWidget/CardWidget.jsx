
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CardWidget  = () =>{
    const {getTotalProducts} = useContext(CartContext)
    return(
        <div>
            <FontAwesomeIcon icon = {faCoffee}/>
            <span>{getTotalProducts()}</span>
        </div>
       
    )
}

