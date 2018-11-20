'use strict';
module.exports = () => {
    const express = require('express');
    const router = express.Router();

    /* GET home page. */
    router.get('/', function (req, res) {
        console.log('HOHO');
        res.render('index', {
            title: 'Express'
        });
    });

    return router;

};