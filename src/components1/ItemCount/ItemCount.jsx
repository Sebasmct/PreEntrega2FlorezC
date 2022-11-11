import "./ItemCount.css";
import React, { useState, useEffect } from "react";
import swal from 'sweetalert2';

export const ItemCount = ({ initial, stock, onAdd }) => {


    const [contador, setContador] = useState(parseInt(initial));

    const disminuir = () => {
        setContador(contador - 1);
    }

    const aumentar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial])


    const mostrarAlerta = () => {
        swal.fire({
          icon: 'success',
          title: 'Se añadio el producto!',
          text: 'Consulte su carrito de compras',
        })
      }
      console.log(contador)

    return (
        <div className="contador">
            <button disabled={contador <= 1} className="disminuir btn btn-dark btn-sm " onClick={disminuir}>-</button>
            <span>{contador}</span>
            <button disabled={contador >= stock} className="aumentar btn btn-dark btn-sm " onClick={aumentar}>+</button>

            <div>
                <button disabled={stock <= 0} onClick={() => {
                    onAdd(contador);
                    mostrarAlerta();
                }} 
                    
                    className="agregar btn btn-dark btn-sm">Agregar al Carrito</button>
            </div>

     

        </div>
    )
}

export default ItemCount;