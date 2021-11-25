// La aplicacion soporta numero y stings como id
let idUserUno: number | string;

idUserUno = 10;
idUserUno = '10';

//Buscar username dado un id
function getUsernameById(id: number | string) {
  //logica de negocio
  return 'mooenz';
}

getUsernameById(20);
getUsernameById('20');

// Alias de tipos
type ideUserDos = number | string;
type userNameUno = string;
let idUserDos: ideUserDos;

idUserDos = 10;
idUserDos = '10';

//Buscar username dado un id
function getUsernameByIdUno(id: ideUserDos): userNameUno {
  //logica de negocio
  return 'mooenz';
}

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200';
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';

// reto
type PhotoSizesType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'

const large : PhotoSizesType = '500x375';

console.log(large);