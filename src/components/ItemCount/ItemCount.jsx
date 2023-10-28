import react, {useState} from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({stock, onAdd, inicial}) =>{
    const [count, setCount] = useState(inicial)

 
const sumar = () => {
   if (count<stock){ setCount(count + 1)}
}
const restar = () => {
 if (count>0) {setCount(count - 1)}
}

    return(
        <div>
            <div className="d-flex">
                <Button variant="success" onClick={restar}>-</Button>
                <span>{count}</span>
                <Button variant="success" onClick={sumar}>+</Button>
                
            </div>
            <button onClick={()=>onAdd(count)} disabled={(count===0)|(stock===0)} >Comprar</button>
        </div>
    )
}
export default ItemCount