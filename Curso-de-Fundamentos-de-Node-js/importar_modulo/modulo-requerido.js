/* ANTES
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
  dia: 'Buenos Dias',
  tarde: 'Buenas Tardes',
  noche: 'Buenas Noches',
};
*/

//ECMAScript 6
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
  dia: "Buenos Dias",
  tarde: "Buenas Tardes",
  noche: "Buenas Noches",
};
