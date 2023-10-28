
import react, { useEffect, useState } from "react"
import ItemCount from "./ItemCount/ItemCount"
import ItemList from "./ItemList/ItemList"
import { getProductos } from "../mock/data"
const ItemListcontainer = () =>{
    const [productos, setProductos] = useState([])
   


useEffect(()=>{
    getProductos()
    .then((res)=> setProductos(res))
    .catch((error)=>console.log(error))
})

console.log(productos)
    const onAdd = (cantidad) => {
        console.log('comprastes ', cantidad, ' productos')
    }
    return(
<div>
    <ItemCount stock={10} onAdd={onAdd} inicial={(1)}/>
    <ItemList productos={productos}/>
</div>
    )
}

export default ItemListcontainer