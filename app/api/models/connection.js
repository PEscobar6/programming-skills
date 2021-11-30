'use strict'

const config = require('../config')
const mysql = require('mysql2')

const connection = mysql.createPool({
    connectionLimit : 150,
    host : config.DB_HOST,
    user : config.DB_USER,
    password : config.DB_PASS,
    port : config.DB_PORT,
    database : config.DB_NAME,
    multipleStatements: true
})

module.exports = connection