'use strict';
const express = require('express');
const cors = require('cors');
const BatteryCycles = require('./app/controller/BatteryCycles');
const BaseController = require('./app/controller/BaseController');

// Constants
const PORT = process.env.PORT || 80;
const HOST = '0.0.0.0';

const app = express();
const corsOptions = {
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended:false})); // for parsing applicatino/x-www-form-urlencoded
app.use(BaseController);
app.use(BatteryCycles);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
