var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    app.use(express.static('public'))
    app.use('/js', express.static(__dirname + '/js'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'jade');

    require('../routes/index')(app)

    return app;
}