# **ECMAScript 6 -** *Junio 2015*

Es la especificacion del lenguaje propuesto por ECMA internacional que es una institucion encargada de los estandares, y javascript es el lenjuage de programacion que utiliza esta especificacion para trabajar en estas caracteristicas que va siendo añadidas año con año apartir del 2015, que fue lanzada la version 6.

## **Parametros por defecto**
Podemos establecer ciertos valores que le pasamos a una funcion por defecto.

```js
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
```

## **Template literals**
Nos permite separar o unir varios elementos.

```js
//OLD
let jose = 'jose'
let manuel = 'manuel' 
let nombres = jose + ' ' + manuel;
console.log(nombres);
//NEW
let nombres2 = `${jose} ${manuel}`
console.log(nombres);
```

## **Multilinea en los strings**
```js
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
```

## **Destructuracion de elementos**

```js
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
```

## **Operador de propagacion**
Permite expandir varios elementos
```js
let frutas1 = ['Manzana', 'Banano', 'Pera'];
let frutas2 = ['Sandia', 'Maracuya'];
let todasLasFrutas = ['Guanabana', ...frutas1, ...frutas2];

console.log(todasLasFrutas);
```

## **Declaracion de variables**
Anteriormente se declaraban las variables con la palabra reservada VAR, ahora con ECMAScript 6 se debe realizar esa declaracion con LET o CONST, esto permite darle una asignacion en bloque.

Al declara una variable con CONST estamos indicando que la variable es constante y no tendra ningun cambio o reasignacion.
```js
{
  var globalVar = "Global VAR";
}

{
  let globalVar = "Global LET"
}

console.log(globalVar); // Se ejecuta
console.log(globalLet); // No se ejecuta por el Block Scope
```
## **Propiedad de objetos**
```js
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
```

## **Funciones de tipo flecha**
Son una simplificacion de las funciones.
```js
const names = [
  { name: 'Jose', age: 29 },
  { name: 'Catalina', age: 20 }
]

//map necesita una funcion anonima para iterar sobre el array names
let listOfName = names.map(function (item) {
  console.log(item.name)
})

//Esta funcion se puede simplificar con funciones de flecha
let listOfName2 = names.map((item) => console.log(item.name));

//Las funciones de flecha se pueden aplicar a funciones normales
const listOfName3 = (name, age, country) => {
  console('Hola');
}

//y si puede simplificar a este grado
const listOfName3 = name => {
  console.log(name);
}

// o a este
const listOfName = name => console.log(name);
```
## **Promesas**
Se trabajan en el asingronismo y se usa normalmente para llamar api.
```js
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
```

## **Clases**
```js
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
}
```

## **Modulos**
```js
//Export
const hello = () => { return 'hello!' } 
export { hello };
//Importa
import { hello } from './modulos.js'
hello();
```
## **Generadores**
Es una funcion especial que retorna una serie de valores segun el algoritmo definido.
```js
function* helloWorld () {
  if(true) {
    yield 'hello, ';
  }
  if(true) {
    yield 'world';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); //hello, 
console.log(generatorHello.next().value); //world
console.log(generatorHello.next().value); //undefined
```

# **ECMAscript 7 -** *Junio 2016*
## **Includes**
Es un metodo de los arrays que nos indica mediante true o false la existencia de un elemento dentro de un arreglo.
```js
let numbers = [1, 2, 3, 4, 5, 8];

if (numbers.includes(6)) {
  console.log('Si se encuentra el valor 5');
} else {
  console.log('No se encuentra')
}
```

## **Operaciones en forma exponencial**
Usando el doble asterisco '**', indicamos que es una operacion exponencial.
```js
let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(result);
```

# **ECMAscript 8 -** *Junio 2017*
## **Object.entries**
Permite comvertir un objeto en un arreglo.
```js
const dataTeam = {
  frontend: 'Manuel',
  backend: 'Jose',
  desig: 'Jose Manuel',
}
const dataTeamArray = Object.entries(dataTeam);
console.log(dataTeamArray);
```

## **Object.values**
Devuelve los valores de un objeto a un arreglo
```js
const dataTeam = {
  frontend: 'Manuel',
  backend: 'Jose',
  desig: 'Jose Manuel',
}
const dataTeamArrayValue = Object.values(dataTeam);
console.log(dataTeamArrayValue);
```

## **padStrat y padEnd**

- padStrat = Anteponer o agregar una cadena a un string.
- padEnd = Agregar una cadena al final de un string.

```js
const nombreCliente = 'Jose manuel';
console.log(nombreCliente.padStart(14,'Sr '));

const nombreCliente = 'Jose manuel';
console.log(nombreCliente.padEnd(15,', Hi'));
```

## **Trailing comas**
Colocar una coma al final decada elemento de mi objeto, evita cometer errores al no colocarla.
```js
const colombia = {
  poblacion : 50_000_000,
  idioma : 'español',
  religion : 'laica',
}
```

## **Async y await**
Funciones asincronicas, utilizadas para el manejo de peteciones a un servidor o ejecutar codigo asincronico.

```js
//Creamos nuestra promesa donde devolvera un mensaje pasados 3 segundos
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello Wolrd', 3000))
      : reject(new Error('Test Error'))
  })
};
//Esta seria nuestra funcion asincronica.
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
```
# **ECMAScript 9 -** *Junio 2018*
## **Operador de reposo**
Extrae las propiedades de un objeto que aun no se ha constuido.

```js
const datosUsuario = {
  name: 'Manuel',
  age: 29,
  country: 'CO',
};

let { name, ...all} = datosUsuario;

console.log(all);// Nos muestra los demas elementos del objeto
```
## **Operador propagacion**
Permite que un arreglo o cadena puesa ser expandido en lugares donde se espera ningun o muchos elementos.

```js
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

console.log(equipoEuropeos); //Retorna un objeto de objetos
```

## **.finally**
Nos indica cuando termino el llamado de una funcion o logica del codigo.
```js
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
```

## **Mejoras en Regex**
Permite agrupar bloques del regex y acceder a cada uno de ellos.

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-08-11');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
```

# **ECMAScript 10 -** *Junio 2019*
## **Aplanar arreglos**
Flat es un nuevo metodo de los arrays y permite devolver una submatriz aplanada.

```js
const numbers = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(numbers.flat(2)); //[ 1, 2, 3, 1, 2, 3, 1, 2, 3]
```

Flatmap permite mapear cada elemento del array, ejecuta una funcion y luego lo aplana.

```js
let array = [1, 2, 3, 4, 5, 6];
console.log(array.flatMap(value => [value, value * 2])); //[ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12]
```

## **trimStart y trimEnd**
- trimStart : Eliminar los espacios en blanco al inicio de un string.
- trimEnd : Elimina los espacios en blanco al final de un string.
```js
let hello = '        Hello World';
console.log(hello);
console.log(hello.trimStart());
```

## **Optional catch**
Es opcional pasar el parametro de error al valor de catch. 
```js 
try {

} catch (opcional) {
  error
}
```

## **entries**
Transforma un arreglo a un objeto.
```js
const data = [['name', 'Jose'], ['age', 29]];
console.log(Object.fromEntries(data));
```

## **Symbol**
Al objeto de tipo symbolo podemos ver la descripcion que contiene
```js
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
```
## **ES.NEXT, TC39**
Es.next es como se le denomina a la proxima version que sera añadida a javascript. 

TC39 es un grupo de desarrolladores e implementadores y tiene a cargo revisar todas las propuestas. En caso de ser aceptadas se llevan a ser implementadas. 

Estas propuestas tienen una serie de estados antes de ser puestas en marcha:

- Idea
- Proposal
- Draft
- Candidate
- Ready

