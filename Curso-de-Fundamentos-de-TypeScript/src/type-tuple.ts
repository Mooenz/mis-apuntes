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
