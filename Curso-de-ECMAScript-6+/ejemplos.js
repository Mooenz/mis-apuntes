//EMACscript 6
//Parametros por defectos
//OLD
function parametroPorDefectoOld(name, age, country) {
  let name = name || 'oscar';
  let age = age || 32;
  let country = country || 'MX';
  console.log(name, age, country);
}
//NEW
parametroPorDefectoOld();
parametroPorDefectoOld('Jose', 20, 'COL');

function parametroPorDefectoNew(name = 'Manuel', age = 20, country = 'COL') {
  console.log(name, age, country);
}
parametroPorDefectoNew();
parametroPorDefectoNew('Oscar', 32, 'MX');

// Template literals
//OLD
let jose = 'jose'
let manuel = 'manuel' 
let nombres = jose + ' ' + manuel;
console.log(nombres);
//NEW
let nombres2 = `${jose} ${manuel}`
console.log(nombres2);

// Multilinea en los strings
//OLD
let lorem = "Hola manu, eres el mejor sigue aprendiendo :) /n"
+ "Recuerda que tu puedes y estas a un paso de ser desarrollador."
//NEW
let lorem2 = `Si te sientes 
mal o sientes que no 
puedes avanzar, 
solo pienza en la recompenza que
tendras al final de hacer
todos los
cursos.
`;
console.log(lorem);
console.log(lorem2);

// Destructuracion de elementos
//OLD
let person = {
  'name' : 'Manu',
  'age' : 29,
  'country' : 'COL'
};
console.log(person.name, person.age, person.country);
//NEW
let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagacion
let frutas1 = ['Manzana', 'Banano', 'Pera'];
let frutas2 = ['Sandia', 'Maracuya'];
let todasLasFrutas = ['Guanabana', ...frutas1, ...frutas2];
console.log(todasLasFrutas);

//Declaraacion de variables
{
  var globalVar = "Global VAR";
}
{
  let globalVar = "Global LET"
}
console.log(globalVar); // Se ejecuta
console.log(globalLet); // No se ejecuta por el Block Scope

//Propiedad en los objetos 
//OLD
let name = 'oscar';
let age = 29;
const obj = { name : name, age : age };
//NEW
const obj2 = { name, age } ;
console.log({
  obj, 
  obj2
});

//Funciones de tipo flecha
const names = [
  { name: 'Jose', age: 29 },
  { name: 'Catalina', age: 20 }
]
let listOfName = names.map(function (item) {
  console.log(item.name)
})
let listOfName2 = names.map((item) => console.log(item.name));
const listOfName3 = (name, age, country) => {
  console('Hola');
}
const listOfName3 = name => {
  console.log(name);
}

//Promesas
const helloPromise = (si) => {
  return new Promise((resolve, reject) => {
    if(si == 'si') {
      resolve('Hey!');
    } else {
      reject('Ups!!')
    }
  })
}
helloPromise('si')
.then(response => console.log(response))
.catch(error => console.log(error));

helloPromise('no')
.then(response => console.log(response))
.catch(error => console.log(error));

//Clases
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

console.log(calc.sum(2, 6));

//Modulos
import { hello } from './modulos.js'

hello();

//Generadores
function* helloWorld () {
  if(true) {
    yield 'hello, ';
  }
  if(true) {
    yield 'world';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//ECMAScript7
// Includes
let numbers = [1, 2, 3, 4, 5, 8];

if (numbers.includes(6)) {
  console.log('Si se encuentra el valor 5');
} else {
  console.log('No se encuentra')
}

//Exponencial
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(result);

//ECMAScript8
//Object.entries
const dataTeam = {
  frontend: 'Manuel',
  backend: 'Jose',
  desig: 'Jose Manuel',
}
const dataTeamArray = Object.entries(dataTeam);
console.log(dataTeamArray);

//Object.value
const dataTeam = {
  frontend: 'Manuel',
  backend: 'Jose',
  desig: 'Jose Manuel',
}
const dataTeamArrayValue = Object.values(dataTeam);
console.log(dataTeamArrayValue);

//padStrart
const nombreCliente = 'Jose manuel';
console.log(nombreCliente.padStart(14,'Sr '));

//padEnd
const nombreCliente = 'Jose manuel';
console.log(nombreCliente.padEnd(15,', Hi'));

//Trailing-Comas
const colombia = {
  poblacion : 50_000_000 ,
  idioma : 'español',
  religion : 'laica',//Esta coma se deja en algunos casos para no tener errores.
}

//Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello Wolrd', 3000))
      : reject(new Error('Test Error'))
  })
};

const helloWorAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloWorAsync();
//Usamos try y catch para mejorar nuestro codigo y darle mejor manejo a los errores.
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
}

anotherFunction();

//ECMAScript 9
//Operador de reposo
const datosUsuario = {
  name: 'Manuel',
  age: 29,
  country: 'CO',
};
let { name, ...all} = datosUsuario;
console.log(all);

//Operador de propagacion
const equiposEspaña = {
  realMadrid : 'RMCF',
  barcelona : 'BCN'
}
const equiposItalia = {
  milan : 'MIL',
  juventus : 'JUV',
}
const equipoEuropeos = {
  ...equiposEspaña,
  ...equiposItalia,
}
console.log(equipoEuropeos);

//.finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error')) 
  })
};
helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => {
    setTimeout(() => console.log('Termino'), 1000)
  });

//Mejoras en Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-08-11');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

//ECMAScript 10
//Aplanar arrays
// FLAT
const numbers = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(numbers.flat(4));
//FLATMAP
let array = [1, 2, 3, 4, 5, 6];
console.log(array.flatMap(value => [value, value * 2]));

// Eliminar espacios en blanco de un string
let hello = '        Hello World';
console.log(hello);
console.log(hello.trimStart());

// Optional catch
try {

}catch (ErrorOpcional) { 
  error
}

// Entries
const data = [['name', 'Jose'], ['age', 29]];
console.log(Object.fromEntries(data));

//Symbol
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);