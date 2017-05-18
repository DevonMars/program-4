/**
 * Created by BlackWolf on 05/17/17.
 */
//
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

app.all('*', function (request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})
app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/api/v2', require('./routes/routes_api_v2'));



module.exports = app;