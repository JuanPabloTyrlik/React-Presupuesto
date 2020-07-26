import React from "react";
import { revisarPresupuesto } from "../helpers/controlPresupuesto.helper";
import PropTypes from "prop-types";

const ControlPresupuesto = ({ presupuestoTotal }) => {
  return (
    <>
      <div className="alert alert-primary">
        Presupuesto: $ {presupuestoTotal.presupuesto}
      </div>
      <div className={revisarPresupuesto(presupuestoTotal)}>
        Restante: $ {presupuestoTotal.restante}
      </div>
    </>
  );
};

ControlPresupuesto.propTypes = {
  presupuestoTotal: PropTypes.object.isRequired,
};

export default ControlPresupuesto;
