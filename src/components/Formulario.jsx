import React, { useState } from "react";

const Formulario = () => {
  const [gasto, setGasto] = useState({ nombre: "", cantidad: 0 });

  const handleChange = (e) => {
    let value = e.target.value;
    if (!isNaN(value)) value = parseInt(value, 10);
    e.preventDefault();
    setGasto({...gasto, [e.target.name]: value})
  };

  const agregarGasto = (e) => {
    e.preventDefault();
    // TODO
  }

  return (
    <form 
        onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos</h2>
      <div className="campo">
        <label>Nombre</label>
        <input type="text" className="u-full-width" placeholder="Transporte" name='nombre' value={gasto.nombre} onChange={handleChange} />
      </div>
      <div className="campo">
        <label>Cantidad</label>
        <input type="number" className="u-full-width" placeholder="300" name='cantidad' value={gasto.cantidad} onChange={handleChange} />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
