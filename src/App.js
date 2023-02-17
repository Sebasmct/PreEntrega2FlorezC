//import logo from './logo.svg';
import './App.css';
import './components1/ContactoPage/ContactoPage'
import { NavBar } from "./components1/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { PaginaContexto } from './components1/Temas/PaginaContexto/PaginaContexto'
import { ComponenteA } from './components1/ComponenteA/ComponenteA';
import { ItemListContainer } from './components1/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components1/ItemDetailContainer/ItemDetailContainer'
import { ItemCount } from './components1/ItemCount/ItemCount'
import { ContactoPage } from './components1/ContactoPage/ContactoPage'
import React from 'react';
import { Itemlist } from './components1/Itemlist/Itemlist'
import { ItemDetail } from "./components1/ItemDetail/ItemDetail"
import { CartContainer } from "./components1/CartContainer/CartContainer"
import { CartContext } from "./context/CartContext"
import { CartProvider } from "./context/CartContext"

function App() {

  window.watsonAssistantChatOptions = {
    integrationID: "0cc53f4b-44b0-42f3-bb65-e127e15b98d6", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "f94e6174-207c-4665-86c6-24b28e6f6ad6", // The ID of your service instance.
    onLoad: function (instance) { instance.render(); }
  };
  setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="Tienda/:categoryName" element={<ItemListContainer />} />
              <Route path="detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;