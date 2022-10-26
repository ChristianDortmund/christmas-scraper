const express = require('express');
const router = express.Router();
const got = require('got');
const cheerio = require('cheerio');
let date = '2022-10-26';
const url = `https://www.tvspielfilm.de/tv-programm/tv-sender/?page=1&date=${date}&slots=20`;

const path = require('path');
const fs = require('fs');

router.get('/search-result', (req, res, next) => {
    const filmlistJson = fs.readFileSync(path.join(__dirname, '../', 'filmlist.json'), "utf8");
    got(url).then(response => {
        const $ = cheerio.load(response.body);
        console.log($('title')[0]);
        res.send('<h1>worked</h1>');
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;