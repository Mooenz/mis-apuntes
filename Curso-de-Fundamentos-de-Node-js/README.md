# **Node: orígenes y filosofía**
Es un entorno de ejecución de JavaScript fuera del navegador, nació en 2009 y esta orientado principalmente a servidores.

Se puede ejecutar en:
- servidores
- construir herramientas
- laptops 
- cualquier consola
- loit

## **Bases de JavaScript**
- Es concurrente, aunque sea mono hilo todas sus entradas y salidas son asíncronas. 

- Tiene un único proceso en cada núcleo del procesador que va programar todas las peticiones y las enviara de forma asíncrona para no quedarse bloqueante.

## **Motor v8**
Es el entorno de ejecución de JS creado por Google y libre desde 2008, esta escrito en c++ haciéndolo mas rápido.

Convierte js en código maquina o bitecode en lugar de interpretarlo en tiempo real. 

## **Módulos**
Todos esta basado en módulos. Muchos módulos vienen por defecto en el paquete de Node.

Además puedes crear tus propios módulos.

## **Orientado a eventos**
Lo clave de node, esta orientado en eventos. Existe un bucle de eventos que se ejecuta constantemente y eventualmente se dispara un evento que podemos escuchar, esto nos permite programar de forma reactiva.

# **EventLoop: asíncrona por diseño**
## **Event Loop**
Es un proceso con un bucle que esta constantemente ejecutándose con el fin de gestionar de forma asíncrona todos los eventos de la aplicación. 

Estos eventos se ejecutaran aparte del hilo principal y en caso de ejecutarse, es no será bloqueado.

Es por esto que se denomina a node como no bloqueante y altamente concurrente.

## **Event Queue**
Esta cola de eventos es el encargado de recibir request, funciones o eventos específicos, que serán enviados de uno a uno al event loop para ser procesados. 

Si el proceso es demorado, será enviado al thread pool y ahí será gestionado de forma asíncrona.

A diferencias de otros lenguajes de programación backend que tienden a ejecutar el código de forma lineal o síncrono, Node tiene la característica de ejecutar múltiples proceso en paralelo o asíncrono. 

## **Thread pool**
Cuando el eventt loop no procesa un evento que llevara mucho tiempo, se enviara al thread pool el cual abrirá un nuevo proceso en nuestro procesador para llevar acabo esta tarea. Luego terminar de procesarlo es enviado nuevamente al evet loop que determinara si lo envía nuevamente al event queue o no.

# **Monohilo: implicaciones en diseño y seguridad**
Node al ejecutar o procesar código en un solo hilo es una ventaja y una fuente de problemas.

## *Buenas practicas*
cuando estamos en la consola y ejecutamos un archivos js con node como por ejemplo `node ejemplo.js` primero se abrirá un nuevo proceso y es un proceso de node que va interpretar el archivo, lo convierte a código maquina, prepara todo lo necesario para ejecutar el código, luego se va ejecutar, muestra en pantalla el resultado y por ultimo el proceso se cerrara ocasionando que node termine. 

Existe la opción de ejecutar algo que este siempre activo y lo podremos lograr de la siguiente manera: 

```js
setInterval(() => {
  console.log("Estoy activo"), 1000;
});

// 0
// 1
// 2
// 3
// 4...
```

En el código anterior le estamos diciendo a node que cada un segundo muestre en consola el texto 'Estoy activo', esto se ejecutara infinitamente. Pero si llegara a fallará algo, inmediatamente mostrara el error y node va para todos los procesos.

```js
let contadorDeNumeros = 0;

setInterval(() => {
  console.log(contadorDeNumeros);
  
  if(contadorDeNumeros === 5) {
    console.log(contadorDeNumeros + numeroNoexistente);
  }
  contadorDeNumeros+=1;
}, 1000);

console.log(contadorDeNumeros);

// 0
// 1
// 2
// 3
// 4
// 5
// /home/mooenz/mis-apuntes/Curso-de-Fundamentos-de-Node-js/tempCodeRunnerFile.js:7
//     console.log(contadorDeNumeros + numeroNoexistente);
//                                     ^

// ReferenceError: numeroNoexistente is not defined
//     at Timeout._onTimeout (/home/mooenz/mis-apuntes/Curso-de-Fundamentos-de-Node-js/tempCodeRunnerFile.js:7:37)
//     at listOnTimeout (internal/timers.js:555:17)
//     at processTimers (internal/timers.js:498:7)
```

Es importante estar pendiente todo lo que sucede en nuestras aplicación o programa y si algo tiene una probabilidad de fallar, fallará. 

También debemos tener presente que se pueden mitigar estos errores o controlar pues node al detectar un error lo que va a hacer es para todos los hilos que se están ejecutando dando por finalizado nuestro programa y no sabremos en que estado quedo cada hilo de ejecución, por eso será muy clave tener un plan cuando suceda por que estaríamos evitando la finalización de todo el programa.

Conclusión, cuidar nuestro programa e hilo principal, todo lo que se puede ejecutar en asíncrono, ejecútemelo. Frase del día 'si algo tiene una probabilidad de fallar, fallará'.

# **Variables de entorno**
Son variables que están en el scope global y pueden ser accesibles desde cualquier parte de nuestro código.

Declaramos estas variables con el fin de no exponer dentro de nuestro código datos sensibles como contraseñas, urls, tokens de APIS, correos, IPS y otros mas.

Para ser usadas, podemos realizarlo de la siguiente manera:

```js
let nombre = process.env.NOMBRE || 'sin nombre'; //declaramos nuestras variables de entorno en mayuculas ya que son datos constantes. Ademas contiene valores por defecto en caso de no encontrar ninguna variable con ese nombre.
let web = process.env.MI_WEB || 'no tengo web';

console.log(`Hola mi nombre es ${nombre} y mi web es ${MI_WEB }`);

// conrremos el codigo de la siquiente manera: NOMBRE=Manuel WEB=mooenz.com node ejemplos.js 
// nos da como resultado:
// Hola mi nombre es Manuel y mi web es mooenz.com
```

# **Nodemon y PM2**
***Nodemon*** es una herramienta de gestión dedicada a node que sirve como observador donde constantemente reporta los cambios realizados en nuestro código. 

Instalamos en linux nuestro nodemon según el siguiente comando `npm install -g nodemon` y en caso de necesitar permisos de administrador simplemente anteponemos la palabra 'sudo', quedaría de esta forma `sudo npm install -g nodemon`.

Para utilizar nodemon solo debemos correr nuestro archivo según el comando `nodemon ejemplo.js` y listo, nodemon se encargara de escuchar todos los cambios de nuestro archivo y ejecutarlo.

***PM2*** es otra herramienta muy parecida a nodemon pero es mucho mas avanzada y compleja. Contiene mas features y esta enfocada a producción. 

Para instalarlo podemos usar el comando `npm install -g pm2` y para ser usado ejecutamos `pm2 start ejemplo.js`. 

podremos utilizar un features como monitor, status de la app, los logs que pm2 crea al monitorizar `pm2 logs`, hacer un 'stop' de el/los hilos en ejecución según la id que nos otorga el monitor de la app `pm2 stop 0`.

# **Callbacks**
Los callbacks son funciones que reciben otras funciones como parámetro.

```js
function hola(nombre, callback) {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`);
    callback(nombre);
  }, 2000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
}

const volvi = (nombre, deNuevoCallback) => {
  setTimeout(() => {
    console.log(`Regrese ${nombre}`);
    deNuevoCallback(nombre);
  }, 1000)
}

console.log("Iniciando proceso...");

hola("Manuel", function (nombre) {
  adios(nombre, function () {
    volvi(nombre, function() {
      console.log("Terminando proceso...");
    })
  });
});
```

Para nuestro caso tenemos 3 funciones que en sus parámetros reciben una variable nombre y una funciones. Como apreciamos existe un `console.log` antes de llamar a nuestras funciones.

Cuando llamamos a la función 'hola', pasamos como argumento nuestro nombre y una función anónimas y que recibe como parámetro de nuevo nuestro nombre, esto se hace con el fin de reutilizar ese dato con las siguientes funciones. 

Dentro de la función anónima llamamos la siguiente función llamada adiós, que nuevamente se envía como argumentos el nombre y otra función anónima donde se repetirá el mismo patrón. a esto le llamamos un anidamientos de callbacks o si son demasiados un *Callback Hell*.

# **Callback Hell: refactorizar o sufrir**
Un ***callback Hell*** es un anidamiento de callbacks que genera lo que comunmente llamamos *codigo espagueti*. 

```js
despertar("Manuel", function (nombre) {
  bañar(nombre, function () {
    bañar(nombre, function() {
      vestir(nombre, function() {
        desayunar(nombre, function() {
          cepillar(nombre, function() {
            leer(nombre, function() {
              almorzar(nombre, function() {
                ejercitarse(nombre, function() {
                  llamar(nombre, function() {
                    merendar(nombre, function() {
                      volvi(nombre, function() {
                        console.log("Terminando proceso...");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
```

Si nos encontramos con un callback debemos refactorizarlo y esto implica cambiar su sintasis con promesas.

```js

```