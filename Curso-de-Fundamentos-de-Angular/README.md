# **Curso de Fundamentos de Angular**

## **Instalación de Angular CLI**

Debemos de tener las versiones estables de node y npm.

Mediante el comando `npm install -g @angular/cli`, hacemos la instalacion global de angular. Al terminar verificamos que todo este correcto con el comando `ng version`.

Para iniciar o crear un nuevo proyecto usamos el comando `ng new mi-proyecto`, al dar enter se inicia la instalacion y nos preguntara si necesitaremos angular routing en nuestro proyecto y que tipo de preprocesador queremos usar, obviamente para cada proyecto las opciones a escoger varia.

Al terminar la instalacion entramos a la carpeta donde se encuentra el nuevo proyecto y ejecutamos `ng serve` con el fin de ejecutar el proyecto y este nos indicara una direccion donde nuestro proyecto se esta ejecutando.

## **Comandos de Angular para correr tu proyecto**

- `ng serve` que ejecuta nuestro proyecto
- `ng serve -o` Ejecuta el proyecto y abre el navegador
- `ng serve -o --port=8800`ejecuta el proyecto en el puerto que le indiquemos
- `ng version` nos muestra una informacion mas detallada como las dependencias mas robustas que angular utiliza y sus versiones.

## **Estructura de un proyecto en Angular**

Como todo proyecto frontend iniciamos con la carpeta principal que es `/src` en ella tenemos nuestro componentes, archivos html, css, el routing, etc. podemos considerarla como el corazon de nuestra aplicacion.

- `.browserlistrc` le indica a angular en que versiones tiene que ser compatible nuestra aplicacion
- `.editorconfig` Es una normativa para la configuracion de nuestro editor de codigo, para que sea automatica esta configuracion debemos tener un plugin llamado `EditorConfig`
- `tsconfig.json` Es la configuracion de TypeScript para nuestro proyecto
- `angular.json` Permite a angular trabajar en diferentes ambientes, osea, tener ambientes para desarrollo, produccion o QA
- Si queremos fortalecer el desarrollo de angular debemos contar con el plugin `Angular Language Service` Nos ayuda a corregir multiples errores de configuracion de angular.

- Es recomendado agregar un archivo de configuracion llamando `.nvmrc` podemos indicarle a node version manager que version de node necesitamos para nuestro proyecto.

## **String interpolation**

Es una forma de pasar a renderizar datos desde la logica de nuestro componente a la vista mediante el doble corchete `{{Variable}}`.

```ts
<h2>{{'Hola mundo'}}</h2>
```

Dentro de los doble corchetes podemos ejecutar codigo JavaScript:

```ts
<h2>{{'Hola mundo'.repeat(2)}}</h2>
<p> 3 + 3 = {{3 +3}}</p>
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

Las variables que se encuentran en la `clase AppComponent` deben ser publicas.

## **Property Binding**

Es la forma de modificar el valor atributos desde el controlador de nuestro componente. Para realizar estos cambio debemos colocar el atributo entre corchetes cuadrados"[]" y en valor colocamos la varible que la modificara:

```ts
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

```ts
//Traemos los valores desde nuestro controlador
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

```js
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

El Data binding es una combinacion entre el event binding y setiar una propiedad. Es catalogado como un enlace de doble via. Para lograr esta combinacion debemos primero configurar una propiedad `[]` y luego colocamos el evento que para este ejemplo sera `(ngModel)`.

ngModel es muy beneficioso en lso input ya que esta pendiente si un campo es valido o no, la interaccion de que el usuario tiene con el input y ademas sincroniza el valor.

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

## **Uso de (*ngIf)**

ngIf es una estructura de control que funciona facilmente, tenemos un elemento y dentro de el tiene una directiva llamada '*ngIf' junto con la condicional la cual si se cumple pues mostrara el elemento:

```js
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

  //hmtl render
<input type="text" required [(ngModel)]="person.name">
<p *ngIf="person.name === 'mooenz'">Soy Mooenz</p>
```

