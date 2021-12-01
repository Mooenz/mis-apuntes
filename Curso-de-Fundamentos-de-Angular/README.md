# **Curso de Fundamentos de Angular**

## **Instalación de Angular CLI**

Debemos de tener las versiones estables de node y npm.

Mediante el comando `npm install -g @angular/cli`, hacemos la instalacion global de angular. Al terminar verificamos que todo este correcto con el comando `ng version`.

Para iniciar o crear un nuevo proyecto usamos el comando `ng new mi-proyecto`, al dar enter se inicia la instalacion y nos preguntara si necesitaremos angular routing en nuestro proyecto y que tipo de preprocesador queremos usar, obviamente para cada proyecto las opciones a escoger varia.

Al terminar la instalacion entramos a la carpeta donde se encuentra el nuevo proyecto y ejecutamos `ng serve` con el fin de ejecutar el proyecto y este nos indicara una direccion donde nuestro proyecto se esta ejecutando.

## **Comandos de Angular para correr tu proyecto**

- `ng serve` que ejecuta nuestro proyecto
- `ng serve -o` Ejecuta el proyecto y abre el navegador
- `ng serve -o --port=8800` ejecuta el proyecto en el puerto que le indiquemos
- `ng version` nos muestra una informacion mas detallada como las dependencias mas robustas que angular utiliza y sus versiones.

## **Estructura de un proyecto en Angular**

Como todo proyecto frontend iniciamos con la carpeta principal que es `/src` en ella tenemos nuestro componentes, archivos html, css, el routing, etc. podemos considerarla como el corazon de nuestra aplicacion.

- `.browserlistrc` le indica a angular en que versiones de nuestros navegadores debe tener compatibilidad para nuestra aplicacion
- `.editorconfig` Es una normativa para la configuracion de nuestro editor de codigo, para que sea automatica esta configuracion debemos tener un plugin llamado `EditorConfig`
- `tsconfig.json` Es la configuracion de TypeScript para nuestro proyecto
- `angular.json` Permite a angular trabajar en diferentes ambientes, osea, tener ambientes para desarrollo, produccion o QA
- Si queremos fortalecer el desarrollo de angular debemos contar con el plugin llamado `Angular Language Service` Nos ayuda a corregir multiples errores de configuracion de angular.

- Es recomendado agregar un archivo de configuracion llamando `.nvmrc` podemos indicarle a node version manager que version de node necesitamos para nuestro proyecto.

## **String interpolation**

Es una forma de pasar a renderizar datos desde la logica de nuestro componente a la vista mediante el doble corchete `{{Variable}}`.

```ts
<h2>{{'Hola mundo'}}</h2>
```

Dentro de los doble corchetes podemos ejecutar codigo JavaScript:

```ts
<h2>{{'Hola mundo'.repeat(2)}}</h2>
<p> 3 + 3 = {{3 + 3}}</p>
```

Angular divide su logica de negocio en renderizado del componente, logica del componente y estilos del componente.

Para ligar estos archivos usa un decorador que se encuentra en la logica del componente, y lo configura de la siguiente manera:

```ts
@Component({
  selector: 'app-root', //
  templateUrl: './app.component.html', // Renderiza el componente
  styleUrls: ['./app.component.scss'], // Estilos
})
```

Tambien podemos encontrar una clase con el nombre de nuestro componente y en el podemos aplicar codigo TypeScript:

```ts
export class AppComponent {
  name = 'Mooenz';
  projects = 24;
  img = 'https://source.unsplash.com/random';
}
```

Esta informacion la podemos renderizar de la siguiente manera:

```js
<h3>Hola, soy {{name}} y tengo {{projects}} proyectos</h3>
<img src={{img}} alt="imagen" width="300px">
```

Las variables que se encuentran en la `clase AppComponent` deben ser publicas, de lo contrario al ser privadas seran inaccesibles.

## **Property Binding**

Es la forma de modificar el valor de atributos desde el controlador de nuestro componente. Para realizar estos cambio debemos colocar el atributo entre corchetes cuadrados"[]" y en valor colocamos la varible que la modificara:

```js
// Datos desde el controlador
export class AppComponent {
  name = 'Mooenz';
  projects = 24;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Manu',
    age: 29,
    avatar: 'https://source.unsplash.com/random',
  };
```

```html
<!--Traemos los valores desde nuestro controlador-->
<button [disabled]="btnDisabled">Hola soy un boton</button>

<input type="text" [value]="person.name" [id]="person.age">

<progress max="100" [value]="projects"></progress>

<img [src]="person.avatar" alt="img" width="100">
```

El uso de property binding es para configurar propiedades de elementos html, el estado de un boton, el value de un input y string interpolation para renderizar strings.

## **Introducción al Event Binding de Angular**

Con una notacion simple podemos escuchar los eventos que queramos, esto se logra en la siguiente situacion:

Queremos incrementar o disminuir un contador:

```ts
//logica del controlador
export class AppComponent {
contador = 0;
}

aumentar() {
this.contador += 1;
}

disminuir() {
this.contador -= 1;
}
```

En el archivo html colocamos:

```html
<p>Contador es igual a: {{contador}}</p>
<button (click)="aumentar()">Aumentar</button>
<button (click)="disminuir()">Disminuir</button>
```

## **Otros eventos que puedes escuchar**

Existe mas eventos que podemos escuchar:

```js
//evento scroll
(scroll) = "nombreMetodo($event)" //Enviamos el evento como argumento

nombreMetodo(event: Event) { //indicamos que es de tipo evento
const element = event.target as HTMLElement; // se comporte como un HTMlElement
console.log(element.scrollTop) //mostramos la posicion del scroll
}

// evento keyUp
(keyup)="nombreMetodo($event)

nombreMetodo(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value; //igualamos el valor de person.name al valor que ponemos en el input
}
```

## **Data binding con ngModel**

El Data binding es una combinacion entre el event binding y setiar una propiedad. Es catalogado como un enlace de doble via. Para lograr esta combinacion debemos primero configurar una propiedad `[]` y luego colocamos el evento `(ngModel)`.

ngModel es muy beneficioso en los input ya que esta pendiente si un campo es valido o no, la interaccion de que el usuario tiene con el input y ademas sincroniza el valor.

Para hacer un uso mas correcto de ngModel, habilitaremos el modulo `Angular Forms`, el proceso es el siguiente:

- importamos un nuevo paquete en el archivo `app/app.module.ts`, este paquete se llama 'FormsModule' y esta alojado en '@angular/forms'
- luego en el array de configuracion 'imports' que esta en el '@NgModule' agregamos un nuevo modulo de importacion.
- Listo ya podemos hacer uso de NgModels

```js
// controlador
export class AppComponent {
  person = {
    name: 'Manu',
    age: 29,
    avatar: 'https://source.unsplash.com/random',
  };
}
  //hmtl render
<p>Nombre = {{person.name}}</p>
<input type="text" [(ngModel)]="person.name" />
```

ngModel nos da un estado de si una propiedad es valida o no:

```js
<p>Valid? {{nameInput.valid}}</p>
<input type="text" required #nameInput="ngModel" [(ngModel)]="person.name" />
```

Tambien podemos validar un rango de edad:

```js
<input type="number" max="18" min="10" #ageInput="ngModel" [(ngModel)]="person.age" />
<p>Valid {{ageInput.valid}}</p>
```

Estas validacion se logran gracias a las validaciones nativas de HTML. Angular forms es un paquete muy potente.

## **Uso de \*ngIf**

ngIf es una estructura de control que funciona facilmente, tenemos un elemento y dentro de el tiene una directiva llamada '\*ngIf' junto con la condicional la cual si se cumple mostrara el elemento:

```html
 <p *ngIf="condicional"></p>
```

Ejemplo:

```js
// controlador
export class AppComponent {
  person = {
    name: 'Manu',
    age: 29,
    avatar: 'https://source.unsplash.com/random',
  };
}
  //hmtl render
<input type="text" required [(ngModel)]="person.name">
<p *ngIf="person.name === 'mooenz'">Soy Mooenz</p> // Muestra el contenido de la etiqueta p si se cumple la sentencia
```

### **Operadores en \*ngIf**

El uso de operadores en esta estructura de control, es suprema mente facil:

```html
<p *ngIf="person.name === 'manu' && person.age === 29">Soy Mannu</p> <!-- Muestra el contenido de la etiqueta p si se cumple las dos sentencias-->
```

\*nhgIf es lo mismo que un if, por ende tambien tiene un bloque de tipo else que se realizaria de la siguiente manera:

```html
<p *ngIf="person.name === 'manu' && person.age === 29; else myBlock">Soy Mannu</p> <!-- Muestra el contenido de la etiqueta p si se cumple las dos sentencias, si no se cumple muestra la sentencia else que esta dentro de un ng-template-->
<ng-template #myBlock>
  <p>Bloque de else</p>
</ng-template>
```

## **Uso de \*ngFor**

ngFor nos permite iterar en un array de elementos. Ejemplo:

```js
// Controlador
export class AppComponent {
names: string[] = ['Jose', 'Cata', 'Mooenz'];
}
newName: string = ''; // Guarda nuevo nombre a agregar

agregarNombre() { //Funcion permite agregar nuevos nombres
  this.names.push(this.newName); // Agrega el nuevo nombre
  this.newName = ''; // Limpia el input
}

eliminarNombre(index: number) { //Funcion que permite eliminar nombres segun su indice
  this.names.splice(index, 1); //Elimina el nombre segun su indice
}
```

```html
// Html render
<input type="text" required [(ngModel)]="newName"> <!--Recibe los nuevos nombres-->
<button (click)="agregarNombre()">Agregar nombre</button> <!--Boton ejecuta la funcion agregar nombre-->
<ul>
  <li *ngIf="names.length === 0">No hay nombres</li> <!--li se muestra si el array de nombre esta vacio-->
  <li *ngFor="let name of names; index as i"> <!--ngFor-->
    {{i}} {{name}}
    <button (click)="eliminarNombre(i)">Eliminar</button> <!--Boton ejecuta la funcion eliminar nombre-->
  </li>
</ul>
```

## **\*ngFor para arrays**

¿Como podriamos renderizar un array de objetos?, bueno en esta ocasion utilizariamos \*ngFor de la siguiente manera:

```js
// Controlador
productos = [
  //Array de objetos
  {
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg',
    category: 'all',
  },
  {
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.jpg',
  },
  {
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/images/album.jpg',
  },
  {
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg',
  },
  {
    name: 'Casa para perro',
    price: 34,
    image: './assets/images/house.jpg',
  },
  {
    name: 'Gafas',
    price: 3434,
    image: './assets/images/glasses.jpg',
  },
];
```

Creamos la estructura que contendra cada objeto en nuestro HTML

```html
<div>
  <div *ngFor="let producto of productos">
    <!--Elemento que va iterar-->
    <img width="250px" [src]="producto.image" alt="imagen" /> // Imagen
    <h2>{{producto.price}}</h2>
    <!--Precio-->
    <p>{{producto.name}}</p>
    <!--Nombre-->
  </div>
</div>
```

En este punto podemos agregar las propiedades del tipado en TypeScript y esto lo logramos creando interfaces, creamos un archivo llamado `producto.model.ts` con el siguiente contenido:

```ts
export interface Producto {
  name: string;
  price: number;
  image: string;
  category?: string; // '?' significa que categoria es opcional
}
```

lo importamos a nuestro controlador y lo agregamos como un tipo de dato a nuestro array de objetos:

```ts
 productos: Producto[] = [ // Indicamos cada objeto tiene como interfaz a Productos
   {'objeto'},
   {'objeto'},
 ]
```

## **Uso de ngSwitch**

ngSwitch se debe usar como property binding en el elemento padre y cada caso deben ser los elementos hijos, ejemplo:

```html
<input type="text" required [(ngModel)]="person.name" />
<div [ngSwitch]="person.name">
  <p *ngSwitchCase="'Mooenz'">Hola soy Mooenz</p>
  <p *ngSwitchCase="'Manuel'">Hola soy Manuel</p>
  <p *ngSwitchCase="'Jose'">Hola soy Jose</p>
  <p *ngSwitchDefault>No hace match</p>
</div>
```

## **Angular Devtools**

es un plugin para chrome que nos ayuda hacer debugging de una manera mucho ms dinamica, podemos anclarla a nuestras stack de extensiones y cuando detecte que una pagina esta hecha con angular, su icono se coloreara de rojo.

Ademas, cuando inspeccionamos paginas hechas con angular nos permite contar con una opcion especial donde estara todos los elementos que componen la app.

## **Class and style**

En angular podemos tener un dinamismo con las clases creadas en nuestro css, ejemplo :

```html
<input
  type="text"
  required
  #nameInput2="ngModel"
  [(ngModel)]="person.name"
/><!-- Desde el ngModel se evalua si es campo esta vacio o no, esto se logra con las validaciones nativas de html-->
<p class="message-error" [class.active]="nameInput2.invalid">
  El campo es requerido
</p>
<!-- mediante el property binding usamos la sentencia class y activar una clase segun una condiciona, la condicional es la variable nameInput2.invalid-->
```

Tambien mediante un binding podemos agregar estilos en linea:

```html
<input type="text" required #nameInput3="ngModel" [(ngModel)]="person.name" />
<!--Validacion nativa desde el html-->
<p [style.font-style]="nameInput3.invalid ? 'italic' : 'normal'">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis
  nisi, provident cum molestias ea!
</p>
<!-- mediante un ternario preguntamos si nameInput3.invalid es valido y de ser correcto style.font-style = 'italic' y si es falso es igual a 'normal'-->
```

otro ejemplo:

```html
<div class="container">
  <div>
    <input type="text" [(ngModel)]="widthImg" />
    <!--Captura la informacion y modifica el valor de la variable 'widthImg' mediante el ngModel-->
  </div>
  <div>
    <img
      [style.width.%]="widthImg"
      [src]="person.avatar"
      alt="img"
      width="100"
    />
    <!--aplica el nuevo valor de 'widthImg' mediante el binding style, permitiendo agregar un nuevo width ya sea en porcentaje u otra unidad de medida-->
  </div>
</div>
```

_Ojo_ los template se puede usar despues de ser declaradas, esto quiere decir que tiene la misma tematica que el hoisting de JavaScript, es por esto que debemos leer muy bien los errores que angular nos muestra en pantalla o consola.

El uso de clases dinamicas y estilos en linea es recomendable usar otro tipo de soluciones ya que estas estan limitadas al uso de templates que hace seguimiento a las variables.

## **NgClass y NgStyle**

Son dos directivas que sirven para aplicar clases de css o css directo. NgClass y NgStyle solucionan el problema de aplicar multiples estilos que con binding class o style quedarian muy cortas, ejemplo:

_NgClass_

```html
<input type="text" required #nameInput4="ngModel" [(ngModel)]="person.name" />
<!--input donde se valida si esta vacio o no mediante la validacion nativa de html 'required', '#nameInput4' guarda el booleano--->
<hr
  class="line-error"
  [ngClass]="{
    valid: nameInput4.valid,
    invalid: nameInput4.invalid
  }"
/>
<!--Aplica los estilos de la clase 'valid' o 'invalid' dependiendo si nameInput4 sea 'true' o 'false'-->
```

_NgStyle_

```js
// Controlador
  box = {
    width: 100,
    height: 100,
    bg: 'red',
  };
```

```html
<!--Render-->
<div class="container">
  <div>
    <!--agregan binding para escuchar los cambios de las 3 variables-->
    <input type="number" [(ngModel)]="box.width" />
    <!--agrega un binding a width-->
    <input type="number" [(ngModel)]="box.height" />
    <!--agrega un binding a height-->
    <input type="color" [(ngModel)]="box.bg" />
    <!--agrega un binding a background color-->
  </div>
  <div>
    <!--agregamos los estilos segun las variables del objeto box, estos son estilos en linea-->
    <div
      [ngStyle]="{
        'width.px': box.width,
        'height.px': box.height,
        'background-color': box.bg,
        'display': 'block'
      }"
    ></div>
  </div>
</div>
```

## **Crear un formulario**

```html
<!--Render-->
<!--mediante el evento ngSubmit ejecuta metodo onRegister-->
<form (ngSubmit)="onRegister()" #myForm="ngForm"> 
  <div class="input-group">
    <label for="name">Nombre</label>
    <input
      type="text"
      required
      id="name"
      name="name"
      [(ngModel)]="registro.name"
    />
    <p>Mensajes de error</p>
  </div>

  <div class="input-group">
    <label for="email">Email</label>
    <input
      type="email"
      required
      id="email"
      name="email"
      [(ngModel)]="registro.email"
    />
    <p>Mensajes de error</p>
  </div>

  <div class="input-group">
    <label for="password">Password</label>
    <input
      type="password"
      required
      id="password"
      name="password"
      [(ngModel)]="registro.password"
    />
    <p>Mensajes de error</p>
  </div>
  <button [disabled]="myForm.invalid" type="submit">Registrar</button>
  <button type="button">Accion</button>
</form>
```
