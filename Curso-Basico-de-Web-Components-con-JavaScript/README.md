# **Apuntes**

## **¿Qué problemas resuelven los Web Components?**

El desarrollo web actual esta plagado de todo un ecosistema basado en JS, existes múltiples frameworks y librerías que nos facilita el desarrollo de aplicaciones web pero no están hechas para coexistir entre ellas.

Aquí nace el concepto de web components basado en un encapsulado de JS vanila dando como resultado una compatibilidad natural.

## **¿Qué son los Web Components?**

Podemos comprar los web components con piezas de lego, codigo encapsulado que reutilizamos constantemente. Los web components son primitivos de bajo nivel que te permiten definir tus propios elementos HTML.

los web components estan construidos con web apis :

- HTML Templates

- Shadow DOM

- Custom Elements

- ES Modules

## **APIs de Web Components**

### **HTML Standard**

Permite definir la etiqueta y hacer que el web component se pueda convertir en una etiqueta que el navegador pueda entender.

Estas etiquetas personalizadas o custom element, se deben crear con cautela puesto que quienes estandarizan HTML están constantemente creando nuevas etiquetas y para que no exista una conflicto las etiquetas personalizadas deben tener mínimo 2 palabras separadas por un `-`, ejemplo, `mapa-geopolitico`, `la-etiqueta-mas-personalizada-del-mundo`.

### **Shadow DOM**

Normalmente se confunde con el virtual DOM que algunas framework y librerías tienen.

El Shadow DOM es generar un encapsulado perfecto permitiendo etiqueta contener código que no coexista con el código de a fuera, imposibilitando la sobre escritura de los estilos.

### **Custom Elements**

Son APIS de JS que permite definir elementos personalizados y su comportamiento, que entonces puede ser utilizado como deseé en la interfaz del usuario.

### **HTML Templates**

Es una sola etiqueta `<template></template>` usada junto con JavaScript. Si utilizamos esta etiqueta en nuestra arquitectura HTML no se va a renderizar y devolverá un document Fragment, ósea es un fragmento del documento y contenido será clonado y renderizado en el HTML.

Por esto debe ser combinado cono JS para generar esta clonación y renderización del componente.

Este proceso agrega mucho performance en el momento del renderizar los nodos en el DOM.

### **ES Modules**

Anteriormente existía una API web llamada HTML Imports que permitía introducir código HTML en otro código HTML, pero no logro ser un estándar en todos los navegadores por lo cual desistieron de el.

Con la llegada de los módulos de ECMAScript 6 lograron exporta e importar código con JavaScript.

Las 4 web APIS son un conjuntos de estándares que facilitan el desarrollo de componentes sin la utilización de frameworks o librerías, otorgando un mayor performance al DOM.

## **Beneficios de Web Components**

### **Reutilizacion**

'Dont Repeat Yourself', El componente es encapsulado y reutilizado multiples veces en cualquier tipo de aplicacion.

### **Legibilidad**

La utilizacion de componentes permite una lectura de codigo mas limpio, puesto que tenemos un codigo mas simple y un enriquecimiento semantico.

### **Mantenibilidad**

Cada componente es escrito y probado individualmente. Al realizar cambios no ponemos en riesgo la aplicacion ya que estos cambios no afectan directamente al aplicativo.

### **interoperabilidad**

Los componentes estan hechos para coexistir con todo el ecosistema web sin ningun limitante, los frameworks y librerias no.

### **Consistencia**

Naturalmente un componente es reutilizable e interoperable logrando una versatilidad en su uso, Quiere decir que nuestro componente puede ser utilizado y personalizado dependiendo de la necesidad del aplicativo.

## **Ciclo de vida de un componente**

Están directamente ligados con el DOM son parte importante del critical rendering path.

### **Constructor**

Nuestro paso numero uno es crear el constructor de nuestras clases, este contendrá y pondrá en memorias todas las variables que utilizaremos para pintar el componente. En este paso no debemos pintar el componente.

### **ConnectedCallback**

Aquí el elemento existe en el DOM y es un nodo de el. En este paso podemos manipularlo.

### **DisconnectedCallback**

Cuando quitamos el componente del DOM, Esto se genera cuando estamos interactuado con el usuario realizando la visualización o eliminando el componente del DOM, Logrando una liberacion de memoria.

### **AttributeChangedCallback**

Es la forma de cambiar los atributos de nuestras etiqueta HTML.

### **AdoptedCallback**

Es un ciclo de vida que rara vez se utiliza ya que esta presente cuando se va renderizar un componente dentro de un iframe.

## **Custom Elements**

Como ya definimos que es custom Elements ahora mostraremos un ejemplo:

```js
// Podemos crear nuestro template fuera de la clase
const template = document.createElement('div');

template.innerHTML = `
  <style>
  .texto {
    color: red;
    font-size: 20px;
   }

    p {
      color: blue;
    }
  </style>
  <p class="texto">Hola Jose Manuel</p>
  <p>Eres el mejor manu no pares de aprender!</p>
`;

// Creamos nuestra componente como una clase extendida por la api HMTLElement
class myELement extends HTMLElement {
  // El contructor es donde creamos las variables a utilizar
  constructor() {
    //Tener acceso a todos los metodos de la api HTMLElements
    super();

    // Creamos una etiqueta de parrafo
    this.p = document.createElement('p');
  }

  //Utilizamos el connectCallback y damos a entender que esto debe ir dentro de la etiqueta personalizada.
  connectedCallback() {
    this.p.textContent = 'Holaa manu';
    this.appendChild(this.p);
    this.appendChild(template);
  }
}
//Definimos nuestra etiqueta con customElements y recibe dos parametros, el nombre de nuestra etiqueta personalizada y de que clase se generará.
customElements.define('my-element', myELement);
```

En nuestro archivo HTML solo debemos llamar el archivo JavaScript y hacer uso de nuestra etiqueta personalizada en el `body`.

```html
<body>
  <my-element></my-element>
  <script src="./ejemplo.js"></script>
</body>
```

## **Template**

Los templates es una etiqueta especial de HTML que clona su contenido y regresa un document document fragment y con JavaScript su contenido sera renderizado:

```js
class myELement extends HTMLElement {
  constructor() {
    super();
  }
  //Creamos un metodo que contendra toda la estructura HTML.
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hola manu de nuevo</h2>
        <div>
          <p>Soy mas texto de ejemplo</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    //llamamos los estilos
    return template;
  }
  // Creamos los estilos
  getStyles() {
    return `    
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }
  //renderizamos la etiqueta template, le decimos que renderice todo los nodos que contiene
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  // Lo renderizamos en la etiqueta personalizada
  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);
```

document fragment y template tienen un problema con los estilos ya que puede entrar en conflicto debido a que su codigo interactua con el ya existente, creando la posibilidad de sobre escribir estilos o accidentalmente usar estilos establecidos.

## **shadow DOM**

Con shadow DOM podemos encapsular los estilos del componente sin tener que interactuar con los estilos fuera del el.

Esto se logra debido a que shadow DOM permite crear una especie de mini DOM que permite encapsular codigo y no sufrir modificaciones.

```js
class myELement extends HTMLElement {
  constructor() {
    super();
    //Llamamos la api de Shadow y lo dejamos en modo 'open', para lograr ver lo que esta dentro de shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>Hola manu de nuevo</h2>
          <div>
            <p>Soy mas texto de ejemplo</p>
          </div>
        </section>
        ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `    
        <style>
          h2 {
            color: red;
          }
        </style>
      `;
  }

  render() {
    // Agregamos nuestro contenido a shadowRoot
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  //renderizamos el contenido.
  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);
```

Si queremos seleccionar un elemento específico no podemos utilizar `document.querySelector`, ahora utilizáremos `shadowRoot.querySelector`.

## **Content Slot**

Permite introducir contenido HTML desde fuera del componente sin entrar a su codigo fuente.

```html
<my-element>Hola soy un texto fuera de my element</my-element>
```

```js
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>
          <slot></slot>
          </h2>
        </section>
        ${this.getStyles()}
      `;
    return template;
  }
```

## **Multi Content Slot**

Podemos introducir diferentes textos a nuestro componente y acomodarlos segun se requiera. Esto permite mas dinamismo a nuestro componentes.

```html
<my-element>
  <!-- A cada uno de nuestros span le pasamos un atributo slot el cual va hacer match el slot name del componente -->
  <span slot="titulo"> Soy el titulo</span>
  <span slot="parrafo"> Soy el texto del parrafo</span>
</my-element>
```

```js
  getTemplate() {
    // Agregamos el atributo name a los slots.
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>
          <slot name="titulo"></slot>
          </h2>
          <div>
          <p>
          <slot name="parrafo">
          </slot>
          </p>
          </div>
        </section>
        ${this.getStyles()}
      `;
    return template;
  }
```

## **Atributos**

Por medio de estos logramos crear un dinamismo mas limpio y entendible, pero debemos tener cuidado con los atributos existentes que algunas etiquetas tienen.

```html
<my-element
  titulo="Hola soy un titulo"
  parrafo="Hola soy el texto del parrafo"
  img="https://avatars3.githubusercontent.com/u/1905708?s=280&v=4/"
></my-element>
```

```js
class myELement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    //Creamos las variables necesarias para traer los atributos que colocaremos en el html. 
    this.titulo = this.getAttribute('titulo');
    this.parrafo = this.getAttribute('parrafo');
    this.img = this.getAttribute('img');
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>${this.titulo}</h2>
          <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} alt="Una imagen"/>
          </div>
        </section>
        ${this.getStyles()}
      `;
    return template;
  }

  getStyles() {
    return `    
        <style>
          h2 {
            color: red;
          }
        </style>
      `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);
```

## **attributeChangedCallback**


