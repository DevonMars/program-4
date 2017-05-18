/**
 * Created by BlackWolf on 05/18/17.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function (request, response) {
    response.status(200);
    response.json({
        "description": "Recipes Rest server Api version 1 is no longer supported.Please use API version 2"
    });
});
module.exports = router;