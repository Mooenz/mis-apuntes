// Scope global
var hello = "Hello";
let world = 'Helo world';
const helloWorld = 'Hello world';
console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();

// Malas practicas, Scope global
const helloWorld = () => {
  globalVar = 'im global';
}
helloWorld();
console.log(globalVar);


const anotherFunction = () => {
  var localVar = globalVar = 'Hi';
}
anotherFunction();
console.log(globalVar);


// Scope local

const helloWorld = () => {
  const hello = "Hello";
  console.log(hello);
}
helloWorld();
console.log(hello);


var scope = 'I am global';
const functionScope = () =>{
  var scope = "i am local"
  const func = () => {
    return scope
  }
  console.log(scope);
}
functionScope();
console.log(scope);

// Scope Function

const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};

fruits();

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // let y = 2;

  console.log(x);
  console.log(y);
}

anotherFunction();

//bloqck scope

const fruits = () => {
  if(true) {
    var fruits1 = 'apple'
    let fruits2 = 'banana'//Es mejor con let o const y evitar la reasignacion
    const fruits3 = 'kiwi'

    console.log(fruits2);
    console.log(fruits3);
  }

  console.log(fruits1);
};

fruits();

// Closure

const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneybox = moneyBox();

myMoneybox(4);
myMoneybox(6);
myMoneybox(10);

// Variables privadas con closures

const person = () => {
  var  saveName = 'Name';

  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

let newPerson = person(); // nuevo ambito
console.log(newPerson.getName());// name = 'name' por que estaba defoult
newPerson.setName('manu');// Esta nueva asignacion solo esta en newPerson()
console.log(newPerson.getName());//name = 'manu' 

// Hoisting

console.log(name);//undefined
var name = 'manu' 


miFuncion('Hola'); // hola
const miFuncion = (saludo) => {
 return console.log(saludo);
}