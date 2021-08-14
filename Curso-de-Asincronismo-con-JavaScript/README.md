# **Introducción al asincronismo**
El asincronismo en JavaScript es asincrono y no bloqueante con un manejador de eventos llamado evenloop inplementado en un unico hilo pra sus interfaces de entrada y salida.

## **Asincronismo**
Es la accion que no ocurrre al mismo tiempo.

## **Memory heap**
Es el pacio en memoria compartido para toda la aplicacion.

## **Pila de ejecucion**
Es donde las funcinoes seran puestas en ejecucion.

## **Cola de tareas**
Son ejecuciones que el motor de JavaScript no hace y son entregadas a las Web APIs navegador.

# **CallBacks**
Es una funcion que recibe como parametro una segunda funcion y al momento de hacer una peticion o algun llamado asincrono, esta se ejecuta despues de este llamado.

Ejemplos :

```js
function sum(num1, num2) {
  return num1 +num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(6, 2, sum));
```

```js
function date(callback) {
  console.log(new Date);
  setTimeout(() => {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
```
# **Promise**
Utiliza el objeto promise para ser ejecutada, y su concepto es como su nombre lo dice promete que algo va suceder ahora, en el futuro o nunca.

Ejemplo :

```js
//promesa uno
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('correcto');
    } else {
      reject('upss')
    }
  });
};
//llamado individual
somethingWillHappen()
.then( response => console.log(response))
.catch( err => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True');
      }, 3000)
    } else {
      const error = new Error('Whooops');
      reject(error);
    }
  });
};
//llamado individual
somethingWillHappen2()
.then(response => console.log(response))
.catch(reject => console.error(reject));
//llamado en grupo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
  console.log('Array of results', response);
})
.catch(reject => {
  console.error(err)
})
```
# **Async Await**
Es un nuevo enfoque que garantiza que nosotros implementaremos estas palabras reservadas y son preferibles que las promesas por que hace que nuestro codigo se comporte como sincrono.

Ejemplo :

```js
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
}

console.log("Bedore 1");
anotherFunction();
console.log("After 2");
```

# **Callbacks Vs Promesas Vs Async/Await**
## **Callbacks**
### ***Ventajas***
- Es simple no tiene ninguna complegidad y es facil de implementar. Callback son universales y corren en cualquier navegador.
### ***Desventajas***
- La composicion llega hacer un poco tosca, la estructura de anidamiento lo puede volver complejo y como resultado tenemos el ***Callback Hell***.
- el Callback Hell es aterrador para nuestros compañeros de trabajo.

## **Promise**
### ***Ventajas***
- Es la solucion a los callback hells, vuelve el codigo mas intuitivo de leer.
- Es poderoso porque nos permite tener una gran capacidad de trabajar con asincronia.
### ***Desventajas***
- No maneja las execciones, solo tenemos un catch que captura los errores.
- Propensos a errores si no retornamos el siguiente llamado.
- Requiere un polyfill para funcionar en todos los navegadores, osea que se debe transpilar con babel.

## **Async Await**
### ***Ventajas***
- Podemos unsar el Try/catch.
- Son mas faciles de leer e implementar.
### ***Desventajas***
- Requiere tambien un polyfill como babel.
- Tenemos que espera por cada uno de los llamados, si queremos agregar una nueva peticion, tenemos que esperar una respuesta de la anterior peticion.