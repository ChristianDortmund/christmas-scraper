const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

router.get('/search-result', (req, res, next) => {
    res.send('<h1>worked</h1>');
    const filmlistJson = fs.readFileSync(path.join(__dirname, '../', 'filmlist.json'), "utf8");
    console.log(filmlistJson);
});

module.exports = router;