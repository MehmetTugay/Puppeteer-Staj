const puppeteer = require("puppeteer");
const fs = require("fs/promises");
//const { isTypedArray } = require("util/types")

// (async () =>{

//     console.log('Money check');

//     const browser = await puppeteer.launch(
//         {
//             executablePath: '/usr/bin/google-chrome-stable',
//             "headless": true
//         });
//     const page = await browser.newPage();
//     await page.goto('https://www.doviz.com/');
    
//     const myArray = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll(".item")).map(x => x.textContent);
//     });
//     await fs.writeFile("Currency1.text", myArray.join("\r\n"));
//     await browser.close();
// })();



(async () =>{

    console.log("Money check");

    const browser = await puppeteer.launch(
        {
            executablePath: '/usr/bin/google-chrome-stable',
            "headless": true
        });
    const page = await browser.newPage();
    await page.goto('https://www.doviz.com/');
    
    const myArray = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".name , .item [data-previous-value]")).map(x => x.textContent);
    });
    await fs.writeFile("Currency2.text", myArray.join("\r\n"));
    await browser.close();
})();




// describe('this is a puppeteer test', () => {
//     beforeAll(async () => {
//       await page.goto('https://google.com');
//     });
  
//     it('it tests google.com', async () => {
//         const driver = await puppeteer.launch()
//         const page = await driver.newPage()
//         await page.goto('https://www.google.com/')
//         await new Promise(r => setTimeout(r, 3000));
//         await page.close()
//     });
// });

