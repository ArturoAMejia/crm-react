import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom"
import * as Yup from "yup";
import Error from "./Error";

const Formulario = () => {

  // El hook de useNavigate funciona para redirigir a una pagina con React Router DOM
  const navigate = useNavigate()

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El nombre es requerido"),
    empresa: Yup.string().required("La empresa es requerida"),
    email: Yup.string()
      .email("El email debe de ser valido")
      .required("El email es requerido"),
    telefono: Yup.number()
      .positive("Numero no valido")
      .integer("Numero no valido")
      .typeError("El telefono debe de ser numerico"),
    notas: "",
  });

  const handleSubmit = async (valores) => {
    try {
      const url = "http://localhost:4000/clientes";

      const respuesta = await fetch(url, {
        method:'POST',
        body: JSON.stringify(valores),
        headers:{
          "Content-Type":"application/json"
        }
      })

      const resultado = await respuesta.json()
      navigate('/clientes')
    } catch (error) {
      
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar cliente
      </h1>

      <Formik
        initialValues={{
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          notas: "",
        }}
        onSubmit={ async (values , {resetForm}) => {
          await handleSubmit(values);

          resetForm()
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                  Nombre:
                </label>
                <Field
                  id="nombre"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre del Cliente"
                  name="nombre"
                />

                {errors.nombre && touched.nombre ? (
                  <Error>{errors.nombre}</Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="empresa">
                  Empresa:
                </label>
                <Field
                  id="empresa"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Nombre de la Empresa"
                  name="empresa"
                />

                {errors.empresa && touched.empresa ? (
                  <Error>{errors.empresa}</Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Email del Cliente"
                  name="email"
                />

                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                  Telefono:
                </label>
                <Field
                  id="telefono"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Telefono del Cliente"
                  name="telefono"
                />
                {errors.telefono && touched.telefono ? (
                  <Error>{errors.telefono}</Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notas">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notas"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Notas del Cliente"
                  name="notas"
                />
              </div>
              <input
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                type="submit"
                value="Agregar Cliente"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Formulario;
