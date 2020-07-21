import React from 'react'
import { revisarPresupuesto } from '../helpers/controlPresupuesto.helper'

const ControlPresupuesto = ({presupuestoTotal}) => {
    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuestoTotal.presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuestoTotal)}>
                Restante: $ {presupuestoTotal.restante}
            </div>
        </>
    )
}

export default ControlPresupuesto
