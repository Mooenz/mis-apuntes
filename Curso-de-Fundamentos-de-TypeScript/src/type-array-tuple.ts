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


