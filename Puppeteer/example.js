const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false,"slowMo": 2000});
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();