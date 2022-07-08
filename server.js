// The reason I can't use const here is, 
// I use type = module on the package.json file
// ! const express = require('express');
// ! const bodyParser = require('body-parser')

// * I'll be using import to get all dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware 
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(express.json());

app.get('/hello', (req, res) => {
    req.json({msg:"Greetings"})
})
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`)
})