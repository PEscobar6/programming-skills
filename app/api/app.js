'use strict'

const express = require('express');
const api = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: false, limit: '50mb'}))
app.use(express.json());

// Settings
const corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use('/', api);

module.exports = app;