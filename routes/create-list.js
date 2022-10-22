const express = require('express');
const router = express.Router();

const path = require('path');

const http = require('http');
const fs = require('fs');

const filmliste = [];
const datum_von = [];
const datum_bis = [];

router.post('/search', (req,res,next) => {
    filmliste.push(...req.body['filme[]']);
    datum_von.push(req.body['datum-von']);
    datum_bis.push(req.body['datum-bis']);
    const file = fs.createWriteStream(path.join(__dirname,'../', 'filmlist.json'));
    
});

router.get('/search-result', (req, res, next) => {
    res.send('<h1>worked</h1>');
})

module.exports = router;