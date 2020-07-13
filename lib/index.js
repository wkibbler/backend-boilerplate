var express = require('express');
var database = require('./database');
var bodyParser = require('body-parser');
var config = require('./config');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(config.apiPort, () => {
 console.log(`Server running on port ${config.apiPort}`);
 database.connect();
});