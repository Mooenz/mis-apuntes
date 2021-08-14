//CallBack
//Ejemplo 1
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));

//Ejemplo 2
function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);

//Promise
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("correcto");
    } else {
      reject("upss");
    }
  });
};
//llamado individual
somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 3000);
    } else {
      const error = new Error("Whooops");
      reject(error);
    }
  });
};
//llamado individual
somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((reject) => console.error(reject));
//llamado en grupo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((reject) => {
    console.error(err);
  });

// Async await
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Sometime Async");
        }, 3000)
      : reject(new Error("Text Error"));
  });
};

const doSomething = async () => {
  const somethig = await doSomethingAsync();
  console.log(somethig);
};

console.log("Bedore");
doSomething();
console.log("After");

const anotherFunction = async () => {
  try {
    const somethig = await doSomethingAsync();
    console.log(somethig);
  } catch (error) {
    console.error(error);
  }
};

console.log("Bedore 1");
anotherFunction();
console.log("After 2");
