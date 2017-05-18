/**
 * Created by BlackWolf on 05/18/17.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/help', function (req, res) {
    res.status(200);
    res.json({
        "description": "Help function not available yet"
    });

});

router.get('/info', function (req, res) {
    res.status(200);
    res.json({
        "description": "Here is well all the information of the server will be placed"
    });
});

router.get('*', function (req, res) {
    res.status(404);
    res.send('404 - Not found');
});
module.exports = router;