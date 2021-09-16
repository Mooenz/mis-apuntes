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
//funciones
...despertar
...bañar
...vestir
...

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

Podemos refactorizar este callback hell con funciones recursivas, pero aun asi su lectura seria compleja y dificil.

# **Promesas**
Si nos encontramos con un callback hell debemos refactorizarlo y esto implica cambiar su sintaxis, en este caso con promesas resolveremos el problema.

```js
function despertar(nombre) {
  return new Promise((resolve, reject) => {
    if(true) {
          setTimeout(() => {
      console.log(`${nombre} desperto`);
      resolve(nombre);
    }, 1000);
    } else {
      reject(new Error(`${nombre} no desperto`))
    }
  });
};

const vivio = (nombre) => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        console.log('Hicimos toda clase de cosas');
        resolve(nombre)
      }, 1000)      
    } else {
      reject( new Error(`${nombre} no hizo nada =(`))
    }
  })
};

function dormir(nombre) {
  return new Promise((resolve, reject) => {
    if(true) {
      console.log(`${nombre} se ha dormido`);
      resolve(nombre);
    } else {
      reject(new Error(`${nombre} no se ha dormido`));
    }
  })
};

despertar("Manuel")
  .then(vivio)
  .then(vivio)
  .then(dormir)
  .then(() => {
  console.log("Termino");
  })
  .catch(error => {
    console.error(`Algo fallo ${error}`)
  });
```

Lo que hicimos en el código anterior es crear una función que retorna una promesa la cual recibe dos parametro que son `resolve` y `reject`, `resolve` es igual a promesa resuelta y `reject` la promesa falló.

luego hacemos el llamado de la función inicial que es `despertar("Manuel")` y dentro ponemos el argumento. A continuación con los `.then()` llamamos las otras promesas necesarias y por ultimo capturamos los posibles errores con el fin de no propagarlo.

# **Async/await**
Async Await es una sintaxis nueva que permite definir una funcion de forma explicita como funcion asíncrona y esperar a que esa funcion termine para ejecutar la siguiente. A nivel tecnico no va bloquear el hilo principal.

Es una síntaxis mucho más facíl de hacer y leer a la cual se le denomina 'Azucar Sintactico ' 

```js
function despertar(nombre) {
  return new Promise((resolve, reject) => {
    if(true) {
          setTimeout(() => {
      console.log(`${nombre} desperto`);
      resolve(nombre);
    }, 2000);
    } else {
      reject(new Error(`${nombre} no desperto`))
    }
  });
};

const vivio = (nombre) => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        console.log('Hicimos toda clase de cosas');
        resolve(nombre)
      }, 2000)      
    } else {
      reject( new Error(`${nombre} no hizo nada =(`))
    }
  })
};

function dormir(nombre) {
  return new Promise((resolve, reject) => {
    if(true) {
      console.log(`${nombre} se ha dormido`);
      resolve(nombre);
    } else {
      reject(new Error(`${nombre} no se ha dormido`));
    }
  })
};

async function lunes() {
  await despertar('Manuel');
  await vivio('Manuel');
  await dormir('Manuel');

  console.log('Finaliza el proceso');
}

console.log('Inicia el proceso');
lunes();
```

# **Globales**
Son módulos predeterminados de node y los podemos utilizarlas sin ningún problema, ejemplo: 

```js
//Mostrar algo en consola
console.log();

//Mostrar un mensaje en forma de error
console.error();

//Ejecuta un código despues de un intervalo de tiempo
setTimeout(()=>{});

//Ejecuta un código cada intervalo de tiempo
setInterval(()=>{});

//Da prioridad de ejecución
setImmediate(()=>{});
```

# **File system**
Es un modulo que permite acceder a archivos de nuestro sistema y podemos leerlos, escribirlos,modificarlos, cambiarles el nombre o eliminarlos.

Primero debemos traer nuestro modulo
```js
const fs = require('fs');
```

Escritura de un archivo
```js
function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(err) {
    if(err) {
      console.error('Hubo un problema de escritura')
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}
escribir(`${__dirname}/ejemplos.txt`, 'Soy una linea nueva', console.log);
```

Lectura de un archivo
```js
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  })
}
leer(`${__dirname}/ejemplos.txt`, console.log);
```

Eliminar de un archivo
```js
function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}
borrar(`${__dirname}/ejemplos.txt`, console.log);
```
Logramos mejorar nuestro codigo con promerar:

```js
const fs = require('fs').promises;

async function leer(ruta) {
  try {
    const data = await fs.readFile(ruta);
    console.log(`Ready: ${data.toString()}`);
  } catch (error) {
    console.error(error);
  }
}

async function escribir(ruta, contenido) {
  try {
    fs.writeFile(ruta, contenido);
    console.log('Se escribio correctamente');
  } catch (error) {
    console.error(error);
  }
}

async function borrar(ruta) {
  try {
    fs.unlink(ruta);
    console.log('Borrado');
  } catch (error) {
    console.error(error);
  }
}

escribir(`${__dirname}/ejemplos.txt`, 'Jose Manuel montaño saenz');
leer(`${__dirname}/ejemplos.txt`);
borrar(`${__dirname}/ejemplos.txt`, console.log);
```

Cabe aclarar que el modulo de lectura de archivos tiene mas metodos a utilizar.

# **Console**
La `consola` contiene diferentes funciones para el despliegue de mensaje en la consola:


`console.log('') y console.info(''):` Son iguales para node, desplegaran información.
```js
console.log('Uno');
console.info('Dos');

Uno
Dos
``` 

`console.error(''):`En algunas consolas mostrara un mensaje en otro color.
```js
console.error('Error');

Error
``` 

`console.table(''):` Nos mostrara información en estilo tabla.
```js
equiposFutbol = {
  españa: {
    realmadrid: 'RM',
    Barselona: 'BSC',
    atleticoMadrid: 'ATM',
  }
}
console.table(equiposFutbol);

┌─────────┬────────────┬───────────┬────────────────┬──────────────────┬────────┐
│ (index) │ realMadrid │ Barcelona │ atleticoMadrid │ parisSaintGerman │ monaco │
├─────────┼────────────┼───────────┼────────────────┼──────────────────┼────────┤
│ españa  │    'RM'    │   'BSC'   │     'ATM'      │                  │        │
│ francia │            │           │                │      'PSG'       │ 'MON'  │
└─────────┴────────────┴───────────┴────────────────┴──────────────────┴────────┘
```

`console.group(''): y console.groupEnd():` Sirve para agrupar logs de una misma indole.
```js
console.group('Equipos de España');
console.log('Real Madrid');
console.log('Barcelona');
console.log('Atlético de Madrid');
console.group('Equipos de Francia');
console.log('Paris Saint German');
console.log('Mónaco');
console.groupEnd();
console.groupEnd();

Equipos de España
  Real Madrid
  Barcelona
  Atlético de Madrid
  Equipos de Francia
    Paris Saint German
    Mónaco
```

`console.count(''):` Es un contador de veces que pasa algo. `console.countReset(''):`

```js
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');

Veces: 1
Veces: 2
Veces: 3
Veces: 4
Veces: 1
```

# **Try/Catch**
Se usa para la ejecución de código y captura de errores de esa ejecución. Nos ayuda a tener un control de errores en nuestro código.

Debemos entender que node al detectar un error rompe totalmente la ejecución del hilo para evitar daños mayores, es por esto que con try/catch podemos capturarlo y desplegarlo en la consola o darle un manejo mas eficiente.

Código síncrono

```js
function seRompera() {
  return console.log(3 + x); 
}

function otraFuncion() {
  return seRompera();
}

try {
  otraFuncion();  
} catch (error) {
    console.error('Lo siento algo fallo');
    console.error(error.message);
}

console.log('Otra instrucción');
```

Para el código asíncrono debemos considerar que al entrar al event loop este cambia de hilo, pues enviado al event queue que lo envía al thread pool donde es procesado en un hilo independiente, es allí donde el error es detectado y enviado al event loop donde se corta toda la ejecución del programa. 

```js
function seRompeAsincrono() {
  setTimeout(()=> {
       console.log(3 + x)
  }, 1000)
}

try {
  seRompeAsincrono();  
} catch (error) {
    console.error('Lo siento algo fallo');
    console.error(error.message);
}

console.log('Otra instrucción');

//Fallara
```

el try/catch debe ir dentro del código asíncrono y cuando exista este cambio de hilo de ejecución, se pueda capturar el error presentado.

```js
function seRompeAsincrono() {
  setTimeout(()=> {
     try {
       console.log(3 + x)
     } catch (error) {
      console.error('Lo siento algo fallo');
      console.error(error.message);
     }
  }, 1000)
}

try {
  seRompeAsincrono();  
} catch (error) {
    console.error('Lo siento algo fallo');
    console.error(error.message);
}

console.log('Otra instrucción');
```

# **Procesos hijo**
Node puede correr procesos hijo simplemente es levantar procesos que ejecuten algo y terminen, esto lo logramos con un modulo llamado `chile_process`.

Requerimos el modulo: 

```js
const { exec } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
  if(err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
}) 
```

Con `exec` podemos ejecutar un proceso por debajo de node sin importar en que codigo este escrito.
Con `spaw`

```js
const { spaw } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
  if(err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
}) 
```

# **Módulos nativos en c++**
JavaScript permite hacer uso de módulos nativos de c++. Para lograr esto debemos instalar `sudo npm i -g node-gyp`, este modulo de npm nos permite compilar módulos nativos de c++ en node.

Luego debemos tener listo nuestro archivo de código fuente en c++ junto a otro archivo .gyp, que nos ayudara hacer la compilación a JavaScript.

En este archivo .gyp le indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir, todo esto lo dejamos como un json

```json
{
  "targets": [
    {   
      "target_name": "addon",
      "sources": [ "hola.cc" ]
    }
  ]
}
```
luego le decimos a node que configure este modulo, con le comando `node-gyp configure`, como resultado tendremos en un directorio nuevo donde se encontraran diferentes archivos de código nativo, para finalizar con `node-gyp build` creamos nuestro modulo y estará listo para ser usado.

# **Modulo HTTP**
Nos permite conectarnos con un servidor o crear uno.

```js
const http = require('http');

http.createServer(function(req, res) {
  console.log('nueva petición');
  console.log(req.url);

  switch (req.url) {
    case '/hola': 
      res.write('Hola, que tal');
      res.end();
      break;
    case '/':
      res.write('Hola manu, eres el mejor, me sorprende como estas aprendiendo');
      res.end();
      break;
    default:
      res.write('Buscas algo?, no encontramos nada para ti');
      res.end();
      break;
  }

  res.writeHead(201, {'content-Type': 'text/plain'});
  
  res.end();
}).listen(3000);

console.log('escuchando http en le puerto 3000');
```

# **Modulo OS**
Con este modulo podremos usar o acceder a todos los elementos de bajo nivel que nos provee el OS.

```js
const OS = require('os');

console.log(OS.arch()); // Saber la arquitectura que tiene la maquina
console.log(OS.platform()); // Que sistema operativo tiene
console.log(OS.cpus()); // Cuantas cpus cuenta la maquina
console.log(OS.constants); // Errores y señales del sistema
console.log(OS.freemem()); // Cuanto espacio de memoria libre tiene
console.log(OS.totalmem()); // Cuanta memoria tiene
console.log(OS.homedir()); // Directorio donde se encuentra el archivo
console.log(OS.tmpdir()); // Cual es la carpeta temporal
console.log(OS.hostname()); // Sabremos cual es nombre host de la maquina
console.log(OS.networkInterfaces()); // Nos muestra todas las interfaces de red disponibles
```

# **Modulo process**
Con este modulo podremos controlar los procesos que ejecutamos con node. Process es un modulo por defecto de node y no tenemos que requerirlo.

```js
// Se ejecuta antes que el proceso acabe
process.on('beforeExit', () => { //se ejecuta primero que el exit
  console.log('El proceso va a terminar');
});
// Se ejecuta cuando el proceso acaba
process.on('exit', () => {
  console.log('Manu, el proceso acabo');
});
```
La diferencia los dos es que `exit` y `beforeExit` es que en el `exit` ya se el proceso se ha desconectado del evenloop.

```js

// El setTimeout que esta dentro del process no se podrá ejecutar, en cambio el de afuera se ejecutara primero que el exit.
process.on('exit', () => {
  console.log('Manu, el proceso acabo');
    setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  },0);
});


setTimeout(() => {
  console.log('Esto si se va a ver');
},0);
```

Con process podemos capturar errores que no hemos tenido en cuenta o que no prevenimos.

```js
// Capturar excepciones que no se tuvieron en cuenta
process.on('uncaughtException', (error, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');  
  setTimeout(() => {
    console.log('Esto viene desde las excepciones'); //Lo podemos usar cuando capturamos el error y queremos realizar una acción en otro hilo
  },0);
});

funcionQueNoExiste();
console.log('Si el error no se recoge, esto no sale');
// Capturar promesas que se rechazaron y no se capturaron
// process.on('uncaughtRejection'); 
```

# **Gestión de paquetes: NPM y package.json**
## **NPM**
NPM es un gestor de paquetes que son creados por terceros, utilizados por cualquier persona. Estos paquetes pueden llegar a ser tan simples como la suma de dos numeros o  tan complejos como react.js framework de frontend. 

Al utilizar un paquete de npm debemos tener presente que algunos paquetes dependen de otro paquetes y esto puede llegar a ser riesgoso si el paquete que estamos utilizando no estan actualizados.

## **package.json**
Es un archivo que se crea con el fin de tener imformacion valiosa de nuestro proyecto, en el podemos visualizar como el nombre del proyeecto, el autor, que version esta, que palabras clave contiene o lo referencia, si tiene un repositorio en github, y lo mas importante que dependencia esta usando.

# **Construyendo módulos: Require e Import**
Cuando tengamos un proyecto robusto es posible que tengamos que trabajar con módulos creados por nosotros mismos.

Cuando hablamos de construir módulos es de modularizar nuestro código mediante el siguiente ejemplo:

Tenemos un archivo que al ser llamado puede saludarnos según la hora del día.
```js
// El arachivo se llama 'modulo-requerido.js'
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
  
  function despedida() {
    setTimeout(() => {
      console.log(`Chao ${nombre}`)
    }, 1000);
  }
  return despedida();
}

module.exports = {
  saludar,
  dia: 'Buenos Días',
  tarde: 'Buenas Tardes',
  noche: 'Buenas Noches',
};
```

Podemos requerir este archivo de la siguiente manera:
```js
//traer modulo
const modulo = require('./modulo-requerido');
//ejecutar una funcion del modulo
modulo.saludar('Manuel');
console.log(modulo.dia);
console.log(modulo.tarde);
console.log(modulo.noche);
```

Para ECMAScript 6 la forma de exportar y requerir módulos ha cambiado pero es una forma experimental, quiere decir que para node aun no es nativo y requiere de una condiciones especiales para su ejecución:

archivo del modulo y el archivo donde se ejecuta el modulo deben tener extensión .mjs
```js
// El archivo se llama 'modulo-requerido.mjs'
function saludar(nombre) {
  console.log(`Hola ${nombre}`);

  function despedida() {
    setTimeout(() => {
      console.log(`Chao ${nombre}`);
    }, 1000);
  }
  return despedida();
}
export default {
  saludar,
  dia: "Buenos Días",
  tarde: "Buenas Tardes",
  noche: "Buenas Noches",
};
```

index.mjs es donde se importa el modulo anterior
```js
//AHORA segun ECMAScript 6
import modulo from './modulo-requerido.mjs'
//ejecutar una funcion del modulo
modulo.saludar('Manuel');
console.log(modulo.dia);
console.log(modulo.tarde);
console.log(modulo.noche);
```

# **Módulos útiles**
Módulos que utilizaremos frecuentemente en nuestras aplicaciones como:

***bycript*** : Permite encriptar un string generando un hash.

***bycript.hash*** : Genera el hash del string, este método recibe por parámetros el string a encriptar, las veces que debe ejecutarse el script para generar un hash aleatorio y por ultimo una función que se encarga de capturar hash o el error que se presente.

***bycript.compare*** : Permite comprar el hash con el string a encriptado y nos devuelve un true o false. `bycript.compare` recibe por parámetros el string a encriptado, luego el hash y por ultimo una función que captura la información o el error que se presente.
```js
//importamos el modulo
const bcrypt = require('bcrypt');
//declaramos el pass o palabra a encriptar
const passworld = '1234Segura';
//bcrypt.hash no permite generar un hash
bcrypt.hash(passworld, 10, function(error, hash) {
  console.log(hash);
//bcrypt.compare nos devuelve un boleano si hash y contraseña son iguales
  bcrypt.compare(passworld, hash, function(err, res) {
    console.log(res)
  });
});
```
***moment*** : Logramos manipular fechas de manera eficiente.
***moment.format*** : Podemos darle un formato adecuado a nuestra fecha.
```js
//importamos el modulo
const moment = require('moment');

let ahora = moment();
//establecemos el formato a usar
let ahoraFormat = ahora.format('HH:mm:ss');


console.log(ahoraFormat);
```
***sharp*** : Permite trabajar con imágenes
```js
//importamos el modulo
const sharp = require('sharp');
//ruta de la imagen a modificar
sharp('fondo-carro.jpg')
//scalamos la imagen a 500 de alto
  .resize(500)
//otorgamos una escala de grises
  .grayscale()
//generamos el archivo modificado
  .toFile('fondo-carro-small.jpg');
```

# **Datos almacenados vs en memoria**
La forma de trabajar entre el procesador y la RAM es supremamente rápida si la comparamos con la escritura en disco. 

La RAM tiene muy poca capacidad de almacenamiento pero es supremamente rápido y el disco duro cuenta con poca velocidad pero almacena datos a largo plazo ya que la RAM debe estar energizada constantemente.

En un proceso los tiempos lectura y escritura son directamente proporcionales al tamaño de los datos, esto quiere decir que entre mas datos tengamos mas se va tardar en leerlos y escribirlos en disco.

Lo optimo seria leer la información, contenerla en la memoria RAM para procesarla y al finalizar las modificaciones poder escribirlas en disco.

# **Buffer**
Buffer son datos en binarios o datos en crudo que van de un lado a otro. Ejemplo `48 6f 6c 61` que significa Hola. Trabajar con buffers permite trabajar con la versión mas cruda de podemos tener sin generar que tipo de datos es. 

```js
//Crear un buffer
let crearBuffer = Buffer.alloc(1);
console.log(crearBuffer);
//Crear un buffer segun el argumento enviado
let otroBuffer = Buffer.from([1, 2, 5]);
let textoBuffer = Buffer.from('Hola');

console.log(otroBuffer);
console.log(textoBuffer);
```

También podemos trabajar posición a posición de un buffer y lo logramos rellenando el buffer como un arreglo de datos.
```js
//trabajar un buffer puesto por puesto
let abc = Buffer.alloc(26);
console.log(abc);

for(let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());//toString() permite transforma 
```
Para concluir, buffer es un espacio en memoria con el cual podemos crear directamente con los datos que deseamos o crear el espacio en memoria e ir rellenándolo, esto nos permite trabajar con los datos mas primitivos de node logrando un flexibilidad en el manejo de cada dato o cada byte del buffer.

# **Streams**
Son flujos de informacion o chorros de informacion, se clasifican como streams de lectura, streams de escritura y streams de lectura y escritura. El flujo de datos que crea un stream es transmitido en pedazos conocidos como 'chunks'

Los streams son usados con el modulo 'fs' de manipulacion de archivos.

***Stream de lecura***
```js
const fs = require('fs');
//variable donde los datos seran guardados
let data = '';
//crea el Stream
let readableStream = fs.createReadStream(__dirname + '/input.txt');
//le otorga el tipo de codificacion
readableStream.setEncoding('utf-8');
//Guarda los datos en la variable data
readableStream.on('data', function(chunk) {
  data += chunk;
})
//Antes de terminar el stream debe mostrar los datos
readableStream.on('end', function(chunk) {
  console.log(data);
})
```

Realizar una carga de archivos con streams facilita su upload ya que se realizara por paquetes dando la facilidad de pausar la carga puesto que sabe en que paquete quedo.

***Stream de escritura***
Empezamos con un tipo de buffer de escritura como lo es :
```js
process.stdout.write('Hola ');
process.stdout.write('Como ');
process.stdout.write('Estas ');
```

Otro buffer de escritura es el que vamos a crear : 
```js
//Traemos el modulo fs
const fs = require('fs');
//Guardamos la ruta
let readableStream = fs.createReadStream(__dirname + '/input.txt');
//Traemos el modulo stream
const stream = require('stream');
//Clase util sirve para trabajar con herencia automatica
const util = require('util');
const { brotliCompress } = require('zlib');
//Transform es un stream de doble canal, lee y escribe
const Transform = stream.Transform;
//Funcion que transforma strings de minusculas a mayusculas
function Mayus() {
  //Creamos un constructor para este transform
  Transform.call(this);
}
//Nuestra funcion Mayus trae todo lo que se necesita de transform
util.inherits(Mayus, Transform);
//Agregamos la transformacion
Mayus.prototype._transform = function (chunk, condificacion, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
}
// Creamos una nueva instacia de mayus
let mayus = new Mayus();
//Mostramos el resutado
readableStream
  .pipe(mayus)
  .pipe(process.stdout);
```

# **Benchmarking**
Son las pruebas de rendimiento que podemos hacer en node con los tiempo sde ejecucion de nuestro codigo:

```js
let suma = 0;
//Console.time nos muestra en consola en el tiempo de que tarda
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
  suma +=1;
}
//El codigo que se ejecuta entre console.time y console.timeEnd sera tomado en cuenta
console.timeEnd('bucle');
```

Podemos usar la cantidad de console.time necesarios para determinar los tiempos de ejecucion:
```js
let suma = 0;

console.time('Programa');
console.time('bucle')
for (let i = 0; i < 100000000; i++) {
  suma +=1;
}
console.timeEnd('bucle');
console.time('bucle 2')
for (let i = 0; i < 100000000; i++) {
  suma +=1;
}
console.timeEnd('bucle 2');
console.timeEnd('Programa');
```

Con funciones asincronas funciona de manera especial : 
```js
function asincrona() {
  return new Promise((resolve, rejec) => {
    setTimeout(() => {
      console.log('Termina el proceso asincrono');
      resolve()
    })
  })
}

console.log('inicia el proceso asincrono')
console.time('asincrono');
asincrona()
  .then(() => {
    console.timeEnd('asincrono')
  })
```

# **Debugger**
Podemos hacer un debuuger de nuestra aplicacion de node conectandonos a una herramienta de debbuger, esto se facilita con el fleg --inspect : 

```js
node --inspect nuestroArchivo.js
```

Debemos dirigirnos a nuestro navegadaos y ir a la ruta `chrome://inspect/#devices`.

# **Error First Callbacks**
Es un patron que impone la captura de errores como primer parametro, es decir, al ejecutar cualquier bloque de codigo asincrono o sincrono debemos capturar los posibles errores, pues simpre debemos tener presente que todo puede fallar y es mejor capturar estos errores a que nuestra aplicacion se bloquee o no se ejecute correcetamente.

```js
function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a)
    } catch (error) {
      callback(error);
    }
  },1000);
}

asincrona(function(err, dato) {
  if(err) {
    console.error('Tenemos un error');
    console.error(err);
    // throw err NO VA A FUNCIONAR
    return false;
  }

  console.log('Todo va bien y mi nada es: ' + dato)
});

console.log('Yo si me ejecuto correctamente');
```

# **Scraping**
Con Javascript podemos hacer scraping con un paquete npm llamado pippeteer, lo que le realizara es abrir una pagina en un chrome, ejecutara lo que nosotros le indiquemos, retornara un resultado y luego se cerrara el chrome. Todo esto se realizara sin necesidad de una interfaz visual.

Descargamos el paquete con `npm i puppeteer`, dentro de este paquete viene la version open surce de chromium.
```js

```