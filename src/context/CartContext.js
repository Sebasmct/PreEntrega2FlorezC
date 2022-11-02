import React  from "react";

export const CartContext = React.createContext();

const CustomProvider = ()=>{
    return(
        <CartContext.Provider value={{nombre:"sebas"}}>
         
        </CartContext.Provider>
    )
}