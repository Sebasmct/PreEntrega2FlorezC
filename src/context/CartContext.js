import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [productosCarrito, setproductosCarrito] = useState([]);

    //verifica si el producto ya existe o no
    const isInCart = (id) => {
        const productExists = productosCarrito.some((elemento) => elemento.id === id);
        return productExists;
    }

    const addProducts = (data, quantity) => {
        const productosCarritoCopy = [...productosCarrito];

        //verificar si el producto ya existe, modifico la propiedad cantidad de ese objeto 
        if (isInCart(data.id)) {
            const posProduct = productosCarritoCopy.findIndex((elemento)=>elemento.id === data.id)

            productosCarritoCopy[posProduct].quantity += quantity;
            productosCarritoCopy[posProduct].quantityPrice = productosCarritoCopy[posProduct].quantity*
            productosCarritoCopy[posProduct].precio;
            setproductosCarrito(productosCarritoCopy); 
        } else {

            //sino agrego el nuevo producto al arreglo
            const newProduct = {
                ...data,
                quantity: quantity,
                quantityPrice: quantity *data.precio,
            };
            productosCarritoCopy.push(newProduct);
            setproductosCarrito(productosCarritoCopy)
        }
    }

    const getTotalPrice = () =>{

        const precioTotal = productosCarrito.reduce((acc, curr)=>acc + curr.quantityPrice,0)
        return precioTotal;

    }
    
    const getTotalProducts =() =>{
        const totalProducts = productosCarrito.reduce((acc, curr)=> acc + curr.quantity,0);
        return totalProducts;
    }

    const removeItem = (id) =>{
        const newProducts = productosCarrito.filter((elemento)=>elemento.id !== id);
        setproductosCarrito(newProducts);

    }

    const removeAll = () => setproductosCarrito([]);


    return (

        <CartContext.Provider value={{ productosCarrito, addProducts, getTotalPrice, getTotalProducts, removeItem, removeAll}}>
            {children}
        </CartContext.Provider>
    )
}