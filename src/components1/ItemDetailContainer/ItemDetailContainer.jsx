import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productos } from "../BaseDatos/BaseDatos";
import './ItemDetailContainer.css'


export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });
        if (detalleId) {

            getData.then(res => setData(res.find(prod => prod.id === parseInt(detalleId))));
        }

    }, [detalleId])

    return (
        <div className="item-detail-container">
            <ItemDetail data={data} />
        </div>

    )
}


export default ItemDetailContainer;