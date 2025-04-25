// Validación de datos de entrada

export function validateName(name) {
    return name && name.trim().length > 0;
}

export function validateAge(ageInput) {
    const age = parseInt(ageInput, 10);
    return !isNaN(age) && age > 0 && age <= 120 && /^\d+$/.test(ageInput.trim());
}

export function validateGender(genderInput) {
    if (!genderInput) return false;
    const gender = genderInput.toUpperCase();
    return gender === 'M' || gender === 'F';
}

export function validateWeight(pesoInput) {
    const peso = parseFloat(pesoInput);
    return !isNaN(peso) && peso > 0 && /^\d+(\.\d+)?$/.test(pesoInput.trim());
}

export function validateHeight(alturaInput) {
    const altura = parseFloat(alturaInput);
    return !isNaN(altura) && altura > 0 && /^\d+(\.\d+)?$/.test(alturaInput.trim());
}

export function validateId(idInput) {
    return idInput && idInput.trim().length > 0 && /^\d+$/.test(idInput.trim());
}
