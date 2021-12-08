// Funcion muestra una fotografia
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  //Creamos la interfaz Picture y contendra 3 parametros
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  // El parametro que se recibe es de tipo Picture que es nuestra interfaz
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientacion: ${picture.orientation}]`
  );
}

let myPic = {
  // Recreamos los parametros
  title: 'Teste Title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic); // Llamamos la funcion con los parametros recreados, ts valida que esos parametro coincidan con los parametros establecidos en la interfaz

showPicture({
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test', //Error, no esta definida en la interfaz
});

// Interfaces con parametros opcionales
interface PictureConfig {
  title?: string; //luego de definir la propiedad de la interfaz, indicamos que esta es opcional
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: 'Default', date: '2020-03' };

  if (config.title) {
    pic.title = config.title;
  }

  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({}); // No tenemos error ya que todas las propiedades de la interfaz son opcionales
console.log({ picture });

picture = generatePicture({ title: 'Travel Pic' }); // Solo modifica la propiedad title
console.log({ picture });

picture = generatePicture({ title: 'Travel Pic', date: '2020-07' }); // Modifica las propiedad title y date
console.log({ picture });

// Interfaces con propiedades de solo lectura
interface User {
  readonly id: number;
  userName: string;
  isPro: boolean;
}

let user: User;

user = {
  id: 7,
  userName: 'Mooenz',
  isPro: true,
};
console.log({user});

// user.id = 77; // Error al intentar modificar un atributo que se definio como de uso de solo lectura 
user.isPro = false;
console.log({user});
