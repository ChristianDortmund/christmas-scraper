const express = require('express');
const router = express.Router();
const got = require('got');
const cheerio = require('cheerio');
let date = '2022-10-26';
const url = `https://www.tvspielfilm.de/tv-programm/tv-sender/?page=1&date=${date}&slots=20`;

const path = require('path');
const fs = require('fs');

router.get('/search-result', (req, res, next) => {
    res.send('<h1>worked</h1>');
    const filmlistJson = fs.readFileSync(path.join(__dirname, '../', 'filmlist.json'), "utf8");
    console.log(url);
});

module.exports = router;