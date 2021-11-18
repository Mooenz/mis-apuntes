// Null
// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error de tipo

// inferido
let otherVariable = null; // Por defecto indica que la variable es de tipo any
otherVariable = 'test';

console.log({ nullVariable, otherVariable });

// Undefined
// Explicito
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error de tipo de dato

// Inferido
let otherUndefined = undefined; // Por defecto indica que la variable es de tipo any
otherUndefined = 1;

console.log({ undefinedVariable, otherUndefined });

// Uso Null y Undefined como subtipos

let albumName: string;
// albumName = null; // Error de tipo
// albumName = undefined; // Error de tipo