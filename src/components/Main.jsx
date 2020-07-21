import React, { useState } from "react";
import Pregunta from "./Pregunta";
import Formulario from "./Formulario";
import Listado from "./Listado";
import ControlPresupuesto from "./ControlPresupuesto";

const Main = () => {
  const [presupuestoTotal, setPresupuestoTotal] = useState({presupuesto: 0, restante: 0});
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => {
    setPresupuestoTotal({
      ...presupuestoTotal,
      restante: presupuestoTotal.restante - gasto.cantidad
    });
    setGastos([...gastos, gasto]);
  }

  return (
    <div className="contenido contenido-principal">
      {presupuestoTotal.presupuesto ? (
        <div className="row">
          <div className="one-half column">
            <Formulario 
              agregarGasto={agregarGasto}
            />
          </div>
          <div className="one-half column">
            <Listado 
              gastos={gastos}
            />
            <ControlPresupuesto 
              presupuestoTotal={presupuestoTotal}
            />
          </div>
        </div>
      ) : (
        <Pregunta setPresupuestoTotal={setPresupuestoTotal} />
      )}
    </div>
  );
};

export default Main;
