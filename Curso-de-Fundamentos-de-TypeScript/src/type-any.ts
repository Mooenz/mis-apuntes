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

let surprise = 'Hello typeScript';
const res = surprise.substring(6);
console.log('res:', res);
