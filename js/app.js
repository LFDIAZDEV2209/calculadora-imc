// // Realizar un progama que me permita convertir divisas en Js , las opciones son 1, convertir a dolar, 2 converitir a euros , 3 convertir a yenes y 4 finalizar y cerrar el programa de permitaR INGRESAR EL VALOR EN PESOS Y MOSTRAR SU EQUIVALENCIA ENLA DIVISA SELECCIONADA

// let running = true;

// while (running) {
//     let opcion = prompt(`
//         --------------------------------- 
//         Ingrese una opcion 1-4
//         --------------------------------- 
//         1. Convertir a dolar
//         2. Convertir a euros
//         3. Convertir a yenes
//         4. Finalizar y cerrar el programa
//         --------------------------------- 
//         = `);
//     switch (opcion) {
//         case '1':
//             let valor = prompt("Ingrese el valor en pesos: ");
//             let dolar = valor / 4000;
//             confirm("el valor en dolares es: " + dolar);
//             break;
//         case '2':
//             let valor2 = prompt("Ingrese el valor en pesos: ");
//             let euro = valor2 / 4300;
//             confirm("el valor en euros es: " + euro);
//             break;
//         case '3':
//             let valor3 = prompt("Ingrese el valor en pesos:");
//             let yen = valor3 / 27;
//             confirm('El valor en yenes es: ' + yen);
//             break;
//         case '4':
//             alert('Gracias por usar el programa');
//             running = false;
//             break;
//         default:
//             alert('Opcion no valida');
//     }
// }


// Realizar un programa que permita calcular el IMC de una perswona y dependiendo del valor muestre el estado dentro del imc

// REQUERIMIENTOS:
// 1. TOTAL HOMBRES Y MUJERES REGISTRADOS 
// 2. PROMEDIO DE EDAD DE HOMBRES Y MUJERES
// 3. TOTAL MENORES REGISTRADOS
// 4. TOTAL HOMBRES Y MUJERES CON SOBREPESO
// 5. PACIENTE DE MAS BAJO IMC

import { addController } from "./components/addController.js";
import { seeController } from "./components/seeController.js";
import { averageController } from "./components/averageController.js";
import { minorsController} from "./components/minorsController.js";
import { overweightController } from "./components/overweightController.js";
import { lowerImc } from "./components/lowerImc.js";
import { BIENVENIDO, VALUE_ERROR, FINALIZAR, MENU } from './components/msg.js';

const main = () => {
    alert(BIENVENIDO);
    let running = true;
    const personas = []; 
    
    while (running) {
        let option = prompt(MENU);
        switch (option) {
            case '1':
                addController(personas); 
                break;
            case '2':
                seeController(personas);
                break;
            case '3':
                averageController(personas);
                break;
            case '4':
                minorsController(personas);
                break;
            case '5':
                overweightController(personas);
                break;  
            case '6':
                lowerImc(personas);
                break;
            case '7':
                alert(FINALIZAR);
                running = false;
                break;
            default:
                alert(VALUE_ERROR);
                break;
        }
    }
}

main()
