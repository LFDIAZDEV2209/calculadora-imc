// Agregar paciente

import { validateName, validateAge, validateGender, validateWeight, validateHeight, validateId } from './validateData.js';
import { BAJO_PESO, NORMAL, SOBREPESO, OBESIDAD, ING_PESO, ING_ALTURA, VALUE_ERROR, CONTINUAR, FINALIZAR } from './msg.js';

export const addController = (personas) => {
    let running = true;

    while (running) {
        const idInput = prompt('Ingrese el ID de la persona:');
        if (!validateId(idInput)) {
            alert(VALUE_ERROR);
            continue;
        }
        const id = idInput.trim();

        const nombre = prompt('Ingrese el nombre de la persona:');
        if (!validateName(nombre)) {
            alert(VALUE_ERROR);
            continue;
        }

        const edadInput = prompt('Ingrese la edad:');
        if (!validateAge(edadInput)) {
            alert(VALUE_ERROR);
            continue;
        }
        const edad = parseInt(edadInput, 10);

        const generoInput = prompt('Ingrese el género (M/F):');
        if (!validateGender(generoInput)) {
            alert(VALUE_ERROR);
            continue;
        }
        const genero = generoInput.toUpperCase();

        const pesoInput = prompt(ING_PESO);
        if (!validateWeight(pesoInput)) {
            alert(VALUE_ERROR);
            continue;
        }
        const pesoNum = parseFloat(pesoInput);

        const alturaInput = prompt(ING_ALTURA);
        if (!validateHeight(alturaInput)) {
            alert(VALUE_ERROR);
            continue;
        }
        const alturaNum = parseFloat(alturaInput);

        const alturaM = alturaNum / 100;
        const imc = pesoNum / (alturaM * alturaM);
        let estado;
        if (imc < 18.5) {
            estado = BAJO_PESO;
        } else if (imc >= 18.5 && imc <= 24.9) {
            estado = NORMAL;
        } else if (imc >= 25 && imc <= 29.9) {
            estado = SOBREPESO;
        } else {
            estado = OBESIDAD;
        }
        const imcFormateado = parseFloat(imc.toFixed(2));
        alert(`El IMC de ${nombre} es ${imcFormateado} — ${estado}`);

        personas.push([id, nombre, edad, genero, imcFormateado, estado]);
        
        // Mostrar todos los pacientes en una sola alerta
        const listaPacientes = personas.map(elemento => 
            `ID: ${elemento[0]} - Nombre: ${elemento[1]} - Edad: ${elemento[2]} - Genero: ${elemento[3]} - IMC: ${elemento[4]} - Estado: ${elemento[5]}`
        ).join('\n\n');
        
        alert(`LISTADO DE PACIENTES:\n\n${listaPacientes}`);

        running = confirm(CONTINUAR);
    }
}; 