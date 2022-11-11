import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartContainer.css"
import React from "react"
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../utils/FireBase";
import {EmptyCart} from "../EmptyCart/EmptyCart"
import swal from 'sweetalert2';

export const CartContainer = () =>{
    
    const value = useContext(CartContext)
    const {productosCarrito, getTotalPrice, getTotalProducts, removeItem, removeAll} = value;
    const [compraId, setCompraId] = useState('');



    const sendOrder =(evt)=>{
        evt.preventDefault()
        const compra ={
            buyer:{
                name:  evt.target[0].value,
                phone: evt.target[1].value,
                email: evt.target[2].value,

            },
            items:productosCarrito,
            total: getTotalPrice()
        }
        //console.log("compra",compra)
        //creamos la referencia de donde vamos a guardar los datos
        const queryRef = collection(db,"orders");
        //agregamos la infromaicon
        addDoc(queryRef, compra).then((resultado)=>{

            setCompraId(resultado.id);
        
        })

    }

    const mostrarAlerta = () => {
        swal.fire({
          icon: 'success',
          title: 'Compra exitosa!',
          text: 'Estás siendo redirigido',
          html: `<p>Tu número de orden es: ${compraId}</p>`,
        }).then(function(){
            window.location = '/';
            removeAll()
        })
      }




    return (
    <div>
        {
            productosCarrito.length > 0 ?

            <div className="cart"> 
            
                <div className="carrito">

                    {compraId && <p>Su compra fue realizada con el numero de orden: {compraId}</p> && mostrarAlerta()}
                    
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
                        
                        <div className='vaciar'>
                            { <button onClick={()=> removeAll()}>Vaciar</button>}
                        </div>

                        <div className="tarjeta-2" >
                            <h2><strong> Precio total: </strong> {getTotalPrice()}</h2>
                            <h2><strong> Total Productos: </strong> {getTotalProducts()}</h2>
                        </div>

                 
                            <form onSubmit={sendOrder} className="formulario">
                                    <label>Nombre</label>
                                    <input required type="text" placeholder="Nombre"/>
                                    <label>Telefono</label>
                                    <input required type="tel" placeholder="Telefono"/>
                                    <label>Correo</label>
                                    <input required type="email" placeholder="Ingrese su correo"/>

                                    <button type="submit">Enviar orden</button>
                            </form>
                            
                </div>

             </div>    

            :
            <EmptyCart/>
        }
        

    </div>
    
    )
}