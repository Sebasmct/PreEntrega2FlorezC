import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartContainer.css"
import React from "react"

export const CartContainer = () =>{
    
    const value = useContext(CartContext)
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem} = value;
    
    console.log(productosCarrito)


    return (
        <div className="cart">
            
            <div className="carrito">
                <h3 className="text-carrito">Carrito de compras $</h3>
                {
                    productosCarrito.map((data)=>(
                        <div className="tarjeta">
                            <h3>{data.title}</h3>
                            <h2> Precio unitario: {data.precio}</h2>
                            <h2> {data.cantidad}</h2>
                            <h2> Precio por cantidad: {data.quantityPrice}</h2>
                            <button onClick={()=> removeItem(data.id)}> Eliminar </button>
                        </div>
                    ))
                }
                <div className="tarjeta-2" >
                    <h2><strong> Precio total: </strong> {getTotalPrice()}</h2>
                    <h2><strong> Total Productos: </strong> {getTotalProducts()}</h2>
                </div>

            </div>
        </div>
    )
}