// Paciente con menor IMC

export const lowerImc = (personas) => {
    if (personas.length === 0) {
        alert("No hay personas registradas");
        return;
    }
    
    let lowerImc = personas[0][4];
    let pacienteMenorImc = personas[0];
    
    personas.forEach(elemento => {
        if (elemento[4] < lowerImc) {
            lowerImc = elemento[4];
            pacienteMenorImc = elemento;
        }
    });
    
    alert(`Paciente con menor IMC: ${pacienteMenorImc[1]} - ID: ${pacienteMenorImc[0]} - IMC: ${lowerImc}`);
}
