# **Curso de Frontend Developer**

## **¿Qué es HTML y CSS? ¿Para qué sirven?**

HTML es un lenjuaje de marcado de himpertexto y otorga la estructura de la pagina web.

CSS significa Hojas de estilo en cascada, no da vida a la pagina web, osea que podemos darle estilos a la pagina web.

Ambos lenjuages son un complemento para construir los sitios web.

## **Morores de render: de arachivos a pixels**

Cada navegador tiene un motor que transforma el codigo para que el navegador interpreste lo que se quiere pintar en la pantalla.

- Chrome : Blink
- Edge : Edge html
- Safari : Webkit
- Firefox : Gecko

El motor realiza estos 5 pasos para el renderizado:

- Tranforma el HTML en objetos que el navegador entiene es llamado DOM que basicamente es una especie de arbol de nodos.
- Calcula los estilos que va en los nodos del DOM.
- Calcula las dimensiones de cada nodo del DOM, en que lugar van y que tamaño tendra.
- Pinta las cada nodo del DOM.
- Toma una imagen de cada nodo del DOM y lo muestra en pantalla.

## **Anatomía de un documento HTML y sus elementos**

Un elemento HTML tiene esta contituido por dos etiquetas una de apertura y otra de cierre y en la mitad esta su contenido :

```html
<h1>HOLA</h1>
```

Existen etiquetas que no tienen etiquetas de cierre como :

```html
<img />
```

Los elementos puede tener atributos que son diferentes para cada tipo de etiqueta. Un atributo va dentro de la etiqueta de apertura y su nomenclatura es la siguiente :

```html
<img src="./imagen.png" width="300px" alt="es una imagen" />
```

Tambien se puede presentar el anidamiento de etiquetas :

```html
<section>
  <div>
    <h1>HOLA</h1>
  </div>
  <img src="./imagen.png" width="300px" />
</section>
```

Esta es la estuctura principal de nuestros documentos html :

```html
<!-- Etiqueta principl -->
<!DOCTYPE html>
<!-- Indicamos el lenguaje -->
<html lang="en">
  <!-- head contiene informacion inplicita para el navegador como el titulo -->
  <head>
    <!-- Este titulo se muestra en la pestaña del navegador -->
    <title>Document</title>
  </head>
  <!-- Esta etiqueta es el cuerpo de la web, contiene nuestra web -->
  <body>
    <h1>Hola</h1>
    <p>Vamos hacer una lista de cosas:</p>
    <ol>
      <li>Casa</li>
      <li>Carro</li>
      <li>Pelota</li>
      <li>Cuaderno</li>
      <li>Lapiz</li>
    </ol>
  </body>
</html>
```

## **¿Qué es HTML semántico?**

Nos va indicar que utilicemos etiquetas adecuadas para cada uno de los elementos ya que nos traera beneficios como :

- Accesibilidad
- SEO, posicionamiento en busquedas.
- Tendremos nuestro codigo mucho mas legible.

## **Etiquetas de HTML más usadas**

Estas son las etiquetas mas utilizadas :

### **LATOUT**

Es el diseño completo de nuestra web.

- HEADER = inicio de la pagina
- NAV = barra de navegacion
- SECTION = seccion de la web
- ARTICLE = articulo
- ASIDE = barras laterales de la web
- FOOTER = pie de pagina

### **ENLACES**

- a = ancla a otra seccion de la misma pagina o otra pagina.

### **TEXTOS**

- h1 ... h6 = titulos segun su tamaño
- p = parrafo o contenido
- span = ayuda darle un estilo diferente dentro de un parrafo

### **IMAGENES Y VIDEOS**

- IMG
- SVG
- IFRAME
- VIDEO

### **FORMULARIOS**

- FORM = estuctura inicial de todo el formulario
- INPUT = captura informacion
- LABEL = titulo del input
- BUTTON = da una accion

### **LISTAS**

- UL = lista desordenada
- OL = lista ordenada
- IL = item de la lista

## **Anatomía de una declaración CSS: selectores, propiedades y valores**

Un selector es un puente que comunica HTML con CSS, donde le estamos diciendo que elemento queremos aplicar propiedades.

La anatomia es la siguiente, tenemos el selector y este tiene propiedades contenidas por dos corchetes, estas propiedades tiene unos valores que se cierran con un `;`.

## **Tipos de selectores: básicos y combinadores**

Los tipos de selectores básicos son :

- De tipo : es literalmente la etiqueta del elemento `div`, modifica todos las etiquetas del mismo nombre.
- De clase : usarmos el nombre del atributo clase `.clase`, puede ser usado en diferentes elementos.
- De id : usamos el nombre del atriburo id `#identidicador`, es unico.
- De atributo : según el atributo, `a[href = ".."]`
- Universal : modifica dos los elementos contenidos en body, `*`

```css
/* de tipo */
div {
  color: #000000;
}

/* de clase */

.titulo {
  font-size: 50px;
}

/* de id */

#titulo2 {
  color : blue;
}

/* de atributo */

a[href ="/nosotros.html"] {
  color: #fff;
}

/* universal */
* {
  background: rgba(100, 70 ,0 ,1);
}
```

Los combinadores son :

- Desendientes = `div p`, Todos los p que esten dentro de div
- Hijo directo = `div > p`, Hijos directos
- Elemento adyacentes `div + p` la p que esta al lado del div
- General de hermanos `div ~ p` las p que estan al lado de div

## **Tipos de selectores: pseudoclases y pseudoelementos**

### **pseudoclases**

Nos permite reaccionar ha acciones del usuario que realiza con el mouse.

- :active = dar estilos cuando el cursor lo active
- :focus = dar estilos cuando el cursor haga click al elemento
- :hover = dar estilos cuando el cursor esta sobre el elemento
- :nth-child(n)

### **pseudoelementos**

Nos permite a acceder a elemento que no son accesibles con selectores normales.

- ::after
- ::before
- ::first-letter
- ::placeholder

## **Cascada y especificidad en CSS**

Cuando hablamos de css son hojas de estilo en cascada nos referimos al orden en el que es escrito, puesto que importa el orden declaracion.

La especificidad es la importancia que tiene nuestros selectores al dar estilos, entre mas especificidad tenga mas importancia tendra al aplicarse.

Lista de especificiadad de mayor a menor :

- !important
- Estilos en linea
- Ids
- Clases, atributos y pseudoelementos
- selector universal