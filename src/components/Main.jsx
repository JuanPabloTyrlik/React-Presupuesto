import React, { useState } from "react";
import Pregunta from "./Pregunta";
import Formulario from "./Formulario";

const Main = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  return (
    <div className="contenido contenido-principal">
      {presupuesto ? (
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">2</div>
        </div>
      ) : (
        <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
      )}
    </div>
  );
};

export default Main;
