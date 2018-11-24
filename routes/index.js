'use strict';
module.exports = (io) => {

    const express = require('express');
    const router = express.Router();
    const fs = require('fs');

    /* GET home page. */
    router.get('/', function (req, res) {
        res.render('index', {
            title: 'Express'
        });
    });

    io.on('connection', (socket) => {
        // fs.readFile('./images/kim-un.jpg', function (err, data) {
        fs.readFile('./images/kim-un.jpg', function (err, data) {
            socket.emit('imageConversionByClient', {
                image: true,
                buffer: data
            });
            socket.emit('imageConversionByServer', "data:image/png;base64," + data.toString("base64"));
        });

    });

    return router;

};