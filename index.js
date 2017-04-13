var express = require('express');

var app = express();
var port = process.env.PORT || 9000;
var nav = [{
    Link: '/',
    Text: 'Home'
}]
var homeRouter = require ('./routes/routes')(nav);

app.use('/', homeRouter);

app.listen(port, function(err){
    console.log('Listening on port ' + port);
});
