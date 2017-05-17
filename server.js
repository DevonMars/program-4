/**
 * Created by BlackWolf on 05/17/17.
 */
var config  =require('./config.json');
var http    =require('http');
var express =require('express');

var app = express();
app.set('PORT', config.webPort);
app.all('*', function (req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});

app.get('/api/v1/hello', function (req, res, next) {
    res.contentType('application/json');
    res.json({"msg":"Hello to you all!! Have a nice NodeJS day"});
});
var port = process.env.PORT || app.get('PORT');
app.listen(port, function () {
    console.log('The magic happens at http://localhost:' + port);
});
// app.listen(8080,function () {
//     console.log('The magic happens at http://localhost:8080');

// });