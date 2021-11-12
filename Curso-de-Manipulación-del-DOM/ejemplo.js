//Leer Nodos
//ANTES
// Llamamos el elemento html que contenga cierto ID
const TITULO__MAIN = document.getElementById('titulo__main'); 
console.log(TITULO__MAIN);

// Llamamos todos los elementos de cierto TagName
const LI__GROUP = document.getElementsByTagName('li'); 
console.log(LI__GROUP);

// Llamamos todos los elementos que tenga cierta clase
const LI = document.getElementsByClassName('subtitulo');
console.log(LI);
//NUEVO
const TITULO__MAIN = document.querySelector('.subtitulo') //Llama al primer elemento según el selector.
console.log(TITULO__MAIN);

const LI__GROUP = document.querySelectorAll('.li') //Llama todos los elementos según el selector.
console.log(LI__GROUP);
//Leer Nodos

//NodeList vs Arrays
const nodeList = document.querySelectorAll("li");
console.log(nodeList);

const nodeListAsArray = [...nodeList];
console.log(nodeListAsArray);
//Crear y agregar nodos
//appendChild
const contenedor = document.querySelector('.contenedor');

const h3 = document.createElement('h3');
const texto = document.createTextNode('Soy un nuevo h3');

contenedor.appendChild(h3);
h3.appendChild(texto);

//append
const h4 =  document.createElement('h4');
contenedor.append('Soy un nuevo h4', h4);

//insertBefore
const titulo = document.createElement('h1');
const referencia = document.querySelector('.listado');

contenedor.insertBefore(titulo, referencia);

//adjacentElement
const referenciaDos = document.querySelector('.contenido');

const span = document.createElement('span');
const div = document.createElement('div');
const spanDos = document.createElement('span');
const divDos = document.createElement('div');


referenciaDos.insertAdjacentElement('beforebegin', span); //Crea el spam antes de nuestra referencia

referenciaDos.insertAdjacentElement('afterbegin', div); //Crea el spam despues de nuestra referencia

referenciaDos.insertAdjacentElement('beforeend', spanDos); //Crea el spam antes de finalizar nuestra referencia

referenciaDos.insertAdjacentElement('afterend', divDos); //Crea el spam despues de finalizar nuestra referencia
//NodeList vs Arrays

//node.outerHTML y node.innerHTML 
const titulo = document.querySelector('#titulo__main');
//Mostrar html
console.log(titulo.outerHTML);
//Sobre escribir HTML
titulo.innerHTML = 'Hola soy un nuevo titulo';
//Problemas de seguridad
const nuevoTitulo = '<h1 onclick="alert()"> Hola soy un titulo malicioso</h1>';
titulo.innerHTML = nuevoTitulo;
//node.outerHTML y node.innerHTML 
//removeChild
const nodoAEliminar = document.querySelector('h3');
const padreNodoAEliminar = document.querySelector('.contenido');
padreNodoAEliminar.removeChild(nodoAEliminar);
//remove
const nodoAEliminar = document.querySelector('h2');
nodoAEliminar.remove();

//replaceChild
const nodoAReemplazar = document.querySelector('p');
const padreNodoReemplazar = nodoAReemplazar.parentElement;
const reemplazo = document.createElement('p');
reemplazo.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dicta a doloremque quos corrupti quam atque sit sed incidunt eaque?'

padreNodoReemplazar.replaceChild(reemplazo, nodoAReemplazar);
//replaceChild
//Operaciones en lote
//No optimo
for (let i = 0; i < 100; i++) {
  const nodo = document.createElement('button');
  nodo.innerText = `Super boton ${i}`
  document.body.appendChild(nodo);
}
//Optimo
const nodos = [];
for (let i = 0; i < 100; i++) {
  const nodo = document.createElement("button");
  nodo.innerText = `Super boton ${i}`;
  nodos.push(nodo);
}

document.body.append(...nodos);
//Reaccionar a lo que sucede en el DOM
//CLICK
const titulo = document.querySelector('#titulo__main');

const accion = () => {
  console.log('Haz dado click');
}

titulo.addEventListener('click', accion);
//INPUT
const input = document.querySelector('#nombre');

const accion = () => {
  console.log('Ingresaste algun dato');
}

input.addEventListener('input', accion);
//INPUT con el parametro event
const input = document.querySelector('#nombre');

const accion = (ev) => {
  if(ev.data == 'j') {
    console.log('Escribiste la j');
  }  
}

input.addEventListener('input', accion);
//Event propagation
const parrafo = document.querySelector('p');
const contenedor = document.querySelector('.contenedor');


const mostrarMensaje = (ev) => {
  ev.stopPropagation();
  console.log(ev.currentTarget.nodeName);
}

document.body.addEventListener('click', mostrarMensaje);
contenedor.addEventListener('click', mostrarMensaje);
parrafo.addEventListener('click', mostrarMensaje);
//Event delegation


const accion = (ev) => {
  if (ev.target.id === 'titulo__main') {
    console.log('Soy el titulo');
  }

  if (ev.target.classList.value === 'subtitulo') {
    console.log('Soy el subtitulo');
  }

  if(ev.target.nodeName === 'P') {
    console.log('Estamos en el parrafo');
  }

}

document.body.addEventListener('click', accion);