let user: object;
user = {};

user = {
  id: 1,
  username: 'Mooenz',
  firstName: 'Jose Manuel',
  isPro: true,
};

console.log({ user });

// console.log(user.username); // Da un error

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
