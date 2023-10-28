import React from 'react';
import './app.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const saludo='holis'

  return(
    <BrowserRouter>
    <Navbar hola='hola'/>
    <ItemListContainer greeting='Bienvenidos a PRUNE' saludo={saludo}/>
    <hr/>
    <h1>Bienvenidos a mi primer intento de hacer una pagina con react!</h1>
    <hr/>
    <hr/>
    <hr/>
    <Routes>
    <Route  path='/' element={<h1>Bienvenidos a la página principal de mi primer intento de hacer una página con react</h1>} />
      <Route  path='/contacto' element={<h1>Prueba</h1>} />
      <Route  path='/acerca' element={<h1 className='h1rojo'>Prueba dos (la programé después que la prueba de contacto pero es el primer boton que aparece en el navbar que no es inicio [es un poco confusa la cuestión lo imporante es que pude hacer andar las rutas])</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

