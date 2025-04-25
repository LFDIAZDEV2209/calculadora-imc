# 🧮 IMC Calculator

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Project-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> Una calculadora de Índice de Masa Corporal (IMC) para registrar, calcular y analizar datos de múltiples pacientes con estadísticas de salud relevantes.

---

## 📋 Funcionalidades

- 🧍‍♂️ **Registro de pacientes**: Nombre, edad, género, peso y altura.
- 🧮 **Cálculo automático de IMC** con clasificación:
  - Bajo peso
  - Normal
  - Sobrepeso
  - Obesidad
- 📊 **Estadísticas detalladas**:
  - Cantidad total de hombres y mujeres registrados
  - Promedio de edad por género
  - Listado de menores de edad
  - Número de personas con sobrepeso
  - Paciente con el IMC más bajo

---

## 🧠 Clasificación de IMC

| Clasificación   | Rango de IMC     |
|----------------|------------------|
| Bajo peso      | IMC < 18.5       |
| Normal         | 18.5 ≤ IMC < 24.9|
| Sobrepeso      | 25 ≤ IMC < 29.9  |
| Obesidad       | IMC ≥ 30         |

---

## 📂 Estructura del Proyecto

```bash
calculadora-imc/
├── index.html                  # Página principal
├── js/
│   ├── app.js                  # Punto de entrada de la aplicación
│   └── components/             # Componentes modulares
│       ├── addController.js    # Gestión de registro de pacientes
│       ├── averageController.js # Cálculo de promedios de edad
│       ├── lowerImc.js         # Identificación de paciente con menor IMC
│       ├── minorsController.js # Listado de menores de edad
│       ├── msg.js              # Mensajes constantes del sistema
│       ├── overweightController.js # Listado de pacientes con sobrepeso
│       ├── seeController.js    # Visualización de cantidad de pacientes
│       └── validateData.js     # Validación de datos ingresados
```

---
## 🚀 Cómo utilizar

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador moderno favorito.
3. Interactúa con el menú principal:
   - `1`: Registrar nuevo paciente
   - `2`: Ver cantidad de hombres y mujeres
   - `3`: Ver promedio de edad por género
   - `4`: Ver menores de edad
   - `5`: Ver pacientes con sobrepeso
   - `6`: Ver paciente con menor IMC
   - `7`: Salir del programa

---

## 🛠️ Tecnologías utilizadas

- ⚙️ HTML5
- 🧠 JavaScript moderno (ES6+)
- 🧩 Módulos JavaScript
- 🔁 Programación orientada a objetos (OOP)

---

## ✅ Requisitos técnicos

Este proyecto está desarrollado con tecnologías modernas de JavaScript. Se recomienda utilizar un navegador actualizado (como **Chrome**, **Firefox**, **Edge**) para una ejecución correcta.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. ¡Úsalo, mejóralo y compártelo!

---

> Hecho con ❤️ para fines educativos y de práctica
