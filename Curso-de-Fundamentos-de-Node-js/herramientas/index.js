const puppeteer = require('puppeteer');

(async () => {
  console.log('Lanzamos navegador');
  const browser = await puppeteer.launch({ headless: false });
  console.log('Cerramos navegador');
  browser.close();
  console.log('Navegador cerrado');
})();