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
    res.status(200).send('200 OK');
});

//check endpoint at /app/rps/
app.get('/app/rps/', (req,res) => {
    res.status(200).send(JSON.stringify(rps()));
});

//check endpoint at /app/rpsls/
app.get('/app/rpsls/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
});

//accept URL (param)
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

//accept queries
app.get('/app/rpsls/play/', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

app.get('/app/rpsls/play/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

//accept JSON
app.post('/app/rps/play/', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

app.post('/app/rpsls/play/', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

