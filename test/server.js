var express = require('./app/config/express');
var app = express();
app.listen(80, function() {
    console.log('Server start on port:80');
});
