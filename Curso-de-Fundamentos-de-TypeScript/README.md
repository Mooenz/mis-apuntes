# **Curso de Fundamentos de TypeScript**

Es un super conjunto tipado de javascript, que copila a javascript. Es usado en cualquier navegador o host y es de codigo abierto.

- lenguaje de programacion tipado: Provee un conjunto de tipos para utilizar junto con las variables los cuales se puede personalizar o extender.
- Lenguaje de alto nivel: el codigo que se escribe es legible para humanos y tiene un alto nivel de abstraccion del codigo maquina.
- El compilador genera codigo JavaScript.
- Es de codigo abierto, osea, se puede encontrar el codigo fuente en el repositorio de github y estar al tanto de las actualizaciones.
- Desarrollo en cualquier O.S: no importa el sistema operativo, se lograra ejecutar.
- El codigo se puede ejecutar en cualquier navegador o plataforma.

Codigo JavaScript es valido para TypeScript. Tambien podemos entenderlos como un super conjunto de JavaScript ya que soporta todo lo especificado en ES5 y ES6.

Typescript es usado multiples compañías.

## **Por que usar TypeScript**

Con typescript logramos:

- Podemos usar el paradigma de programacion orientada a objetos
- Podemos potenciar nuestro JavaScript
- Tenemos mas productividad ya que se integran con una variedad tecnologias que permite mayor productividad.
- Tiene poderosos sistemas de tipos,
- TypeScript se beneficias de las nuevas especificaciones y caracteristicas de JavaScript.
- Es un proyecto suprema mente activo ya que es open source.
- Tiene actualizaciones periodicas.

Según un estudio usando TypeScript en nuestro proyectos podemos tener hasta un 15% menos de bugs.

## **Compilador TypeScript**

Instalamos el compilador `npm install -g typescript` y al terminar ejecutamos `tsc -v` para saber su version y si esta bien instalado.

### **Como usamos el compilador**

Los archivos .ts son los archivos escritos es TypeScript y se ejecutan con el compilador tsc y lo ejecutamos de la siguiente manera `tsc nombreArchivo.ts` el cual dara como resultado un archivo compilado de JavaScript.

En este punto podemos ejecutar este archivo resultante con node de la siguiente manera `node nombreArchivo.js`.

Para simplificar este proceso podemos agregar un observador de cambios en cierto archivo TypeScript, el comando `tsc --watch nombreArchivo.ts` activa este observador y compilando cada vez que se haga un cambio en el archivo .ts.

## **El archivo de configuración de TypeScript**

El tsconfig.json permite especificar la raiz de nuestro archivos ts para nuestro proyecto, permite configurar las diferentes opciones que seran enviada al compilador de ts. Inicializamos el proyecto con
`tsc --init` no enviara un mensaje que confirmara la creacion del archivo de configuracion.

El archivo de configuracion de tsc consta de un objeto json con un atributo llamado compilerOptions.

Este objeto tiene atributos de configuracion como en el caso de target que nos permite elegir la version de ecmascript.

El atributo module nos habilita la opcion de usar modulos en nuestro proyecto, y puede recibir como valores none, amd, system y comonjs.

Atributo strict habilita mediante un valor booleano si se debe usar tipos estrictos.

Atributo removeComments indica mediante un valor booleano si se debe eliminar o no los comentarios realizados en nuestro codigo.

Otro objeto de configuraciones es include, contiene un lista de declaraciones de tipo que albergara las rutas de todos los archivos que seran parte de los archivos procesados por le compilador.

objeto de configuraciones exclude es equivalente a include pero podemos excluir directorios para no ser tomados en cuenta en el proceso de compilacion.

Extends es otro objeto de configuracion donde permite la herencia de configuracion de otro archivo de configuracion.

compileOnSave, recibe un valor booleano que habilita la compilacion automatica al guardar los cambios de nuestro archivo ts.

de que manera podemos aprovechar la existencia de un archivo de configuracion de ts:

`tsc` Le indicamos a ts que busque el archivo de configuracion y lo use.

`tsc --project archivots` Especificamos que queremos hacer uso de este archivo de configuracion.

`tsc file.ts` Omitimos el uso del archivo de configuracion.

## **Tipado en TypeScript**

### **Explicito**

Variables de manera explicita osea que debemos tener en cuenta el tipo de dato cuando se declara.

### **Inferido**

TypeScript puede deducir o inferir el tipo de dato dependiendo del valor asignado a esta variable.

### **Usos del tipado**

Para el tipo de dato explicito debemos usar la notacion posfija: `nombre de la variable : tipo de dato`.

Para el caso de tipo inferido debemos tener en cuenta el nombre de la variable y el valor inicial, dependiendo de este valor typescript tomara la decision que tipo de dato es: `nombre de la variable = valor`

### **Tipos basicos de TypeScript**

Para que todo funcione trabajamos con tipos de datos mas simples de JavaScript como valor numericos, booleanos o strings, entre otros.

Con TypeScript tenemos tipos basicos que son primitivos como:

- Tuple
- Enum
- Any
- Void
- Never

## **Number, Boolean y String**

Tipo number podemos definir valores numericos o de punto flotante, pero a partir de EcmaScript 2015 podemos usar numeros hexadecimales, octal y valores binarios.

```ts
//Number
//Explicito
let phone: number;
phone = 1;
phone = 32054897451;
// phone = 'Hola'; // Da error ya que vscode esta optimizado para ts no permite asignar strings a variables de tipo number

//Inferido
let phoneNumber = 32054897451;
// phoneNumber = true; //Da un erro por no ser el tipo de dato correcto

let hex: number = 0xf00d; //Hexadecimal, inicia con 0x - luego el numero hexadecimal, numero entre 0-9 y letras a-f
let binary: number = 0b1010; //binario, inicia con 0b - luego el numero binario, acepta numero de entre 0-1
let octal: number = 0o1237; // octal, inicial con 0o - luego el numero octal, acepta numero entre 1-7.
```

Tipo boolean es tipo de dato mas simple ya que solo tiene dos valores que indican que algo es verdadero o falso con las palabras reservadas `true` o `false`

```ts
//Boolean
//Explicito
let isPro: boolean = true;
// isPro = 1; //Da error tipo de dato

// inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 12; //Da error tipo de dato
```

Tipo String son datos textuales o cadenas, podemos usar como en js comillas simples '', dobles "" y invertidas o template literal``.

```ts
//String
//Explicito
let username: string = 'Jose Manuel';
username = 'manu';
// username = true; //Erro tipo de dato

//inferido
let nombre = 'Jose Manuel';
nombre = 'Jose Manuel Montaño Saenz';

//Template
let userInfo: string;
userInfo = `
  user info:
  userName: ${username}
  firstName: ${username} montaño
  phone: ${phone}
  isPro: ${isPro}

`;

console.log('userInfo:' + userInfo);
```

## **Any**

Es un tipo de dato que se usa cuando se pretende capturar datos dinamicos o esperamos que una variable vaya a cambiar de tipo en algun momento en futuro.

```ts
// Explicito
let idUser: any;
idUser = 1; //Number
idUser = '1'; //String
console.log('idUser:', idUser);

// Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId:', otherId);
```

No es recomendable usar el tipo de dato any ya que podemos tener un error en tiempo de ejecucion. Solo deberiamos de usarlo para el llamado de APIs externas o librerias de terceros. No se debe usar como un tipo de datos predeterminado.

## **Void y never**

_Void_ es un tipo de dato opuesto a any, representa la ausencia de tipo y es usada comunmente como tipo de retorno en funciones.

```ts
//Explicito
function showInfo(user: any): any {
  console.log('user info:', user.id, user.userName, user.firstName);

  // return 'hola';
}

showInfo({ id: 1, userName: 'Mooenz', firstName: 'Manu' });

//Inferido
function showFormattedInfo(user: any) {
  //TypeScript intuye que el retorno de esta funcion es de tipo void
  console.log(
    'User Info',
    `
    id: ${user.id}
    userName: ${user.userName}
    firstName: ${user.firstName}
  `
  );
}

showFormattedInfo({ id: 1, userName: 'Mooenz', firstName: 'Manu' });

//tipo void, como tipo de dato en un variable
let unusable: void;
unusable = null;
unusable = undefined;
//Hacer estas asignaciones son posibles siempre y cuando el archivo de configuracion tenga explicito que uso estricto de ts este deshabilitado.
```

Para void tenemos subtipos como null o undefined.

_Never_ es un tipo de dato que representa un valor que nunca ocurre o nunca se da en nuestro codigo.

Se utiliza cuando una funcion lanza una excepcion o cuando la funcion tiene un ciclo infinito y no permite que se finalice.

```ts
function handleError(code: number, message: string): never {
  // Process your code here
  // Generate a message

  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;

  while (true) {
    sum++;
  }
}

sumNumbers(5);
```

En conclusión, void es un tipo de dato usado para tipar el retorno de las funciones ya que Predeterminadamente es any indicando que cualquier cosa se retornara. Never se usa con el mismo fin pero con la diferencia que no esperamos ningun resultado de dicha funcion.

## **null y undefined**

Los valores null y undefined son usados como tipos en TypeScript, osea que podemos declara variables con estos dos tipos.

```ts
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
```

Null y Undefined tambien se puede considerar subtipo de cualquier tipo basico de dato, osea, que se puede reasignar null y undefined a variables de tipo string o number.

```ts
let albumName: string;
// albumName = null; // Error de tipo
// albumName = undefined; // Error de tipo
```

_Opcion --strictNullChecks_ permite asignar null y undefined a variables de tipo any o sus tipos respectivos. Ademas nos ayuda a evitar errores comunes en programacion en el amito de JavaScript.

este flag se usa `tsc src/type-null-undefined.ts --stricNullChecks` y hace un reporte de todas las lineas donde se produce este error de tipo de dato.

Tambien podemos hacerlo automaticamente en nuestro archivo de configuracion de tsconfig.json, `"strictNullChecks": true,`.

## **Object**

Este tipo de dato se considera siempre y cuando no tengamos un tipo primitivo.

```ts
let user: object;
user = {};

user = {
  id: 1,
  username: 'Mooenz',
  firstName: 'Jose Manuel',
  isPro: true,
};

console.log({ user }); // Muestra el objeto

console.log(user.username); // Da error, no se puede acceder a las propiedades de este objeto.
```

### **Object Vs object**

Los objetos de javaScript(Object) son instancias de `Object.prototype` y hereda todas las propiedades de el, permitiendo el uso de tipos de datos primitivos, acceder a sus propiedades y de mas propiedades, esto quiere decir que el tipo de dato object no es una instancia de `Object.prototype`.

```ts
//Object vs object (clase Js vs tipo TS)
const myObj = {
  //TypeScript considera este objeto como una instancia de Object.prototype
  id: 1,
  username: 'Mooenz',
  firstName: 'Jose Manuel',
  isPro: true,
};

const isInstance = myObj instanceof Object; // Aqui comprobamos que si es una instancia de Object
console.log(isInstance); // Da true

console.log(myObj.username); // Muestra usuario
```

## **Array**

Para los arreglos al igual que en JavaScript, TypeScript permite definir una variable para almacenar o gestionar un conjunto de datos, podemos utilizar dos notaciones, con corchetes`[]` o uso de los genericos via la clase de array `Array<TIPO>`.

```ts
// Explicito
let users: string[];

users = ['Colombia', 'Mexico', 'Argentina', 'España'];
// users = [1, true, 'test']; // Error tipo de dato

//Inferidos
let otherUser = ['Colombia', 'Mexico', 'Argentina', 'España'];
// otherUser = [1, true, 'test'];// Error tipo de dato

//Array<TIPO>
let pictureTitles: Array<string>;

pictureTitles = ['Atardecer', 'Vacation Time', 'Landscape'];

//Accediendo a los valores de un Array
console.log('first user:', users[0]);
console.log('first title:', pictureTitles[0]);

// Propiedades en Array
// Tamaño del arreglo
console.log('El tamaño del arreglo es:', users.length);
//Agregar nuevo dato
users.push('Peru');
users.sort();
console.log('users:', users);
```

## **Tupla**

Permite representar o expresar un conjunto de valores utilizando la sintaxis de los arreglos, las unicas restriccion es que los tipos de datos sean diferente para cada una de las posiciones, y el numero de elementos sea fijos.

```ts
export {};

// [1, 'user']
let user: [number, string];
user = [1, 'Mooenz'];

console.log({ user });
console.log('id:', user[0]);
console.log('name:', user[1]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Mooenz', true];
console.log({ userInfo });

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'Mooenz']);
array.push([2, 'Jmanu21']);
array.push([3, 'Jmanuel21']);
console.log({ array });

// Uso de funciones Array
// Jmanuel21 => Jmanuel2108

array[2][1] = array[2][1].concat('08');
console.log({ array });
```

## **Enum**

Los enumerados permite definir un conjunto de valores con nombre que casi siempre son valores numericos.

Permiten asignar un nombre amigable para valor numericos que se adaptan al contexto de nuestra aplicacion.

```ts
// Orientacion para fotografias
// const landscape = 0;
// const potrait = 1;
// const squate = 2;
// const panorama = 3;

// El ejemplo anterior es igual a lo que escribiremos a continuacion:
enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log({ landscape }); // landscape: 0
console.log('landscape', PhotoOrientation[landscape]); // landscape Landscape

enum PictureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}
console.log('portrait', PictureOrientation.Portrait); // 11

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  UnitedState = 'usa',
  España = 'esp',
}

const country: Country = Country.Colombia;
console.log({ country }); // col
```

El uso de numerados cuando consideramos valores limitados, podemos usarlo en colores, dias de la semana o meses de años.
