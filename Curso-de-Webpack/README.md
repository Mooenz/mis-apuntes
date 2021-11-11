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

## **Loaders de fuentes**

Lo mas recomendable es incorporar las fuentes utilizadas en nuestro proyecto ya que es consume muchos recursos hacer el llamado de estas.

En nuestro archivo de css importamos desde nuestro proyecto la fuente que utilizaremos:

```css
@font-face {
  font-family: 'Ubuntu';
  src: url('../assets/fonts/ubuntu-regular.woff2') format('wolf2'), url('../assets/fonts/ubuntu-regular.woff')
      format('wolf');
  font-weight: 400;
  font-style: normal;
}
```

Con nuestra font lista procedemos a instalar un nuevo loader, `npm install url-loader file-loader -D` y configurar nuestro webpack y agregamos una nueva regla:

```js
 module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      },
           {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //Expresion regular buscara los tipos de archivos para fuentes
        type: 'asset/resource', //nos permite determinar el tipo de archivo que será enlazado o cargado
        generator: {
          filename: 'assets/fonts/[hash][ext]', // Donde será mapeados los archivos
        },
      },
    ]
  },
```

Por ultimo desplegamos para produccion.

## **Optimización: hashes, compresión y minificación de archivos**

Usamos webpack con el fin de optimizar nuestro proyecto comprimir nuestro css, js y demas recursos que estemos utilizando.

Instalaremos algunas dependencias para realizar estas compresiones:

`npm install css-minimizer-webpack-plugin -D` //Minimiza nuestro css
`npm install terser-webpack-plugin -D` // Minimiza nuestro js

Configuramos nuestro webpack.config.js agregando un nuevo apartado en la configuracion llamado `optimization` alli crearemos nuevas instancias para los dos plugins instalados anteriormente:

```js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
//LLamamos los plugins recientemente instalados

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // usamos hashes para nuestros archivos resultantes
    assetModuleFilename: 'assets/images/[hash][ext][query]',
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
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: './assets/fonts/',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css', // usamos hashes para la optimizacion de nuestro proyecto0
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images',
        },
      ],
    }),
  ],
  optimization: {
    //Agregamos un nuevo apartado
    minimize: true, //habilitamos la compresion de css
    minimizer: [
      //Creamos instancias de cada plugin para ser utilizados
      new CssMinimizerPlugin(), // Instancia que comprime css
      new TerserPlugin(), //Instancia que comprime js
    ],
  },

  // optimization: {
  //   minimize: true //Desde webpack 5 se puede activar de manera automatica
  // }
};
```

luego corremos el comando `webpack --mode development`

## **Webpack Alias**

Creamos alias para los paths que estamos utilizamos e identificar cada elemento y hacer uso de ellos. Los alias nos otorga una mejor legibilidad del codigo y mejor entendimiento del recurso importado.

Para ello crearemos en nuestro archivo de configuracion de webpack los alias que utilizaremos:

```js
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'), // Alias para la carpeta utils
      '@templates': path.resolve(__dirname, 'src/templates/'), // Alias para la carpeta templates
      '@styles': path.resolve(__dirname, 'src/styles/'), // Alias para la carpeta styles
      '@images': path.resolve(__dirname, 'src/assets/images/'), //alias para la ruta de images
    },
  },
```

compilamos nuestro proyecto y listo.

## **Variables de entorno**

Son variables que hace referencia a un punto especifico de la configuracion de nuestro proyecto que no queremos exponer al publico.

Primero instalamos una dependencia para trabajar las variables de entorno, `npm install dotenv-webpack -D`, creamos un archivo `.env` que contendra estas varias de uso privado, tambien crearemos un archivo `.env-example` que nos indicara cuales son las variables de entorno que utilizaremos.

Dentro del archivo `.env` colocamos las variables de entorno que requiramos y en `.env-example` las inicializamos pero sin ningun valor.

Luego hacemos uso de nuestro plugin en la configuracion de webpack:

```js
const Dotenv = require('dotenv-webpack');

plugins: [
  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'assets/[name].[contenthash].css',
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src', 'assets/images'),
        to: 'assets/images',
      },
    ],
  }),
  new Dotenv(), // Anadimos este nuevo elemento
];
```

Para hacer uso de la variable de entorno utilizamos un modulo de Node.js llamado `process`:

```js
const API = process.env.API;
```

Normalmente las variables de entorno son usadas para ocultar informacion sensible o privada. Ya por ultimo compilamos el proyecto para verificar los cambios.

## **Webpack en modo desarrollo**

Para el modo desarrollo debemos tener un archivo aparte llamado `webpack.config.dev.js`, simplemente lo editamos y nos aseguramos que las configuraciones establecidas tengan como fin que todo funcione correctamente.

Para nuestro proyecto quitaremos la configuracion `optimization` y sus plugins, tambien le decimos a webpack que este archivo es para el modo desarrollo:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'development', // Indicamos a webpack que este archivo es de modo de desarrollo
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    },
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
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[contenthash].[ext]',
            outputPath: './assets/fonts/',
            publicPath: '../assets/fonts/',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets/images'),
          to: 'assets/images',
        },
      ],
    }),
    new Dotenv(),
  ],
};
```

Configuramos un script en el `package.json` de la siguiente forma: `"dev": "webpack --config webpack.config.dev.js"`

## **Webpack en modo produccion**

El modo produccion es para limpiar todo nuestro codigo y tenerlo listo para ser enviado a produccion.

Instalamos un plugin que nos ayudara a realizar este proceso, `npm install clean-webpack-plugin -D`.

Configuramos nuestro archivo `webpack.config.js`:

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // hacemos una destructuracion del plugin.

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images"
        }
      ]
    }),
    new Dotenv(),
    new CleanWebpackPlugin(), // creamos una instancia deñ plugin
  ],
```

configuramos un script en `package.json` con el siguiente comando: `"build": "webpack --mode production --config webpack.config.js"`, asi garantizamos que para cada modo tiene su archivo de configuracion.

## **Webpack Watch**

Este modo escucha los cambio del proyecto y hace una compilacion automatica, vamos a la configuracion de modo de desarrollo y agregamos un nuevo modulo de configuracion:

```js
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'development',
  watch: true, //activamos el watch en la configuracion para desarrollo
  resolve: {
    extensions: ['.js'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    },
  },
};
```

Cuando activemos este modo desde el script de `package.json` la compilacion de modo de desarrollo quedara en un bucle infinito ya que estara pendiente de cada cambio que tenga nuestro proyecto.

Tambien podemos activar este watch con el flag `--watch`.

Es recomendable ejecutar esta funcion en modo de desarrollo puesto que en el modo de produccion tendremos problemas de rendimiento ya que dependiendo del tamaño que tenga nuestro proyecto, asi mismo de demorará.

## **Deploy a Netlify**

Obviamente debemos tener una cuenta en netlify y estar conectada a nuestro repositorio donde este alojado el proyecto.

Creamos nuestra configuracion para netlify en un archivo llamado `netlyfy.toml`:

```bash
[build]
publish = "dist"
command = "npm run build"
```
