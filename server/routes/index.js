const express = require('express');
const app = express();

module.exports = app;
app.use(require('./usuario'));
app.use(require('./login'));