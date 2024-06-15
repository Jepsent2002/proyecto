// index.js

// Importamos las funciones aritméticas desde aritmetica.js
const { suma, resta, multiplicacion, division } = require('./aritmetica');

// Ejemplos de uso de las funciones aritméticas
const resultadoSuma = suma(5, 3);
const resultadoResta = resta(10, 4);
const resultadoMultiplicacion = multiplicacion(6, 2);
const resultadoDivision = division(8, 2);

// Mostramos los resultados en la consola
console.log('Resultado de la suma:', resultadoSuma);
console.log('Resultado de la resta:', resultadoResta);
console.log('Resultado de la multiplicación:', resultadoMultiplicacion);
console.log('Resultado de la división:', resultadoDivision);
