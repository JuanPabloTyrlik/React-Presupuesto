import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ agregarGasto }) => {
  const [gasto, setGasto] = useState({ nombre: "", cantidad: 0 });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    if (!isNaN(value)) value = +value;
    e.preventDefault();
    setGasto({ ...gasto, [e.target.name]: value });
  };

  const nuevoGasto = (e) => {
    const { nombre, cantidad } = gasto;
    e.preventDefault();
    if (
      isNaN(cantidad) ||
      cantidad < 1 ||
      !isNaN(nombre) ||
      nombre.trim() === ""
    ) {
      setError(true);
      setGasto({ nombre: "", cantidad: 0 });
      return;
    }
    setError(false);
    const newGasto = {
      ...gasto,
      id: shortid.generate(),
    };
    agregarGasto(newGasto);
    setGasto({ nombre: "", cantidad: 0 });
  };

  return (
    <form onSubmit={nuevoGasto}>
      <h2>Agrega tus gastos</h2>
      {error ? (
        <Error message="Todos los campos son obligatorios o la cantidad es incorrecta" />
      ) : null}
      <div className="campo">
        <label>Nombre</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          name="nombre"
          value={gasto.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          name="cantidad"
          value={gasto.cantidad.toString()}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired,
};

export default Formulario;
