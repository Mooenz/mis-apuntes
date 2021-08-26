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

//Variables de entorno
let nombre = process.env.NOMBRE || "sin nombre"; //declaramos nuestras variables de entorno en mayuculas ya que son datos constantes. Ademas contiene valores por defecto en caso de no encontrar ninguna variable con ese nombre.
let web = process.env.MI_WEB || "no tengo web";

console.log(`Hola mi nombre es ${nombre} y mi web es ${MI_WEB}`);

// conrremos el codigo de la siquiente manera: NOMBRE=Manuel WEB=mooenz.com node ejemplos.js
// nos da como resultado:
// Hola mi nombre es Manuel y mi web es mooenz.com


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
function despertar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Se desperto ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
}

function bañar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} se baño`);
      resolve(nombre);
    }, 1000);
  });
}

function vestir(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} se vistio`);
      resolve(nombre);
    }, 1000);
  });
}

function desayunar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} Desayuno`);
      resolve(nombre);
    }, 1000);
  })
}

function cepillar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} se cepillo`);
      resolve(nombre);
    }, 1000);
  })
}

function estudiar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Shhhhh, ${nombre} esta estudiando`);
      resolve(nombre);
    }, 1000);
  })
}

function leer(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Silencio, ${nombre} esta leyendo`);
      resolve(nombre);
    }, 1000);
  })
}

function almorzar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} esta almorzano`);
      resolve(nombre);
    }, 1000);
  })
}

function ejercitarse(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} se esta ejercitando`);
      resolve(nombre);
    }, 1000);
  })
}

function llamar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} llamo a un amigo`);
      resolve(nombre);
    }, 1000);
  })
}

function merendar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${nombre} esta merendando`);
      resolve(nombre);
    }, 1000);
  })
}

const volvi = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Regreso ${nombre}`);
      resolve(nombre);
    }, 1000);
  })
};

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

//factorizacioni callback hell con ptomesas
despertar("Manuel")
  .then(bañar)
  .then(vestir)
  .then(desayunar)
  .then(cepillar)
  .then(leer)
  .then(almorzar)
  .then(ejercitarse)
  .then(llamar)
  .then(merendar)
  .then(volvi)
  .then(() => {
    console.log("Termino el proceso");
  })
  .catch();

//Promesas
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

//Async/Await
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

//Globales
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

//Modulos
const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  })
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function(err) {
    if(err) {
      console.error('Hubo un problema de escritura')
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

escribir(`${__dirname}/ejemplos.txt`, 'Soy una linea nueva', console.log);
leer(`${__dirname}/ejemplos.txt`, console.log);
borrar(`${__dirname}/ejemplos.txt`, console.log);

//Modulo de lectura con promesas
//Requerir Modulo
const fs = require('fs').promises;

//Lectura del archivo
async function leer(ruta) {
  try {
    const data = await fs.readFile(ruta);
    console.log(`Ready: ${data.toString()}`);
  } catch (error) {
    console.error(error);
  }
}

//Escritura del archivo
async function escribir(ruta, contenido) {
  try {
    await fs.writeFile(ruta, contenido);
    console.log('Se escribio correctamente');
  } catch (error) {
      console.error(error);
  }
}

//Borrar el archivo
async function borrar(ruta) {
  try {
    await fs.unlink(ruta);
    console.log('Archivo borrado');
  } catch (error) {
      console.error(error);
  }
}

//Llamado de las funciones
(async function () {
  try {
    await escribir(`${__dirname}/ejemplos.txt`, 'Jose Manuel montaño saenz');
    await leer(`${__dirname}/ejemplos.txt`);
    await borrar(`${__dirname}/ejemplos.txt`, console.log);
    
  } catch (error) {
      console.error(error);
  }
})();

//Consola
//Mostrar informacion
console.log('Uno');
console.info('Dos');
//Mostrar un error
console.error('Error');
//Mostrar informacion en forma de tabla
equiposFutbol = {
  españa: {
    realMadrid: 'RM',
    Barcelona: 'BSC',
    atleticoMadrid: 'ATM',
  },
  francia: {
    parisSaintGerman: 'PSG',
    monaco: 'MON',
  }
}
console.table(equiposFutbol);
//Agrupar logs
console.group('Equipos de españa');
console.log('Real Madrid');
console.log('Barselona');
console.log('Atletico de Madrid');
console.group('Equipos de Francia');
console.log('Paris Saint German');
console.log('Monaco');
console.groupEnd();
console.groupEnd();
//Contadores
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');


function seRompera() {
  return console.log(3 + x); 
}

function otraFuncion() {
  return seRompera();
}

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

console.log('Otra instruccion');
*/
const { exec } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
  if(err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
}) 