export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Entity { // interfaz padre
  id: number;
  title: string;
}

interface Album extends Entity { //extendemos la interfaz padre
  description: string;
}

interface Picture extends Entity { //extendemos la interfaz padre
  orientation: PhotoOrientation;
}

const album: Album = { // Creamos una nueva variable de tipo `Album`
  id: 70,
  title: 'Mooenz: retorno prohibido',
  description: 'No se que significa un retorno prohibido',
};

const picture: Picture = { // Creamos una nueva variable de tipo `Picture`
  id: 7,
  title: 'Family',
  orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture; // newPicture no toma por obligacion tener todos los parametros de Picture ya que se realizo una aserción de tipo (cambio de tipo) a newPicture
newPicture.id = 2;
newPicture.title = 'Moon';

console.log({
  album,
  picture,
  newPicture,
});
