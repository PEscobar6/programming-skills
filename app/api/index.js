'use strict'

const path = require('path');
const app = require('./app');
const config = require('./config');
global.appRoot = path.resolve(__dirname);


app.listen(config.PORT, function() {
    // console.log(rsp);
    console.log(`Server working on port ${config.PORT}`);

});