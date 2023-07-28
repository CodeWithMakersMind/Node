'use strict';
const app = require('./index.js');
const serverless = require('serverless-http');


const handler = serverless(app)
module.exports = {handler}