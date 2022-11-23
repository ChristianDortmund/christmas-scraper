const express = require('express');
const router = express.Router();
const https = require('https');
const cheerio = require('cheerio');

const path = require('path');
const fs = require('fs');

const filmlistJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'filmlist.json'), "utf8"));
let date = filmlistJson["datum-von"];
const url = `https://www.tvspielfilm.de/tv-programm/tv-sender/?page=1&date=${date}&slots=20`;

router.get('/search-result', (req, res, next) => {
    const body = [];
    const body2 = [];
    const result = {};

    function scrapeXmas() {

        return new Promise((resolve) => {
            
            https.get(url, res => {
                res.on('data', chunk => {
                    body.push(chunk);
                });
                res.on('end', () => {
                    const $ = cheerio.load(body.toString());
                    for (let index = 0; index < filmlistJson["filme[]"].length; index++) {
                        const title = filmlistJson["filme[]"][index];
                        const obj = JSON.parse($(`a[title="${title}"]`)[0]["attribs"]["data-tracking-point"]);
                        const date = obj.broadcastTime.split('T')[0];
                        const start = obj.broadcastTime.split('T')[1].slice(0, 5);
                        result[title] = [obj.channel, date, start];
                    };
                    for (let index = 0; index < filmlistJson["filme[]"].length; index++) {
                        const title = filmlistJson["filme[]"][index];

                        const newUrl = $(`a[title="${title}"]`)[0]["attribs"]["href"];

                        https.get(newUrl, res => {
                            res.on('data', chunk => {
                                body2.push(chunk);
                            });
                            res.on('close', () => {
                                const $ = cheerio.load(body2.toString());
                                result[title].push($('span[class="text-row"]')[0]["children"][0]["data"].split("|")[1].split("-")[1].trim());
                            });
                        });
                    };

                });
            });
            
            resolve();
        });
    };
    scrapeXmas().then(console.log(body2)).then(res.send(`<h1>worked</h1>`));
});

module.exports = router;