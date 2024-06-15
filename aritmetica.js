// aritmetica.js

// Función para sumar dos números
function suma(a, b) {
    return a + b;
}

// Función para restar dos números
function resta(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicacion(a, b) {
    return a * b;
}

// Función para dividir dos números
function division(a, b) {
    // Manejamos la división por cero
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

// Exportamos las funciones para poder usarlas en otros archivos
module.exports = {
    suma,
    resta,
    multiplicacion,
    division
};