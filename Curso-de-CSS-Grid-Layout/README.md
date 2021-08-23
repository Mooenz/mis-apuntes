# **¿Cómo fue pensado CSS cuando se creó?**
Todo empieza cuando **Timberners Lee** crea la www y de html en 1991, en este lanzamiento ya html contaba con una hoja de estilo pero no fue algo oficial puesto que pensaba que los navegadores debían de encargarse que hacer sus propias hojas de estilo.

En **1993** surgió un navegador llamado Viola que ya contaba con un sistema de estilos y buscaba estandarizarlo, no logro conseguir su objetivo pero inspiro a otro a tratar de hacerlo.

En **1994 Marc Andreessen co-creador de NCSA Mosaic** hizo popular la web y dijo a los desarrolladores que no había forma de trabarjar con **CSS**.

En el mismo año **Hakon Wium lie** dio a conocer una propuesta que se llamaba **Cascading HTML Style Sheets (CHSS)** y hacia referencia que era un lenguaje de estilos orientado especialmente a HTML. Luego esta propuesta se dio a luz en una conferencia para desarrolladores donde fue aceptada por la comunidad y puso a debatir si el usuario tendría la posibilidad de manipular los estilos.

En **1995 Bert Boss** unió fuerzas con Hakon para dar a luz a lo que hoy conocemos como **CSS** y brindo la posibilidad de usar CSS en otro lenguajes de marcado. En ese mismo año fue presentado en el **W3C**, donde desencadeno un debate sobre si el usuario debía de tener el poder sobre los estilos ya que esto se veía mas como un tema político y se ponía en duda la personalización de los estilos por parte del usuario.

Después la **W3C** realizo una junta donde se dio mas importancia la estandarización de CSS, puesto que la comunidad de desarrolladores y empresas tech estaban pendiente del futuro de la web dando presion a la situacion.

**El 17 de diciembre de 1996** oficialmente sale la primera versión de **CSS** como una recomendación de la **W3C**. Luego de esto empezaron a salir los primeros navegadores compatibles con CSS: Internet explorer 3, Netscape y opera.

1998 CSS tuvo su primera actualización realizando correcciones e implementando ciertas novedades. Esto genero unas limitaciones y el problema de los elementos flotantes.

# **Limitaciones de CSS y el problema de los elementos flotantes**
Cuando CSS inicio se trabajaba con elemento posicionados en toda la pantalla, esto causaba que fuera difícil la distribución de elemento. 

Para dar solución a este problema implementaron recursos llamados Noodle Incident y eran plantillas creadas por otro usuarios.

![Noodle Incident](./Noodle-Incident)

Sin embargo aun se tenia un problema con la fatal de columnas de altura completa, pero **Dan Cederholm** da una solución creando columnas falsas. básicamente era tener a los laterales una imagen de altura y anchura fija con el fin de dar un contenido parejo.

Otro problema era el uso de medidas absolutas o relativas y si el contenido debía ajustarse a cada pantalla. Justamente **Ethan marcotte** sugiere el diseño responsivo o responsive desing.

El problema de los elementos flotantes se crea cuando los elementos de una pagina tiene diferentes alturas, creando espacios en blanco entre ellas.

Una de las soluciones era crear contenedores para las diferentes columnas y en estas columnas se almacenaría el contenido de la web. También para solucionar este problema se empezó a usar `Display: table` dándole un display de tabla a elementos que no eran de esa categoría.

Todas estas soluciones eran ingeniosas y daba mucho que hablar, pero al final del día solo eran trucos para hacer paginas webs en los diferentes navegadores. Esto le dio un grado a CSS de ser difícil y frágil.

Para solucionar todos estos problemas se da el nacimiento de múltiples herramientas de diseño.

# **Herramientas CSS**
Estamos hablando de las herramientas que nos han facilitado el camino y no tener que evadir los problemas mediante trucos.

Estas herramientas han generado un inpacto de tal forma que cambiaron la forma de diseñar y desarrollar webs.

## **Arquitecturas**
Es la estandarizacion de como nombramos a nuestras clases en CSS y elejir que metodo de arquitectura usaremos.

## **Pre y Post Procesadores**
Son bastante importantes los preprocesadores por que nos permite trabajar mas rapido al momento de crear codigo y los postprocesadores nos permite agregar pequeños prefijos independientemente el navegador en el que estemos trabajanado. Se deben tener en cuenta que prefijos no son necesarios.

## **Diseño de componentes**
Es unas tecnica que utilizamos para el desarrollo de vistas en general.

## **Frameworks**
Los frameworks de CSS ha permitido que la mayoria de las webs tengan un similitud en cuanto apariencia, pero esto es compesando por la velocidad y facilidad de su uso, a tal punto que una person con pocos conocimientos de CSS logre crear vistas fantasticas. 

Se caracteriza por tener unos lineamiemientos que lo hace poco personalizable. Es importante cuestionarnos si necesitamos o no un framework.

## **Performance**
Es tener es ser concientes del rendimiento de nuestra web.

## **Accesibilidad**
Es adoptar nuestra web para aquellas personas son alguna limitacion fisica.

## **Evergreen Browsers**
Nos habla de la compatibilidad de nuestro codigo con los navegadores.

Debemos aumentar nuestra compresion del por que suceden las cosas y saber que necesitamos para desarrollar.

# **¿CSS Grid es una idea nueva?**
Es el resultado de todas los diferentes métodos de solución en cuanto al posicionamiento de elementos.

CSS al inicio solo estaba enfocado a otorgar colores, tipografías e imágenes, sin embargo bert bos empezó a tomar tecnicas de desarrollo de diseño de revistas e implementaron a css.

En 2005 bert bos presenta ante la W3C un documento donde presenta la idea de un sistema de layout. Solo hasta el 2016 se dio una robustez a esta idea inicial sin ser presentado o implementado ante la comunidad.

Microsoft ante la necesidad de tener una herramienta de diseño robusta y flexible para la creación de vistas enfocadas al desarrollo de aplicaciones nativas toma el sistema de grillas.

Rachek andrew en el 2012 escribe un articulo relacionado a css grid dando mas detalle del funcionamiento y creación de grillas.

Grid nace atrás vez de 3 ideas o propuestas:

- Inicialmente Microsoft
- Diseño Avanzado de bos
- Adición de líneas de cuadrícula de linss

Jen Simmons Colocó muchas demostraciones que creó para css grid en la web. El hecho de que la idea inicial de css grid para ser usada como un estándar no es suficiente como para darle ese titulo, debe de cumplirse varios factores como existir varias implementaciones de la misma, que la comunidad de desarrolladores la use y sea bien recibida, y por ultimo que se convierta en una solución a una necesidad.

Para 2017 Google consigue una implementación de CSS grid para chrome dos días después que firefox realizara su propia implementación y a ellos se le sumaron opera y safari. El ultimo en sumarse fue edge de microsoft.

CSS Grid se ha tomado como un método de diseño robusto en el que se puede trabajar sin preocuparse de otras implementaciones.

# **¿Qué significa Grid para CSS?**
Grid es una firma nueva de pensar sobre como realizar un diseño de distribución de elementos con CSS. Muchos desarrolladores afirman que CSS grid es un gran paso para el diseño en CSS, ya que tumbo todos esos trucos planteando una forma nueva de hacerlo con el mismo o mejor resultado. 

# **Técnicas de alineamiento antes de CSS Grid: margin y line-height**
## **Tecnica margin**
```css
margin: 10px 15px 20px 25pxx;
```


# **Grid y las relaciones padre e hijos inmediatos**
Grid es crear una regilla compuesta por filas y columnas.

Todos los contenedores seran llamados padres y los elementos que se encuentra dentro de el son sus hijos.

```html
<div class="Padre"> 
  <div class="Hijos"></div>
  <div class="Hijos"></div>
  <div class="Hijos"></div>
</div>
```
Un hijo tambien puede ser tambien padre.

```html
<div class="Padre"> 
  <div class="Padre-Hijo">
    <div class="Hijos"></div>
    <div class="Hijos"></div>
  </div>
  <div class="Hijos"></div>
  <div class="Hijos"></div>
</div>
```
la identacion nos permite diferenciar cual es el padre o el hijo. Todos los padres deben tener la propiedad `display:grid `

# **Lines, tracks, cell, area, gutters, grid axis, grid row, grid column**
Los contenedores padres trabaja con ***Lineas*** ya sean verticales o horizontales, ***Tracks*** tiene varias celdas conforman un track tanto vertical como horizontal y ***Areas*** que basicamente es el conjuntos de celdas verticales y horizontales. Los hijo trabajan en las celdas.

