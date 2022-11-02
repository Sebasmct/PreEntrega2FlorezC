import React, { useState, useEffect } from "react";
import { productos } from "../BaseDatos/BaseDatos";
import "./ItemListContainer.css";
import ItemList from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";


    export const ItemListContainer = ({ greeting }) => {

        const [data, setData] = useState([]);
        const {categoryName} = useParams();
         
    
        useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(productos);
                }, 1000);
            });
            if (categoryName) {
                getData.then(res => setData (res.filter(prod => prod.category === categoryName)));
            }else {
                getData.then(res => setData(res));
            }
    
        }, [categoryName])
    
    
        return (
            <div className="contenedor">
                    {greeting}
                <div className="itemList">
                    <ItemList data={data} />
                </div>
            </div>
    
        )
    }
    
    
export default ItemListContainer;