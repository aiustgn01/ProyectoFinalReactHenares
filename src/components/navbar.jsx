import React from 'react';
import CartWidget from './CartWidget';

function Navbar({hola}) {
  return (
    <nav className='navbar'>
      
        <a href="/" className='boton'>Inicio</a>
        <a href="/acerca" className='boton'>Acerca de</a>
        <a href="/contacto" className='boton'>Contacto</a>
      <CartWidget saludo={hola}/>
    </nav>
  );
}

export default Navbar;