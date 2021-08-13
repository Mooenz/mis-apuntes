//Hoisting
console.log(nombre);
apellido();

var nombre = 'Manuel';
function apellido() {
  console.log('Montaño');
};

//Evitar el Hoisting
const nombre = 'Manuel';
function apellido() {
  console.log('Montaño');
};

console.log(nombre);
apellido();

//Window solo esta presente en el navegador
window;

//Sincronia, el siguiente codigo sera ejecutado en orden
console.log('Taco 1');
console.log('Taco 2');
console.log('Taco 3');
console.log('Pastel');
console.log('Taco 4');

//Asincronia, el siguiente codigo se ejecutara segun la importancia
console.log('Taco 1');
console.log('Taco 2');
console.log('Taco 3');
setTimeout(() => console.log('Pastel'), 1000)
console.log('Taco 4');
