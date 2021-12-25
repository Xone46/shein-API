const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();
const PORT = 5000;
const imageUrl = [];


app.get('/', (req, res) => {

    const urlTshirt = "https://www.shein.com/Tops-c-1766.html";
    request(urlTshirt, (error, response, html) => {

        if(!error && response.statusCode == 200) {
            const $ = cheerio.load(html)

            $('.S-product-item').each((i, el) => {

                 imageUrl[i] = $('.S-product-item__wrapper .S-product-item__img-container > img').attr('data-src');
                //const title = $('.S-product-item__info .S-product-item__name .S-product-item__link').text();
                const price = $('.S-product-item__info').children('.S-product-item__price');

                //console.log(imageUrl);
                //console.log(title);
                console.log(price.html());

            })
        }

    });


});

app.listen(PORT, () => {
    console.log('Running Server')
})

