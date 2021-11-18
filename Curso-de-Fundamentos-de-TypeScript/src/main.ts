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

//Boolean
//Explicito
let isPro: boolean = true;
// isPro = 1; //Da error tipo de dato

// inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 12; //Da error tipo de dato

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
