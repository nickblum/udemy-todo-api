var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config'); // runs config/index.js 
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.port || 3000;

// setup public assets folder, delivered straight to the browser
app.use('/assets', express.static(__dirname + '/public'));

// setup view engine (ejs)
app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());

// http://localhost:3000/api/setupTodos
//add fake/seed data
setupController(app);

// add all API handles, including middleware 
apiController(app);

app.listen(port);