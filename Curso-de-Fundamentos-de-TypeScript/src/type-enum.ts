// Orientacion para fotografias
// const landscape = 0;
// const potrait = 1;
// const squate = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log({ landscape }); // landscape: 0
console.log('landscape', PhotoOrientation[landscape]); // landscape Landscape

enum PictureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}
console.log('portrait', PictureOrientation.Portrait); // 11

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  UnitedState = 'usa',
  España = 'esp',
}

const country: Country = Country.Colombia;
console.log({ country }); // col
