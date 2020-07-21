export const revisarPresupuesto = ({presupuesto, restante}) => {
    const ratio = restante/presupuesto;
    if (ratio <= 0.25) return 'alert alert-danger';
    if (ratio <= 0.50) return 'alert alert-warning';
    return 'alert alert-success';
}
