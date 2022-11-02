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


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar/>
              <Routes>
                <Route path="/" element= {<ItemListContainer/>}/>
                <Route path="/contacto" element= {<ContactoPage/>}/>
                <Route path="Tienda/:categoryName" element= {<ItemListContainer/>}/>
                <Route path="detalle/:detalleId" element= {<ItemDetailContainer/>}/>
              </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;