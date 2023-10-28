import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad)=>{
        console.log(`Compraste ${cantidad} de ${producot.name}`)
    }
    return(
        <div>
            <h3> Detalle de: {producto.name}</h3>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
