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
// unusable = null;
// unusable = undefined;

//Never
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
