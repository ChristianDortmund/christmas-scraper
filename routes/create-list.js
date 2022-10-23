const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

const filmliste = [];
const datum_von = [];
const datum_bis = [];

router.post('/search', (req, res, next) => {
    filmliste.push(...req.body['filme[]']);
    datum_von.push(req.body['datum-von']);
    datum_bis.push(req.body['datum-bis']);
    fs.writeFileSync(path.join(__dirname, '../', 'filmlist.json'), JSON.stringify(req.body));
    res.redirect('/search-result');
});

module.exports = router;