const express = require('express');

const People = require('../people/peopleModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server running'});
});

server.get('/people', (req, res) => {
    People.getAll()
        .then(people => {
            res.status(200).json(rows);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = server;