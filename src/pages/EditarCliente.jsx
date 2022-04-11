import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {}

      setTimeout(() => {
        setCargando(!cargando);
      }, 500);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <div>
      <h1 className="font-black text-blue-900 text-4xl">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza el siguiente formulario para editar un cliente
      </p>

      {cliente?.nombre ? <Formulario cliente={cliente} cargando={cargando} />: <p>Cliente {id} no valido</p>}
    </div>
  );
};

export default EditarCliente;
