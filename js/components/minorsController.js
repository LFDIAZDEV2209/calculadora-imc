// Total de menores de edad

export const minorsController = (personas) => {
    if (personas.length === 0) {
        alert("No hay personas registradas");
        return;
    }
    
    let totalMenores = 0;
    
    personas.forEach(elemento => {
        if (elemento[2] < 18) {
            totalMenores++;
        }
    });
    
    alert(`Total de menores registrados: ${totalMenores}`);
}