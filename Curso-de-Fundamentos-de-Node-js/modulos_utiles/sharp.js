const sharp = require("sharp");

sharp("fondo-carro.jpg")
  .resize(500)
  .grayscale()
  .toFile("fondo-carro-small.jpg");

  console.log(sharp);