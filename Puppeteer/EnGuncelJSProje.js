//const express = require('express');
//const app = express();
const puppeteer = require("puppeteer");
const expectResult = 'Kullanıcı Tanımlama';

(async () => {
    console.info('Test Başladı');
    const browser = await puppeteer.launch(
        {
            "headless": false,
            "slowMo": 20
        });
    
    const page = await browser.newPage();
    
    await page.goto('https://demo.yasinalbakir.net');

    await page.type('[id=kullaniciAdi]', 'admin');
    await page.type('[id=parola]', '123456');
    
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
       });
       await page.screenshot({
        path: 'screenshot.png'
    });
    await page.click('#btnGirisYap');
//Bu screenshot lanetlidir dokunmayın!
    await page.screenshot({
        path: 'screenshot1.png'
    });
//^^^^^^^^^^
    const pageTitle = await page.title();


    if(pageTitle==expectResult){

    await page.type('[id=txtAd]','Serhan Enes')
    await page.type('[id=txtSoyad]', 'Erkal')
    await page.type('[id=txtEposta]', 'admin@gmail.com')
    await page.click('#radioErkek')
    await page.type('[id=drpUnvan]','Analist')
    await page.click('#chckbxKabul')

    await page.screenshot({
        path: 'screenshot1.png'
        
    });
    
    page.on('dialog', async dialog => {
       
        
       });
    
  
    await page.click('#btnKaydet');
   
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
       });
    console.log('Test Başarılı.');
    await browser.close();
    }  
    else{

    console.info('Test Başarısız');
    await browser.close();
    
    }
    
    console.info('Test Sonlandırıldı.');

    })();
