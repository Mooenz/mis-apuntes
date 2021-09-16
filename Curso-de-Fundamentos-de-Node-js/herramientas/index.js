const puppeteer = require('puppeteer');

(async () => {
  //Ejecutamos el navegador
  console.log('Lanzamos navegador');
  const browser = await puppeteer.launch({ headless: false });
  //Abrimos la pagina de wikipedia
  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');
  //Capturamos del DOM el h1 y lo retornamos
  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');

    return h1.innerHTML;
  })
  //Mostramos en nuestra consola el h1 capturado
  console.log(titulo1);

  console.log('Cerramos navegador');
  //Cerramos el navegador
  browser.close();
  console.log('Navegador cerrado');
})();