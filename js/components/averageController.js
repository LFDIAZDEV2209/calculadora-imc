// Ver el promedio de edad de hombres y mujeres

export const averageController = (personas) => {
    if (personas.length === 0) {
        alert("No hay personas registradas");
        return;
    }
    
    let totalHombres = 0;
    let totalMujeres = 0;
    let totalEdadesHombres = 0;
    let totalEdadesMujeres = 0;

    personas.forEach(elemento => {
        if (elemento[3] === 'M') {
            totalHombres++;
            totalEdadesHombres += elemento[2];
        } else if (elemento[3] === 'F') {
            totalMujeres++;
            totalEdadesMujeres += elemento[2];
        }
    });
    
    const promedioHombres = totalHombres === 0 ? 0 : (totalEdadesHombres / totalHombres).toFixed(1);
    const promedioMujeres = totalMujeres === 0 ? 0 : (totalEdadesMujeres / totalMujeres).toFixed(1);
    
    alert(`Promedio de edad de hombres: ${promedioHombres} - Promedio de mujeres: ${promedioMujeres}`);
}

