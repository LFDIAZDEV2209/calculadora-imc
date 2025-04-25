// Total de hombres y mujeres con sobrepeso

export const overweightController = (personas) => {
    if (personas.length === 0) {
        alert("No hay personas registradas");
        return;
    }
    
    let totalHombresSobrepeso = 0;
    let totalMujeresSobrepeso = 0;
    
    personas.forEach(elemento => {
        if (elemento[3] === 'M' && elemento[5].includes('Sobrepeso')) {
            totalHombresSobrepeso++;
        } else if (elemento[3] === 'F' && elemento[5].includes('Sobrepeso')) {
            totalMujeresSobrepeso++;
        }
    });
    
    alert(`Total de hombres con sobrepeso: ${totalHombresSobrepeso} - Total de mujeres con sobrepeso: ${totalMujeresSobrepeso}`);
}