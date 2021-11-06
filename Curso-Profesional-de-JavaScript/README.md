# **Curso Profesional de JavaScript**

## **Que significa ser un profesional de JavaScript**

Eñ camino de ser un profesional es largo, duro y no es facil, es como estar en una cuerda floja, hace falta que te guien. Este es el camino de Jr a senior, es un camino lleno de experiencia. Estas son las cosas que hacen a un profesional de JavaScript :

- Conocimiento del lenguaje
- Conocimiento de los entornos de programación
- Mejores prácticas
- Versado de código
- Herramientas
- Ética / Profesionalismo
- Experiencia

### **El lenguaje: JavaScript**

Existe algunas cosas que son fundamentales y se deben de tener muy claras, existen otras no son tan fundamentales pero se debe tener en cuenta que existen. Debemos saber como funciona cada una de ella y asi dejaran de ser magia para nuestros ojos.

### **No fundamentos**

Dentro de los no fundamento existen:

1. Promesas(Avanzado)

2. Getter, Setters: Son formas de obtener el valor de una variable sin usar `this.name`, Es una funcion que se encarga de computar name.

3. Proxies es una feature raro, se dedica a interceptar llamadas a funciones y cambiar argumento, etc.

4. Generadores.

### **Como funciona**

_JavaScript Engie_ es un motor y conocerlo nos permite correr codigo eficiente y optimizado.

_Herencia prototypal_ JavaScript no tiene clases.

_Event Loop_ Es la magia que permite a JavaScript ser multihilo, JavaScript no correo muchos hilos pero el event loop hace parecer que si.

### **Entornos de Programacion**

Cuando programamos para la web, para el movil o en el servidor cada uno de ellos ofrece multiples apis y esas apis se deben conocer ya que son muy importantes.

### **Versado en código**

Debemos leer mucho codigo constantemente y podemos hacerlo en github.

### **Mejores practicas**

Como profesionales no reinventamos la rueda, muchos desarrolladores han enfrentado una y otra vez los mismo problemas dando como resultado los patrones de diseño que son como recetas que resuelven estos problemas.

### **Ética**

Es la parte mas importante como profesional, cumple lo que dice, entrega a tiempo, sabe decir que no, no hace daño, no hace software mediocre.

### **Experiencia**

Es algo abstracta que no se enseña pero se gana estudiando, practicando.

## **Proyecto**

Para poner todo en practica desarrollaremos una app llama platzi-media-player, y lo realizaremos de forma modular, agregaremos plugins a nuestro media player mediante estos aprenderemos los temarios.

Para nuestro ejercicio utilizaremos la api de HTMLMediaElement.

## **Cómo llega un script al navegador**

### **DOM**

Cuando el navegador recibe la contestacion de la peticion de index.html recibe el archivo y lo debe procesar poco a poco y lo convierte en una estructura de arbol que es mas entendible para el navegador.

luego de procesar el DOM sucede el DOMContentLoaded, a partir de este punto tenemos la garantia que el documento ha sido cargado y listo para ser manipulado.

La etiqueta script es una etiqueta normal de HTML pero no todos los scripts son iguales:

- Script hace un llamado externo.
- Script embebido que ejecuta algo.

Cuando el DOM se esta procesando y encuentra una etiqueta script y este contiene codigo embebido, hace detener todo el proceso y ocasiona la no lectura de codigo HTML, eso quiere decir que hasta no finalizar la lectura y ejecucion de script embebido, el procesamiento del DOM no continuara.

_¿Donde colocamos ese script?_, tengamos en cuenta el codigo embebido, si este manipula parte del DOM lo mejor es colocarlo antes de cerrar el body para que el script encuentre todos los elementos del DOM.

_Script Externos_, tiene como atributo `src` contiene una ruta externa o local y cuando se ejecuta suspende el procesamiento del DOM adicionando el paso de fetch o la peticion.

Para que esto no suceda podemos otorgar una atributo async, permitiendo que la peticion se ejecute asincrona mente sin afectar el procesamiento del DOM, pero al concluirse la peticion se ejecutara pausando el procesamiento del DOM.

_Que pasa si tengo dos scripts asincronos_, si tenemos un script pequeño y otro mucho mas grande y complejo, pues ambas peticiones salen pero no quiere decir que se contesten a la vez, el script pequeño al resolverse mas rapido, se ejecutara paralizando el procesamiento del DOM. Para el script mas complejo, este se ejecutara al terminar su peticion, el cual ocurre en cualquier momento.

_defer_, es un atributo que va diferir la ejecucion del JavaScript hasta el final, parecido al async solo que defer permite realizar la peticion asincrona mente y su ejecucion se realizara al final del procesamiento del DOM.

## **Scope**

Representa el tiempo de vida en el que esta existe, puede ser una variable definida o le argumento de una funcion. Es importante ya que evitamos sobrescribir variables existentes:

_Scope Global_ Toda variable que declaremos fuera de una funcion o fuera de un bloque va quedar en el scope global y ese scope es window (cuando programamos para la web).

_Scope Function_ Variables que viven dentro de una funcion y puede ser utilizadas solo dentro de ella.

_Scope Block_ Las variables solo viviran en el bloque de codigo que fue definido. Las keywords LET y CONST trabajan con este scope, por esto es recomendable declarar variables con estas dos keywords.

_Scope Module_ Son las variables que existen en los diferentes modulos que componen una aplicacion.

## **Closures**

Es la combinacion de scope y funciones, permitiendo la creacion de variables privadas puesto que no es un concepto nativo de JavaScript. Ejemplo:

```js
function makeCouter(n) {
  let count = n;

  return {
    increase: function () {
      count = count + 1;
    },

    decrease: function () {
      count = count - 1;
    },

    getCount: function () {
      return count;
    },
  };
}

let counter = makeCouter(8); //Crea un nuevo scope de la funcion makeCounter

counter.increase(); // 9
counter.decrease(); // 8
counter.decrease(); // 7
counter.getCount(); // 7
```

Esta tecnica permite crear valores predefinidos y crear nuevas funciones que interactuen con las variables privadas permitiendo restringir su uso. Los clousers es la tecnica mas utilizada para el desarrollo en JavaScript.
