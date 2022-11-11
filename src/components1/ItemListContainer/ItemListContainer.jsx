import React, { useState, useEffect } from "react";
//import { productos } from "../BaseDatos/BaseDatos";
import "./ItemListContainer.css";
import ItemList from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import { db } from "../../utils/FireBase";
import { collection, getDocs,query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([]);
    const { categoryName } = useParams();
    const { loading, setLoading } = useState(true);

    useEffect(() => {
        const queryRef = categoryName ? query(collection(db, "items"), where("category", "==", categoryName)) : collection(db, "items");

        getDocs(queryRef).then((response) => {
            const results = response.docs;
            const docs = results.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });

        setData(docs);
        setLoading(false);
        
        });

    }, [categoryName])

    return (
        <div className="contenedor">
            {greeting}
            <div className="itemList">
                {
                    loading ?
                        <p>cargando</p>
                        :
                        <ItemList data={data} />
                }
            </div>
        </div>
    )
}


export default ItemListContainer;