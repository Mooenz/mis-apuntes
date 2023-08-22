# **Curso de Vue.js: Componentes y Composition API**

## **Componentes dinámicos**

Son archivos .vue donde tenemos aisladamente (Single File Component) las partes que tiene un componente de vue con el fin de ser reutilizado. Las partes que lo componen son Template: es la estructura HTML del componente o donde se renderizan otros componentes, Script: es la lógica del componente y Style: es el estilo del componente.

Vue tiene un componente genérico llamado component que nos permite renderizar un componente dinámico, este componente recibe un atributo llamado is que es donde le pasamos el componente que queremos renderizar.

```html
<component is="nombre-componente"></component>
```

Dentro de 'is' podemos usar una variable que contenga el nombre del componente a renderizar y asi podemos aprovechar el componente dinámico.

## **Componentes asíncronos**

Debemos importar desde el objeto global de vue 'defineAsyncComponent', este recibe un callback que retorna el componente a renderizar.

```js
import { defineAsyncComponent } from 'vue';

const asyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
);
```

el objetivo de los componentes asíncronos es que se carguen solo cuando se necesiten.

## **Transiciones entre componentes**

Vue nos permite agregar transiciones entre componentes, estas transiciones es código css que por ejemplo nos permite mostrar como un componente aparece o desaparece al ser activado/desactivado. Creamos un componente llamado 'transition', este tendrá un atributo que recibe un string con el nombre de la transición que queremos usar.

```html
<transition name="fade">
  <menu :show="showMenu"></menu>
</transition>
```

Con css definimos los estilos que se va a mostrar dependiendo del estado de la transición: enter, enter-active, enter-from, enter-to, leave, leave-active, leave-from, leave-to.

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

## **Teleport**

Los teleports son usados para mostrar modales, tooltips, etc. Estos nos permiten renderizar un componente en un lugar diferente al que se encuentra en el DOM. Para usarlos debemos importar desde el objeto global de vue 'Teleport', este recibe un atributo 'to' que recibe un string con el id del elemento donde queremos renderizar el componente.

```html
<teleport to="body">
  <Modal v-if="showModal"></Modal>
</teleport>
```

## **Virtual DOM**

El virtual DOM en vue es una representación en javascript del DOM y es una copia del DOM que se encuentra en memoria, cuando se hace un cambio en el DOM, el virtual DOM se actualiza y luego se compara con el DOM real, si hay diferencias entre el virtual DOM y el DOM real, vue actualiza solo las partes que hayan cambiado. Realizar esto nos ahorra tiempo de procesamiento del navegador, capacidad de memoria y es mucho mas fácil el manejo de todos los elementos de nuestra proyecto.

## **Ciclo de vida de los componentes**

Los componentes de vue tiene diferentes etapas en su ciclo de vida, cada una de estas etapas tiene un hook que nos permite ejecutar código en cada una de estas etapas. Los hooks son funciones que se ejecutan en cada etapa del ciclo de vida de un componente. Los hooks son: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeUnmount, unmounted, errorCaptured. Los hooks se pueden usar en los componentes y en la instancia de vue. Los hooks se pueden usar como funciones o como métodos. Los hooks se ejecutan en el orden en el que se encuentran en el código.

## **Hooks en la instancia de vue**

beforeCreate: Se ejecuta antes de que se cree la instancia de vue, por lo que no tenemos acceso a la instancia de vue ni a los datos del componente.

created: Se ejecuta cuando se crea la instancia de vue, por lo que tenemos acceso a la instancia de vue y a los datos del componente.

beforeMount: Se ejecuta antes de que se monte el componente en el DOM, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

mounted: Se ejecuta cuando se monta el componente en el DOM, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

beforeUpdate: Se ejecuta antes de que se actualice el componente, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

updated: Se ejecuta cuando se actualiza el componente, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

beforeUnmount: Se ejecuta antes de que se desmonte el componente, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

unmounted: Se ejecuta cuando se desmonta el componente, por lo que tenemos acceso a la instancia de vue, a los datos del componente y al DOM.

## **Introducción a Composition API**

Es una interfaz de comunicación que se centra en declarar variables de estado reactivas directamente en el ámbito de una función y componer el estado de varias funciones juntas para manejar la complejidad. Tiene una forma más libre y requiere una comprensión de como funciona la reactividad en vue para ser utilizado de manera efectiva. A cambio, su flexibilidad permite patrones más poderosos para organizar la lógica.

setup: Se ejecuta antes de que se cree la instancia de vue, por lo que no tenemos acceso a la instancia de vue ni a los datos del componente. Ademas, reemplaza de los elementos de ciclo de vida que nos permite gestionar el código de nuestro componente de manera mas eficiente.

## **Ciclo de vida en Composition API**

Este cambio de interfaz de configuración no altera el orden de ejecución de cada una de las partes del ciclo de vida de un componente, pero setup reemplaza a beforeCreate y created. Dentro de setup podemos usar los hooks de ciclo de vida de la instancia de vue.

## **Variables reactivas con ref y reactive**

Para tener variables reactivas usamos ref, recibe como parametro el valor de la variable y retorna un objeto con la propiedad value que contiene el valor de la variable. Para tener objetos reactivos usamos reactive, recibe como parametro el objeto y retorna un objeto con las propiedades del objeto que recibimos como parametro.

```js
import { ref, reactive } from 'vue'

setup() {
  const count = ref(0)

  const state = reactive({
    name: 'Juan',
    lastName: 'Perez'
  })

  return {
    count,
    state
  }
}
```

## **Watch**

Es una función que nos permite ejecutar código cuando una variable reactiva cambia de valor. Recibe como parámetro la variable reactiva que queremos observar y un callback que se ejecuta cuando la variable reactiva cambia de valor. el callback recibe como parámetros el nuevo valor y el valor anterior.

```js
import { ref, watch } from 'vue'

setup() {
  const count = ref(0)

  watch(count, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })

  return {
    count
  }
}
```

## **Computed**

Las funciones computadas es una función reactiva que permite ejecutar código que esta compuesto por varias partes y que en algún momento alguna de las partes cambie de valor. Recibe como parámetro un callback que retorna el valor que queremos obtener. Debemos tener cuidado con el código que se ejecuta dentro de la función computada, pues la ejecución de código reactivo dentro de ella puede generar un bucle infinito.

```js
import { ref, computed } from 'vue'

setup() {
  const count = ref(0)

  const double = computed(() => count.value * 2)

  return {
    count,
    double
  }
}
```

## **Props**

Los props son datos que se pasan desde el componente padre al componente hijo. Los props son inmutables, es decir, no se pueden modificar desde el componente hijo. Los props se definen como un objeto dentro del objeto setup, este objeto debe retornar los props que queremos usar en el componente hijo. Los props se pueden definir como un objeto o como un array. Por defecto props no es reactivo, por lo que si queremos que sea reactivo debemos usar ref o toRefs.

```js
import { ref } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const count = ref(props.count)

    return {
      count
    }
  }
}
```

# **Context API**


# **Provide / inject**

Es la forma que Vue nos da para comunicar dos componentes que no están relacionados directamente. Inject por defecto no es reactiva. Su sintaxis en composition API es la siguiente:

```js
import { provide, inject } from 'vue'

const App = {
  setup() {
    provide('name', 'Juan')
  }
}

const Component = {
  setup() {
    const name = inject('name')

    return {
      name
    }
  }
}
```

## **Template refs**

Es una forma de acceder a elementos del DOM desde el template. Su sintaxis en composition API es la siguiente:

```js
import { ref, onMounted } from 'vue'

const Component = {
  setup() {
    const title = ref(null)

    onMounted(() => {
      console.log(title.value)
    })

    return {
      title
    }
  }
}
```

# **Script setup**

Es una forma de escribir componentes en vue, que nos permite escribir el componente en una sola sección. todo lo que este dentro de  la etiqueta script junto con la propiedad setup se retornara automáticamente ahorrándonos la configuración de export default. Su sintaxis es la siguiente:

```js
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
```
