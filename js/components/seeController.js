// Ver total hombres y mujeres registrados 

export const seeController = (personas) => {
    if (personas.length === 0) {
        alert("No hay personas registradas");
        return;
    }
    
    let totalHombres = 0;
    let totalMujeres = 0;

    personas.forEach(elemento => {
        if (elemento[3] === 'M') {
            totalHombres++;
        } else if (elemento[3] === 'F') {
            totalMujeres++;
        }
    });
    
    alert(`Total de hombres: ${totalHombres} - Total de mujeres: ${totalMujeres}`);
}