'use strict'

const express = require('express');
const api = express.Router();


api.get("/ping", (req, res) => {
    res.send('Ping');
})

api.use('/people', require('./person'));

module.exports = api;