import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  // Se usa el useParams para obtener datos de la url
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

    cargando ? <Spinner/> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (

    <div>
      <h1 className="font-black text-blue-900 text-4xl">
        Ver Cliente: {cliente.nombre}
      </h1>
      <p className="mt-3">Informacion del cliente</p>

      <p className="text-3xl text-gray-600 mt-10">
        <span className="font-bold text-gray-700">Cliente: </span>
        {cliente.nombre}
      </p>
      <p className="text-2xl text-gray-600 mt-4">
        <span className="font-bold text-gray-700">Empresa: </span>
        {cliente.empresa}
      </p>

      {cliente.telefono && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="font-bold text-gray-700">Telefono: </span>
          {cliente.telefono}
        </p>
      )}

      {cliente.notas && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="font-bold text-gray-700">Notas: </span>
          {cliente.notas}
        </p>
      )}
    </div>
    )
  );
};

export default VerCliente;
