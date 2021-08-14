//Objeto que sirve par hacer peticiones a la API, se instalo mediante npm install xmlhttprequest --save
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//link API a llamar
const API = "https://rickandmortyapi.com/api/character/";

//Esta es la funcion que establece la conecion con la API recibe como parametro la api url y un callback
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); //Genrea una referencia al objeto XMLHttpRequest, creado por microsoft y se comvirtio en un estandar
  xhttp.open("GET", url_api, true); //1. referente hacer un llamado a una url con .open, recibe como parametros el tipo de peticion, la url de la api y el tercer parametro es opcional (ya que por defecto es true), es habilitar el asincronismo en esta peticion, por buenas practicas y para tener mas claridad de lo que estamos haciendo se deja habilitada la opcion con un true
  xhttp.onreadystatechange = function (event) {
    //Sirve para escuchar lo que va hacer la conexion, recibe una funcion anonima que recibe un evento y dentro de ella realizaremos las siguientes validaciones.
    if (xhttp.readyState === 4) {
      //sirve para saber si la conexion se completo y que recibimos unos valores.
      if (xhttp.status === 200) {
        //Sirve para saber si la conexion fue exitosa ya que el API nos retornara un mensaje 200 que significa todo esta bien.
        callback(null, JSON.parse(xhttp.responseText)); //callback utiliza un estandar de node donde el primer parametro que le pasamos es el error y el segundo es la data. Como el resultado es un JSON se debe parsear por que se recibe un string de texto
      } else {
        //como buena practica generamos el else, capturamos el error y retornamos al callback el erro en el primer parametro y el segundo es null
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send(); //se envia la solicitud
}

//llamamos a nuestra funcion y pasamos la API y el callback
fetchData(API, function (error1, data1) {
  // primera peticion, el callback recibe dos datos, el error y los datos resultantes de la peticion que estamos ejecutando
  if (error1) return console.error(error1); // primera validacion, encaso de recibir un error, retornamos ese error y la funcion se acabaria, en caso contrario hacemos la siguiete peticion
  fetchData(API + data1.results[0].id, function (error2, data2) {
    // la siguiente peticion la hacemos de acuerdo a la anterior, nuestra url de la API la complementamos con el id primer personaje del arreglo data1.
    if (error2) return console.error(error2); // segunda validacion, encaso de recibir un error, retornamos ese error y la funcion se acabaria, en caso contrario hacemos la siguiete peticion
    fetchData(data2.origin.url, function (error3, data3) {
      // en esta peticion estamos buscando un dato en especifico, segun lo logrado con postman, la url de la API que enviaremos esta dentro de los datos requeridos en la segunda peticion
      if (error3) return console.error(error3); //tercera validacion, encaso de recibir un error, retornamos ese error y la funcion se acabaria, en caso contrario hacemos la siguiete peticion

      //imprimimos los datos que necesitamos
      console.log(data1.info.count); // cantidad de personajes
      console.log(data2.name); // nombre del primer personaje
      console.log(data3.dimension); // dimension de ese personaje
    });
  });
});
