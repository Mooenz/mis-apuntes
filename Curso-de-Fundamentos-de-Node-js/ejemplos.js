/*
// Monohilo: implicaciones en diseño y seguridad
// Se ejecutara infinitamente
setInterval(() => {
  console.log("Estoy activo"), 1000;
});

// Va para por no encontrar la variable 'numeroNoexistente'
let contadorDeNumeros = 0;

setInterval(() => {
  console.log(contadorDeNumeros);
  
  if(contadorDeNumeros === 5) {
    console.log(contadorDeNumeros + numeroNoexistente);
  }
  contadorDeNumeros+=1;
}, 1000);

console.log('Segunda intruccion');
*/
//Variables de entorno
let nombre = process.env.NOMBRE || "sin nombre"; //declaramos nuestras variables de entorno en mayuculas ya que son datos constantes. Ademas contiene valores por defecto en caso de no encontrar ninguna variable con ese nombre.
let web = process.env.MI_WEB || "no tengo web";

console.log(`Hola mi nombre es ${nombre} y mi web es ${MI_WEB}`);

// conrremos el codigo de la siquiente manera: NOMBRE=Manuel WEB=mooenz.com node ejemplos.js
// nos da como resultado:
// Hola mi nombre es Manuel y mi web es mooenz.com

/*
//Callback

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

//Callbacks Hell
function despertar(nombre, callback) {
  setTimeout(() => {
    console.log(`Se desperto ${nombre}`);
    callback(nombre);
  }, 1000);
}

function bañar(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} se baño`);
    callback(nombre);
  }, 1000);
}

function vestir(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} se vistio`);
    callback(nombre);
  }, 1000);
}

function desayunar(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} Desayuno`);
    callback(nombre);
  }, 1000);
}

function cepillar(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} se cepillo`);
    callback(nombre);
  }, 1000);
}
function estudiar(nombre, callback) {
  setTimeout(() => {
    console.log(`Shhhhh, ${nombre} esta estudiando`);
    callback(nombre);
  }, 1000);
}

function leer(nombre, callback) {
  setTimeout(() => {
    console.log(`Silencio, ${nombre} esta leyendo`);
    callback(nombre);
  }, 1000);
}

function almorzar(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`${nombre} esta almorzano`);
    otroCallback();
  }, 1000);
}

function ejercitarse(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} se esta ejercitando`);
    callback(nombre);
  }, 1000);
}

function llamar(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} llamo a un amigo`);
    callback(nombre);
  }, 1000);
}

function merendar(nombre, callback) {
  setTimeout(() => {
    console.log(`${nombre} esta merendando`);
    callback(nombre);
  }, 1000);
}

const volvi = (nombre, deNuevoCallback) => {
  setTimeout(() => {
    console.log(`Regreso ${nombre}`);
    deNuevoCallback(nombre);
  }, 1000)
}

console.log("Iniciando proceso...");

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
*/
