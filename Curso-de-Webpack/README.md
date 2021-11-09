# **Curso de Webpack**

## **Que es Webpack**

Es una herramienta que nos permite preparar nuestro codigo para produccion. Trabaja con Javascript, imagenes, archivos estaticos, fuentes, css y prepara cada una de las particularidades de nuestro proyecto para ponerlo en produccion.
Nacio en el 2012 desde ese entonces muchas empresas lo usan como core de sus proyectos.

Tambien podremos gestionar las dependencias, ejecutar tareas, conversion de formas, habilitar un entorno de desarrollo local, cargar los modulos de JavasCript, etc. Es importante tener presente que webpack tiene una filosofia y es trabajar de forma modular, osea, que dividiremos nuestro codigo codigo por modulos y luego ser unido al final del proyecto para ser enviado a produccion.

webpack es una herramienta muy importante para el desarrollo frontend.

## **Conceptos Básicos**

Webpack es un paquete de modulos estaticos para aplicaciones de JavaScript modernas. Webpack construye un grafico de dependencias que mapea cada modulo para convertirlo en uno o mas modulos ya sea el caso.

Desde webpack ya no necesitamos un archivo de configuracion, sin embargo debemos entender que debemos tener un punto de entrada `index.js` dentro de una carpeta especifica. Consideremos que debemos tener un punto de salida es la carpeta `dis` donde se añadirán todos los elementos que estaremos trabajando.

Contaremos con varios elementos particulares con los cuales lograremos trabajar como el modo de produccion, modo de desarrollo y una opcion para ver los cambios en tiempo real y poder recopilar nuestro proyecto para analizar cada cambio realizado.

Webpack dispone de Loader y plugins que permite prepara particularidades de proyecto, con los Loader permitimos a webpack entender por ejemplo JSX que es la sintaxis de react. Con los plugins podemos añadir configuraciones o elementos particularidades extendiendo sus funcionalidades, ejemplo habilitar un modo de desarrollo local que permite tener un puerto especifico y ver los cambios en real-time y analizar sus cambios.

## **build con Webpack**

Creamos la carpeta de nuestro proyecto y la inicializamos con git y npm:

- `git init`
- `npm init -y`

Luego vamos a crear la carpeta `src` contendra el archivo `index.js` que sera el punto principal o entrada de nuestro proyecto Instalamos Webpack `npm i webpack webpack-cli -D`, `webpack-cli` para poder trabajar con comando dentro de la terminal.

`npx webpack` ejecutar webpack para que identifique nuestro proyecto y el vea cual es el archivo de entrada, esto nos genera una carpeta llamada 'dist' y dentro de ella un archivo main.js donde contendra todo nuestro codigo Javascript optimizado para cualquier navegador.

el _Modo de Desarrollo_ se activa con el comando `npx webpack --mode development` nos activa una vista en el archivo main.js lista para ser analizada en caso de contener errores o que necesitemos optimizar.

el _Modo de produccion_ la activamos con `npx --mode production` retorna un codigo comprimido mucho mas limpio para usar.

## **Proyecto**

Hacemos fork al proyecto `gndx/js-portfolio` contendra todos los elementos correspondientes a un portafolio tipo card lista para hacer la configuracion de webpack.

Despues de hacer fork al proyecto en github vamos a instalar webpack con los siguientes comandos:

1. `npm install webpack webpack-cli -D`, se instalará webpack.
2. `npx webpack --mode production`, Modo produccion generando una carpeta llamada dist y dentro de ella el archivo main.js que tiene todo el JavaScript minificado.

Luego vamos a crear el archivo de configuracion de webpack con el nombre `webpack.config.js`. Lo preparamos para que entienda el punto de entrada, a donde enviara la compilacion del proyecto y cuales son las extensiones que estara trabajando.

```js
const path = require('path');
const { ModuleGraphConnection } = require('webpack');

module.export = {
  entry: './src/index,js', //entrada del proyecto
  output: {
    path: path.resolve(__dirname, 'dist'), // ruta compilacion
    filename: 'main.js', // nombre del archivo compilado
  },
  resolve: {
    extensions: ['.js'], //extensiones que maneja
  },
};
```

Al terminar de configurar nuestro archivo webpack.config.js vamos a correr el siguiente comando con el fin de indicarle a webpack que debe tener en cuenta esa configuracion al momento de ejecutarse, `npx webpack --mode production --config webpack.config.js`

## **Babel**

Es un transpilador para nuestros archivos .js convirtiendolo en un JavaScript compatible con todos los navegadores.

Instalamos babel: `npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D`.

`@babel/core` Es el core de babel.
`@babel/preset-env` No permite trabajar con JavaScript moderno.
`@babel/plugin-transform-runtime` Sirve para trabajar con codigo asincrono.

configuracion babel, creamos un archivo `.babelrc` en sistemas operativos unix, los archivos que inician con `.` son archivos ocultos y sirven para realizar configuraciones. En ese archivo creado colocamos el siguiente codigo:

```json
{
  "presets": [
    //Permite trabajar Js moderno
    "@babel/preset-env"
  ],
  "plugins": [
    //Plugin que permite trabajar con codigo asincrono
    "@babel/plugin-transform-runtime"
  ]
}
```

Al terminar la configuracion de babel le indicamos a webpack la existencia de este loader y establecer las reglas de uso.

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      // Agregamos todas las configuraciones de los loader
      {
        test: /\.m?js$/, //Le decimos a webpack que extensiones vamos a trabajar
        exclude: /node_modules/, // Excluimos esta carpeta
        use: {
          loader: 'babel-loader', // Agregamos el loader de babel
        },
      },
    ],
  },
};
```

compilamos el proyecto para produccion.

## **HTML en Webpack**

Instalamos el plugin para que webpack pueda trabajar con archivos html: `npm install html-webpack-plugin` y en nuestro archivo de webpack.config.js:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //requerimos el plugin

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    //Anadimos todos los plugins que necesitemos
    new HtmlWebpackPlugin({
      // Agregamos HtmlWebpackPlugin
      inject: true, //le decimos que si haga la insercion de los elementos
      template: './public/index.html', // le indicamos la ruta del template
      filename: './index.html', // Le damos el nombre compilado resultante
    }),
  ],
};
```

compilamos el proyecto para produccion.

## **Loaders para CSS y preprocesadores de CSS**

Instalamos el loader de css `npm install mini-css-extract-plugin css-loader -D`.

Luego de instalar estos plugins en el index.js importamos nuestros estilos y configuramos en webpack.config.js el plugin y el loader para css:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Llamamos el recurso instalado
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      //creamos una nueva regla para css
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.styl$/i, // Creamos la expresion regular para css y stylus
        use: [
          MiniCssExtractPlugin.loader, //el use se usa segun la configuracion del plugin
          'css-loader', //ponemos los loader que utilizaremos, en este caso sera el louder de css y stylus
          'stylus-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(), // Agregamos una nueva instancia para MiniCssExtractPlugin que unira todos los archivos css
  ],
};
```

compilamos el proyecto para desarrollo `webpack --mode development`.

## **Copia de archivos con Webpack**

Cuando estemos trabajando con webpack necesitaremos mover nuestros archivos o elementos a la carpeta `dist`.

Instalaremos el plugin `npm install copy-webpack-plugin -D` seguido de estos configuramos en el webpack.config.js:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Llamamos el plugin

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      // Creamos una instancia del plugin
      patterns: [
        // configuramos segun la doc del plugin
        {
          from: path.resolve(__dirname, 'src', 'assets/images'), // ruta donde se encuentra los recursos copiados
          to: 'assets/images', // ruta donde seran pegados los recursos
        },
      ],
    }),
  ],
};
```

compilamos el proyecto para desarrollo `webpack --mode development`.

## **Loaders de imágenes**

Con nuestras imagenes podemos hacer una copia en dist o con el loader importarlas como si fuera una variable, loader-images es nativo de webpack asi que añadimos esa regla en nuestro archivo webpack.config.js:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.png/, // Agregamos la expresion regular para que identifique los archivos .png
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images',
        },
      ],
    }),
  ],
};
```

Ya con la configuracion correcta para importar imagenes vamos al archivo del template e importamos todas las imagenes:

```js
import github from '../assets/images/github.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
```

y estas variables las colocamos en el src de las imagenes:

```js
<a href="https://twitter.com/gndx">
  <img src="${twitter}" />
</a>
<a href="https://github.com/gndx">
  <img src="${github}" />
</a>
<a href="https://instagram.com/gndx">
  <img src="${instagram}" />
</a>
```

Para finalizar corremos el comando: `webpack --mode development`, esto se hace para generar el compilado de los archivos y ver los cambios que generamos. Si visualizamos las imagenes generadas, lo nombre de estas son reemplazadas por hashes.
