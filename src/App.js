//import logo from './logo.svg';
import './App.css';
import './components1/ContactoPage/ContactoPage'
import {NavBar} from "./components1/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import {PaginaContexto} from './components1/Temas/PaginaContexto/PaginaContexto'
import { ComponenteA } from './components1/ComponenteA/ComponenteA';
import {ItemListContainer} from './components1/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components1/ItemDetailContainer/ItemDetailContainer'
import {ItemCount} from './components1/ItemCount/ItemCount'
import {ContactoPage} from './components1/ContactoPage/ContactoPage'
import React from 'react';
import {Itemlist} from './components1/Itemlist/Itemlist'
import {ItemDetail} from "./components1/ItemDetail/ItemDetail"
import {CartContainer} from "./components1/CartContainer/CartContainer"
import {CartContext} from "./context/CartContext"
import {CartProvider} from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar/>
              <Routes>
                <Route path="/" element= {<ItemListContainer/>}/>
                <Route path="/contacto" element= {<ContactoPage/>}/>
                <Route path="Tienda/:categoryName" element= {<ItemListContainer/>}/>
                <Route path="detalle/:detalleId" element= {<ItemDetailContainer/>}/>
                <Route path="/cart" element= {<CartContainer/>}/>
              </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;