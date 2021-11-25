export {};
// funciones js
//Crear una fotografia
// function createPicture(title, date, size) { // da error por no tener los tipos
//   // logica
// }

// Usamos ts, definimos los tipos para los parametros
type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size: SquareSize) {
  // Se crea la fotografia
  console.log('create Picture using', title, date, size);
}

createPicture('First date', '07/07/2020', '500x500');
// createPicture('Colombia tetra', '2020-03'); da error por que espera el 3 parametro

//parametros opcionales en funciones

function createOtherPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la fotografia
  console.log('create Picture using', title, date, size);
}

createOtherPicture('First date', '07/07/2020', '500x500');
createOtherPicture('Colombia tetra', '2020-03');
createOtherPicture('Colombia tetra');
createOtherPicture();

// Fat Arrow Functions
let createpic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size };
};

const picture = createpic('August', '2021-11-25', '1000x1000');

console.log({ picture });
