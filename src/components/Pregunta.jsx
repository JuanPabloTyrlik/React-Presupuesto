import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuestoTotal }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuestoTotal({
      presupuesto: cantidad,
      restante: cantidad
    });
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message="El presupuesto debe ser mayor a 0" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
