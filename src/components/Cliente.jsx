import React from "react";
import { useNavigate } from "react-router";

const Cliente = ({ cliente, handleEliminar }) => {
  const { nombre, empresa, email, telefono, notas, id } = cliente;

  const navigate = useNavigate();

  return (
    <tr className="border-b-2 hover:bg-gray-100">
      <td className="p-5 text-center">{nombre}</td>
      <td className="p-5">
        <p className="text-center">
          <span className="text-gray-800 font-bold ">Email: </span>
          {email}
        </p>
        <p className="text-center">
          <span className="text-gray-800 font-bold ">Telefono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-5 text-center">{empresa}</td>
      <td className="py3 flex justify-center">
        <button
          className="p-3 m-2 bg-amber-400 hover:bg-amber-500 text-white rounded-md"
          type="button"
          onClick={() => navigate(`/clientes/${id}`)}
        >
          Ver
        </button>
        <button
          className="px-3 m-2 bg-green-500 hover:bg-green-400 text-white rounded-md"
          type="button"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>
        <button
          className="p-3 m-2 bg-red-700 hover:bg-red-600 text-white rounded-md"
          type="button"
          onClick={() => handleEliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
