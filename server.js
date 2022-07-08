// The reason I can't use const here is, 
// I use type = module on the package.json file
// ! const express = require('express');
// ! const bodyParser = require('body-parser')

// * I'll be using import to get all dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'

// Routes

const PORT = process.env.PORT || 3000;
// Express app running
const app = express();

// Middleware 
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URI).
then(() => app.listen(PORT, () => 
console.log(`Server & DB listening on http://localhost:${PORT}`)))
.catch((error) => console.log(error))

// usage of routes
app.use('/api/v1', AuthRoute)