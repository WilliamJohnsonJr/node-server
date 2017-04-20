var express = require('express');

var app = express();
var port = process.env.PORT || 9000;
var secrets = require('./secrets');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(secrets.dbConnection);

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });


var nav = [{
    Link: '/',
    Text: 'Home'
}]
var homeRouter = require ('./routes/routes')(nav);

app.use('/', homeRouter);

app.listen(port, function(err){
    console.log('Listening on port ' + port);
});
