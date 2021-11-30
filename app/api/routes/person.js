'use strict'

const express = require('express');
const personCtl = require('../controllers/PersonController');
const routes = express.Router();

routes.get('/', personCtl.getAllPerson);
routes.post('/', personCtl.createPerson);


module.exports = routes;