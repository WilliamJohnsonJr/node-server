var express = require('express');

var app = express();
var port = process.env.PORT || 9000;
var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var dbAccessString = require('./secrets');

// Or you can simply use a connection uri
var sequelize = new Sequelize(dbAccessString);

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
