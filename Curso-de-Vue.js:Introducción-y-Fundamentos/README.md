# **Curso de Vue.js: Introducción y Fundamentos**

## **¿Qué es Vue.js?**

Es un framework progresivo para construir interfaces de usuario. Fue creado por Evan You. Tiene el mismo nivel de importancia que React y Angular. Es un framework que se puede utilizar para crear aplicaciones web complejas y aplicaciones de una sola página.

## **Fundamentos de componentes**

El desarrollo basado en componentes, la intención es abstraer todas las partes de un software que se encapsulan o aislados en forma de componentes que interactúen entre si mediante una interfaz. La comunicación de los componentes son constante para sincronizar la información.

## **Componente ui**

Son elementos alojados en la interfaz de nuestras aplicaciones. Los componentes UI son los que se encargan de la interacción con el usuario.

## **Partes de un componente ui**

Como primera medida tenemos la vista que es la parte que el usuario vera y interactuara. Luego tenemos el estado ya que el componente puede tener varios estados dependiendo de la interacción del usuario, si el componente esta duplicado cada uno de ellos debe tener un estado independiente. Por ultimo tenemos la interfaz que permite ejecutar alguna función o acción que se ejecutara en el momento de interactuar con el componente.

## **Patrón de MVVM**

Es un patrón de arquitectura de software que nos permite separar la interfaz de usuario de la lógica de negocio. MVVM significa Modelo Vista Vista Modelo. El modelo es la representación de los datos con los que se trabaja, la vista es la interfaz de usuario y el modelo de vista es el intermediario entre la vista y el modelo.

Vista: Parte que el usuario ve / ViewModel:Es un agente que sincroniza la vista con el modelo en ambas direcciones, esta sincronización se logra por medio del estado y del input(interacciones que pueden ser eventos del usuario o inputs del usuario). / Model: Datos con los que se trabaja.

## **Two-way data binding**

Es una forma de sincronizar la vista con el modelo de una forma transparente para el desarrollador. Esto se realiza con la directiva v-model

## **Interpolación de datos**

En Vue si necesitamos visualizar variables en nuestro html debemos hacerlo con {{}} doble llave y dentro de ellas la variable que deseamos mostrar.  

## **Directivas**

Las directivas son atributos especiales agregados o complementados a nuestro HTML, estos atributos nos permite manipular funcionalidades del DOM, mostrar atributos o propiedades HTML de forma dinámica. Las directivas se identifican por el prefijo v-.

Lista de directivas:  

- v-text: Nos permite mostrar el valor de una variable en el HTML.
- v-html: Nos permite mostrar el valor de una variable en el HTML pero con la diferencia que si la variable contiene etiquetas HTML estas serán renderizadas.
- v-show: Nos permite mostrar u ocultar elementos del DOM.
- v-once: Nos permite renderizar el valor de una variable en el HTML una sola vez.
- v-on: Nos permite escuchar eventos del DOM para ejecutar métodos de nuestro componente.
- v-bind: Nos permite enlazar el valor de una variable a un atributo HTML.
- v-model: Nos permite enlazar el valor de una variable a un elemento de un formulario.

También podemos cortar la forma en que llamamos estas directivas, por ejemplo, para la directiva v-bind podemos llamarla solo con : y para v-on podemos llamarla solo con @. ":" para atributos y "@" para eventos.

## **Propiedades Computadas**

Las propiedades computadas son funciones que nos permiten ejecutar código para obtener un resultado. Estas propiedades se almacenan en la sección de computed de nuestro componente. Estas propiedades se ejecutan cuando alguna de las variables que se utilizan dentro de la función cambia. Al utilizar estas propiedades le estamos otorgando a vue una funcionalidad especial que se actualizara cada vez que algunas de las variables que se utilizan dentro de la función cambie.

## **Watchers**

Los watchers son funciones que nos permiten ejecutar código cuando alguna variable que se encuentre en la sección de watch cambie. Los watchers se almacenan en la sección de watch de nuestro componente. Los watchers reciben dos parámetros, el primero es el valor nuevo y el segundo es el valor anterior. Normalmente un watcher deben ejecutar una sola acción, si se necesita ejecutar varias acciones se recomienda utilizar una propiedad computada o ejecutar un método.

## **Renderizado condicional**

Mediante la directiva v-if podemos renderizar elementos del DOM de forma condicional. Esta directiva recibe una expresión que debe retornar un valor booleano. Si el valor es true el elemento se renderizara y si el valor es false el elemento no se renderizara. También podemos utilizar la directiva v-else para renderizar un elemento del DOM cuando la expresión de v-if sea false. También podemos utilizar la directiva v-else-if para renderizar un elemento del DOM cuando la expresión de v-if sea false y la expresión de v-else-if sea true.

### **Directivas condicionales**

- v-if: Nos permite renderizar elementos del DOM de forma condicional.
- v-else: Nos permite renderizar elementos del DOM de forma condicional cuando la expresión de v-if sea false.
- v-else-if: Nos permite renderizar elementos del DOM de forma condicional cuando la expresión de v-if sea false y la expresión de v-else-if sea true.

## **Renderizado de listas**

En la renderización de listas debemos user la directiva v-for dentro del elemento padre o contenedor de los items a mostrar. Esta directiva recibe dos parámetros, el primero es el item que se esta iterando y el segundo es el index del item que se esta iterando. También podemos utilizar la directiva v-for para iterar un objeto, en este caso el primer parámetro sera el valor del item y el segundo parámetro sera el key del item. Para evitar problemas de renderizado de los items debe agregar un atributo key con un valor único a cada item, podemos usar el indice como elemento identificador o usar algun elemento propio del item que no se repita.

## **Comunicación entre componentes (Padre a Hijo)**

La comunicación entre componentes padre a hijo se realiza por medio de las props. Los props es información de cualquier tipo de dato enviada especialmente de manera descendente, el componente recibir esta información y hace uso de ella ya sea mostrándola en pantalla o usándola para generar alguna acción. Existe una mala practica y es la modificación de las props desde el componente hijo cambiando la información enviada sin comunicarle al componente padre.

## **Comunicaciones entre componentes (Hijo a Padre)

Para solucionar el problema anterior debemos emitir al componente padre el cambio realizado, estos se puede realizar con el método "$emit" que permite ejecutar alguna acción que permita informar el cambio realizado en las props enviadas.

## **Custom v-model**

Con v-model podemos crear una conexión entre dos elementos de nuestra ui. Podemos colocar como ejemplo la conexión que puede existir entre un input y una caja de texto, en el momento de escribir en nuestro input y la caja de texto se actualiza o muestra lo escrito en el input, v-model permite crear esta conexión.

## **Comunicación con componentes profundos**

Un componente profundo es aquel componente que se no tiene una comunicación directa con el componente principal o un componente donde se ejecuta la acción de comunicación (comunicación entre Abuelo y Nieto). Para lograr esta comunicación hacemos uso de Provide y inject. Con provide logramos "proveer" el dato que necesitamos compartir en un entorno global de mi aplicación, e "inyectamos" los datos obtenidos con inject al componente que recibirá la información compartida. Debemos tener en cuenta que al momento de hacer uso del provide, este se debe hacer como una función ya que le estaremos permitiendo a Vue ejecutar el provide cada vez que exista un cambio, generando reactividad en nuestros componentes.

## **Instancias de componentes**

Vue con el objetivo de tener un control nuestra aplicación, crea instancias o copias de nuestros componente con el fin de interactuar con vue y JavaScript de forma progresiva.
