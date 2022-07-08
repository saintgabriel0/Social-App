// The reason I can't use const here is, 
// I use type = module on the package.json file
// ! const express = require('express');
// ! const bodyParser = require('body-parser')

// * I'll be using import to get all dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import client  from 'dotenv';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware 
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json());

mongoose.createConnection(client).then(() => app.listen(PORT, `Server & DB listening on http://localhost:${PORT}`))


