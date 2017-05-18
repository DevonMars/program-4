/**
 * Created by BlackWolf on 05/18/17.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('../recipes');

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

router.get('/recipes', function (req,res) {
    var category = req.query.category || '';

    var outputData;

    if (req.query.category != null) {
        outputData = recipes.filter(function (recipe)
        {
            return recipe.category == category;
        });
        res.json(outputData);
        }else{
        res.json(recipes);
    }
});

router.get("/recipes/:number", function (req, res) {
    var recipe = parseInt(req.params.number) - 1 || 0;
    res.status(200);
    res.json(recipes[recipe]);

});




router.get('*', function (req, res) {
    res.status(404);
    res.send('404 - Not found');
});



module.exports = router;