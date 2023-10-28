import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <div className='d-flex p-2 bd-highlight justify-content-around'> {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}</div>
  )
}

export default ItemList