#!/usr/bin/env node 

import { rps, rpsls } from "./lib/rpsls.js";
import express from 'express';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//check endpoint at /app/ that returns 200 ok
app.get('/app/', (req, res) => {
    res.status(200).send("200 OK");
})

