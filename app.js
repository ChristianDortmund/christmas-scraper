const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const start = require('./routes/start');
const create_list = require('./routes/create-list');
const scrape = require('./routes/scrape');

app.use(express.static(path.join(__dirname, '/')));

app.use(start);
app.use(create_list);
app.use(scrape);


app.listen(3000);