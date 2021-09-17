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
document.getElementById //Llamamos el elemento html que contenga cierto ID
parent.getElementByTagName //llamamos todos los elementos de cierto TagName
parent.getElementByClassName //llamamos todos los elementos que tenga cierta clase
```

Aunque estos selectores son el pilar de la web, La web APIs ha cambiado y evolucionaron dando como resultado una forma mucho mas moderna a la hora de manipular el DOM.

```js
parentElement.querySelector //Llama al primer elemento según el selector.
parentElement.querySelectorAll //Llama todos los elementos según el selector.
```

En la gran mayoría de aplicaciones usa estos selectores que otorga mayor facilidad y flexibilidad.

# **NodeLists vs Array**
Cuando utilizamos el querySelectorAll nos devuelve un NodeList es diferente a un arreglo puesto que no puede utilizar las mismas propiedades que los arreglos, limitando su utilización. 

Por esto es importante pasar los NodeList a Arrays o arreglos, no solo para facilitar su uso si no que los navegadores están optimizados para hacer uso de arrays y no NodeList.

Este conversión la logramos de la siguiente manera :
```js
const nodeList = document.querySelectorAll("selector valido en css");
const nodeListAsArray = [...nodeList];
```

Guardamos el NodeList como un array pero utilizamos un spread operation.