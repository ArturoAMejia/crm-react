import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import EditarCliente from "./pages/EditarCliente";
import Inicio from "./pages/Inicio";
import NuevoCliente from "./pages/NuevoCliente";
import VerCliente from "./pages/VerCliente";

function App() {
  return (
    //Es el elemento donde se tienen que guardar todas las rutas
    <BrowserRouter>
      {/* Pueden haber varias rutas en esta ruta*/}
      <Routes>
        {/* Permite crear nesting de rutas, el path define la ruta y el element el layout*/}

        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          {/* Para hacer el routing dinamico se le a;ade un placeholder con :id */}
          <Route path="editar/:id" element={<EditarCliente />} />

          {/* Se pone :id para hacer el routing dinamico */}
          <Route path=":id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
