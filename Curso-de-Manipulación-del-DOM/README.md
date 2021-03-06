# **¿Qué es el DOM?**
Es un concepto que todos los navegadores utilizan para renderizar y trabajar sobre una pagina web.

Todos empieza desde el critical rendering path que es el proceso de tomar el código Html, Css y Js se convierta en pixeles en la pantalla de nuestros usuarios, este proceso esta compuesto por 4 o 5.

Antes de renderizarse las información en nuestro navegador este crea dos arboles llamados DOM y CSSOM. El DOM es una representación del Html formando un árbol de nodos para representar un modelo de todas las etiquetas contenidas en el Html, este modelo puede ser modificado.

# **Web APIs modernas**
Cuando combinamos el DOM con JavaScript obtenemos una web API. API es un puente que permite conectar el DOM con JavaScript permitiendo manipularlo y modificarlo como querramos.

Actualmente existe mas de 70 web APIs, el DOM solo es una de ellas. Si quisieramos usar una de estas web APIs primero debemos consultar ***¿como se debe usar?*** y ***¿donde se puede usar?***. Para contestar estas preguntas contamos con la pagina developer.mozilla.org y caiuse.com. 

No todos los navegadores cuentan con las mismas caracteristicas o soportan las mismas APIs, es por esto que debemos tener claro cuales si y hasta que version.

# **Leer nodos**
Para leer nodos podemos hacerlos de 3 formas:

```JS
// Llamamos el elemento html que contenga cierto ID
const TITULO__MAIN = document.getElementById('titulo__main'); 
console.log(TITULO__MAIN);

// Llamamos todos los elementos de cierto TagName
const LI__GROUP = document.getElementsByTagName('li'); 
console.log(LI__GROUP);

// Llamamos todos los elementos que tenga cierta clase
const LI = document.getElementsByClassName('subtitulo');
console.log(LI);
```

Aunque estos selectores son el pilar de la web, La web APIs ha cambiado y evolucionaron dando como resultado una forma mucho mas moderna a la hora de manipular el DOM.

```js
const TITULO__MAIN = document.querySelector('.subtitulo') //Llama al primer elemento según el selector.
console.log(TITULO__MAIN);

const LI__GROUP = document.querySelectorAll('.li') //Llama todos los elementos según el selector.
console.log(LI__GROUP);
```

En la gran mayoría de aplicaciones usa estos selectores que otorga mayor facilidad y flexibilidad.

# **NodeLists vs Array**
Cuando utilizamos el querySelectorAll nos devuelve un NodeList es diferente a un arreglo puesto que no puede utilizar las mismas propiedades que los arreglos, limitando su utilización. 

Por esto es importante pasar los NodeList a Arrays o arreglos, no solo para facilitar su uso si no que los navegadores están optimizados para hacer uso de arrays y no NodeList.

Este conversión la logramos de la siguiente manera :
```js
const nodeList = document.querySelectorAll("li");
console.log(nodeList);

const nodeListAsArray = [...nodeList];
console.log(nodeListAsArray);
```
Guardamos el NodeList como un array pero utilizamos un spread operation.

# **Crear y agregar nodos**
## **Crear nodo**
Los nodos que podemos crear son de dos tipos, un elemento o un texto :
```js
document.createElement('h1');
```
La web api solo nos devolverá la etiqueta creada, esta creación sucede en memoria pero no aparece en el árbol del DOM.
Para agregar texto a nuestra etiqueta ya creada en memoria será :
```js
document.createTextNode('Texto')
```
Contamos con varias opciones para agregar nuestro nodo.

### ***appenChild***
Para agregar nuestro nodo con `appenChilid` necesitamos un nodo de referencia y el nodo que vamos agregar. El appenChilid siempre nos agregara el nodo al final de la lista. Esta API es muy antigua y con ello trae muchas limitaciones.
```js
const contenedor = document.querySelector('.contenedor');

const h3 = document.createElement('h3');
const texto = document.createTextNode('Soy un nuevo h3');

contenedor.appendChild(h3);
h3.appendChild(texto);
```


### ***append***
Es la evolución de appenChilid y la diferencia es que podemos agregar mas de un nodo a la vez, podemos agregar un texto y append es soportado en IE11.
```js
const h4 =  document.createElement('h4');
contenedor.append('Soy un nuevo h4', h4);
```
Podemos usar append siempre cuando no tengamos que soportar internet explorer, en caso de dar soporte a internet explorer tenemos dos opciones, usar appendChild o usar un polyfill para que soporte append, en MDN podemos encontrar ayuda para realizar esta función.

### ***insertBefore***
Como `appendChile` y `append` agrega los nodos al final, con `insertBefore` logramos agregar el nodo al inicio del nodo referencia.
```js
const titulo = document.createElement('h1');
const referencia = document.querySelector('.listado');

contenedor.insertBefore(titulo, referencia);
```
Para lograr una inserción exitosa, el nodo de referencia debe ser un hijo directo del nodo base, eso quiere decir que si la referencia se encuentra en niveles mas profundos no va a funcionar.

### **AdjacentElement**
Este es un método complicado de usar pero el mas completo y flexible a la hora de insertar nuevos nodos.

```js
const referenciaDos = document.querySelector('.contenido');

const span = document.createElement('span');

referenciaDos.insertAdjacentElement('beforebegin', span); //Crea el spam antes de nuestra referencia

referenciaDos.insertAdjacentElement('afterbegin', span); //Crea el spam después de nuestra referencia

referenciaDos.insertAdjacentElement('beforeend', span); //Crea el spam antes de finalizar nuestra referencia

referenciaDos.insertAdjacentElement('aafterend', span); //Crea el spam después de finalizar nuestra referencia
```
# **Otras formas de agregar**
Con `node.outerHTML` podemos leer html y `node.innerHTML` para escribir html. Estas formas son muy comvenientes y facil de usar pero tienen una falla de seguridad que debemos procurar.
```js
const titulo = document.querySelector('#titulo__main');
//Mostrar html
console.log(titulo.outerHTML);
//Sobre escribir HTML
titulo.innerHTML = 'Hola soy un nuevo titulo';
//Problemas de seguridad
const nuevoTitulo = '<h1 onclick="alert()"> Hola soy un titulo malicioso</h1>';
titulo.innerHTML = nuevoTitulo;
```
Si estamos agregando nodos y leyendo nodos directamente con los lectores de HTML, debemos tener cuidado ya que abre la posibilidad de realizar ataques de injeccion xss. Si por requerimientos si o si debemos usarlo antes que todo debemos garantizar la seguridad del sitio y esto lo hacemos capturando y limpiando el codigo que se esta ingresando.

# **Atributos y propiedades**
Son los que dan vida a los elementos que estan en el DOM, cosntantemente estaremos variando de forma dinamica estos attributos y propiedades para adecuarlo a nuestras necesidades.

Podemos consultar MDM cuales son los atributos y propiedades de cada elemento HTML. 

La diferencia entre atributos y propiedades es que los atributos son utilizados al inicio del HTML, osea, que son utilizados para inicializar nuestro codigo HTML. 

En cambio las propiedades puede cambiar en cualquier momentos y hace parte en la renderizaacion de la pagina.

# **Eliminar nodos**
Existen 3 formas de hacer esta accion `parentElement.removeChild`, `document.remove` y `document.replaceChild`.

*Si queremos tener el padre directo de nuestro nodo seleccionado, debemos usar la propiedad `parentElement`.*

## **removeChild**
Con removeChild se aplica al padre del nodo que queremos eliminar y por parametros le indicamos cual es el nodo.
```js
const nodoAEliminar = document.querySelector('h3');
const padreNodoAEliminar = document.querySelector('.contenido');

padreNodoAEliminar.removeChild(nodoAEliminar);
```

## **remove**
Nos ahorra buscar el padre del nodo que queremos eliminar y simplemente lo eliminamos.
```js
const nodoAEliminar = document.querySelector('h2');
nodoAEliminar.remove();
```

## **replaceChild**
Para utilizar el replaceChild necesitaremos al padre del nodo a reemplazar, el nodo a reemplazar y el reemplazo.
```js
const nodoAReemplazar = document.querySelector('p');
const padreNodoReemplazar = nodoAReemplazar.parentElement;
const reemplazo = document.createElement('p');
reemplazo.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt dicta a doloremque quos corrupti quam atque sit sed incidunt eaque?'

padreNodoReemplazar.replaceChild(reemplazo, nodoAReemplazar);
```
# **Operaciones en lote**
Debemos tener en cuenta el rendimiento de nuestras aplicaciones web puesto que escribir, modificar o eliminar nodos conlleva una carga en el DOM y puede afectar su velocidad de procesamiento.

Si quisieramos agregar 100 nodos nuevos (en este caso botones) a nuestra pagina, una solucion sera la siguiente :
```js
for (let i = 0; i < 100; i++) {
  const nodo = document.createElement('button');
  nodo.innerText = `Super boton ${i}`
  document.body.appendChild(nodo);
}
```
La forma en que realizamos esta operacion no estan optima ya que estamos modificando directamente el DOM 100 veces. Lo mejor que podemos hacer sera el siguiente codigo :
```js
const nodos = [];

for (let i = 0; i < 100; i++) {
  const nodo = document.createElement("button");
  nodo.innerText = `Super boton ${i}`;
  nodos.push(nodo);
}

document.body.append(...nodos);
```
No es algo que debemos llevar estrictamente pero si debe estar presente al realizar estas acciones en el DOM.

# **Internacionalizacion de del browse**
Podemos otorgar formato a nuestros precios, esto lo realizamos con una API llamada 'Intl' permitiendo dar formato a precios segun la monena y hora segun el huso horario.

```js
function formatoPrecio(precio) {
  //Creamos una nueva instancia, primer parametro es el lugar donde se encuetra nuestro usuario
  const new_precio = new window.Intl.NumberFormat('en-EN', {
    //numero tenga un estilo tipo moneda
    style: 'currency',
    // La moneda que utilizara es en dolares
    currency: 'USD',
    //indicamos a que variable queremos darle el formato anterior
  }).format(precio)
  return new_precio;
}
```
# **Reaccionar a lo que sucede en el DOM**
Js es un lenguaje basado en evento y toda la dinámica ocurre cuando escuchamos estos evento ya que podemos reaccionar ante ellos, para utilizar evento los agregamos con `node.addEventListener` y para removerlos `node.removeEventListener`.

Al agregar el listener recibirá unos parámetros, el primer parámetro será tipo de evento y el segundo una función donde se realizara la acción a tomar cuando el evento sea capturado.

## **addEventListener**
Evento `'click'`, detecta la acción click al elemento que se le otorgo.  :

```js
const titulo = document.querySelector('#titulo__main');

const accion = () => {
  console.log('Haz dado click');
}

titulo.addEventListener('click', accion);
```

Evento `'input'`, detecta la pulsación del teclado, como su nombre lo indica es cuando estamos ingresando datos a un input :

```js
const input = document.querySelector('#nombre');

const accion = () => {
  console.log('Ingresaste algún dato');
}

input.addEventListener('input', accion);
```
A este evento también podemos otorgarle un poco de mas de lógica : 

```js

const input = document.querySelector('#nombre');

const accion = (ev) => {
  if(ev.data == 'j') {
    console.log('Escribiste la j');
  }  
}

input.addEventListener('input', accion);
```

El parámetro `ev` es el evento que devuelve el input, en el contiene información valiosa, por ejemplo, el elemento donde se ocurrió el evento, su contenido y mucho mas...

## **removeEventListener**
Para remover listeners : 
```js
titulo.removeEventListener('click', accion);
input.removeEventListener('input', accion);
```

Es importante tener en cuenta que las funciones que pasamos por parámetro a los listeners no deben ser anónimas ya que no lograremos eliminarlas. 

# **Event propagation**
El DOM es un árbol que renderiza nodos de forma jerárquica y cuando se agrega un evento, este se propaga a lo largo de ese nodo. 

Esto quiere decir que un elemento hijo activa su evento 'x', este se propagara en toda su ramificación hasta llegar a el elemento padre de mayor jerarquía y en su paso activara los demás eventos que encuentre.

podemos asemejar esto como un burbuja de aire que sube a la superficie. La propagación de evento es natural pero no es beneficioso para nuestro DOM, por esto debemos hacer que no suceda.

```js
const parrafo = document.querySelector('p');
const contenedor = document.querySelector('.contenedor');


const mostrarMensaje = (ev) => {
  ev.stopPropagation();
  console.log(ev.currentTarget.nodeName);
}

document.body.addEventListener('click', mostrarMensaje);
contenedor.addEventListener('click', mostrarMensaje);
parrafo.addEventListener('click', mostrarMensaje);
```
Detener la propagación del evento puede ocasionar conflictos con otras librerías o otras personas si querrá que la propagación se genere.

# **Event delegation**
Es una solución eficaz para evitar el `stopPropagation`. Básicamente lo que debemos es colocar nuestro listener en el elemento padre y en la función a ejecutar colocamos una condicional para saber el tipo de selector que disparo el evento, ya con esta información ejecutamos código según el ejecutor del evento.

Este patrón lo debemos usar siempre que sea posible y mas cuando la cantidad de listener es relativamente enorme.
```js
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
```
# **Intersection Observer**
Permite saber cuando una elemento se intersecta conel viweport, el viweport es la procion de la pantalla que como usuarios vemos visible en el navegador.

```js
const isIntersecting = (entry) => {
  //retorna un boleano si sirve
  return entry.isIntersecting;
}

const action = (entry) => {
  //El nodo que tiene el observador
  const nodo = entry.target;

  //deja de observar al elemento
  observation.unobserve(nodo);
}

//guardamos una instancia del observador, recibe por parametro un cb y este a a subes recibe un elemento que será observado.
const observation = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting) //filtramos el boleano si se ha generado una intersepcion
    .forEach(action); //realizamos una accion por cada elemento que se esta interceptando
})

export const registerImage = (image) => {
  //Le decimos a la instacia del observador que observe el elemento enciado
  observation.observe(image);
}
```