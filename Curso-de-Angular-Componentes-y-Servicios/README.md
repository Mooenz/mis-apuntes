# **Curso de Angular: Componentes y Servicios**

## **¿Qué son los componentes?**

Son las partes mas importantes y los bloques principales de nuestra aplicacion ya que es una mala practica tener toda la logica de nuestra app en un solo archivo.

Normalmente nuestra app se divide en varios componentes con responsabilidades unicas y estilos individuales.

Un componente esta dividido en 4 archivos:

- Archivo enfocado en nuestro HTML : `nombreArchivo.component.html`
- Archivo para nuestros estilos (css, sass, stylus, postcss, scss) : `nombreArchivo.component.scss`
- Archivo que se auto genera para realizar pruebas unitarias : `nombreArchivo.component.spec.ts`

- Archivo que tiene toda la logica que une el HTML con nuestro estilos : `nombreArchivo.component.ts`

Con el CLI de angular podemos crear componentes automaticamente con los siguientes comandos, `ng generate component components/todo` o de una forma mas compacta `ng g c components/todo`. `components/todo` es la ruta donde se generara el nuevo componente.

Un componente esta dividido en varias partes, dentro de nuestro archivo `nombreArchivo.component.ts` que contiene toda la logica de nuestro componente, tiene un `decorador` que indica cuales son los archivos ligados y como podemos llamar nuestro componente en otro componentes, tiene una estructura de la siguiente manera:

```ts
@Component({
  selector: 'app-root', //De esta forma llamamos a nuestro componente
  templateUrl: './app.component.html', // Archivo HTML ligado
  styleUrls: ['./app.component.scss'], // Archivo de estilos ligado (SCSS)
})
```

Para usar un componente desde otro componente usamos el selector, para nuestro ejemplo el selector es `app-root` y este debe estar como un elemente de HTML `<app-root></app-root>`

## **Uso de Inputs**

Se usan los inputs para pasar informacion desde el componente padre al componente hijo.

Desde la logica del componente hijo importamos un decorador llamado `@Input()`
el cual se pondra junto a la variable que realizara el papel de atributo

Ejemplo:

```ts
// Logica componente hijo
// Creamos una variable que contendra la info que se enviara por parametro
import { Component, OnInit, Input } from '@angular/core';

export class TodosComponent implements OnInit {
  @Input() variableComponenteHijo: string = 'Valor desde componente padre';
}
```

```html
<!-- Desde el HTML padre enviamos la informacion -->
<app-todos variableComponenteHijo="Valor desde componente padre"></app-todos>
```

Podemos hacerlo mucho mas dinamico:

```html
<!-- HTML padre -->
<app-todos variableComponenteHijo="Valor desde componente padre"></app-todos>
<input
  [(ngModel)]="variableDinamicaPadre"
  type="text"
  placeholder="Que enviaras?..."
/>
```

```ts
// Logica padre
import { Component, OnInit, Input } from '@angular/core';

export class TodosComponent implements OnInit {
  variableDinamicaPadre: string = 'Esto es un ejemplo';
}
```

Logramos crear una conexion instantanea con el data binding para `variableDinamicaPadre`.
