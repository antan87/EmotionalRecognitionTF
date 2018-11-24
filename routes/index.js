'use strict';
    const express = require('express');
    const router = express.Router();

    /* GET home page. */
    router.get('/', function (req, res) {
    res.render('index', {
            title: 'Express'
        });
    });

<<<<<<< Updated upstream
=======
    io.on('connection', (socket) => {
        // fs.readFile('./images/kim-un.jpg', function (err, data) {
        fs.readFile('./images/img4.jpg', function (err, data) {
            socket.emit('imageConversionByClient', {
                image: true,
                buffer: data
            });
            socket.emit('imageConversionByServer', "data:image/png;base64," + data.toString("base64"));
        });

    });

    return router;
>>>>>>> Stashed changes

module.exports = router;