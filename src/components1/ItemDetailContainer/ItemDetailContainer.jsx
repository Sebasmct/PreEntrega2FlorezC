import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { db } from "../../utils/FireBase";
import { doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleId } = useParams();
    const { loading, setLoading } = useState(true);

    useEffect(() => {

        const getData = async () => {
        // crreamos la referencia del producto
        const queryRef = doc(db, "items", detalleId);
        //hacemos la consulta
        const response = await getDoc(queryRef);

        const newDoc = {
            ...response.data(),
            id: response.id
        }
        
        setData(newDoc);
        setLoading(false);
        
        }
        getData();

    }, [detalleId])

    return (
        <div className="item-detail-container">
            <div>
                
                {
                    loading ? 
                    <p> Cargando</p>
                    :
                    <ItemDetail data={data} />
                }

            </div>
        </div>
    )
}


export default ItemDetailContainer;