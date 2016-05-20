var express  = require('express');
var mongoose = require('mongoose'); 
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override'); 

var app = express();
//mongodb to be connected once deployed with URI
mongoose.connect('mongodb://localhost/database');    

app.use(express.static(__dirname + '/client'));               
app.use(morgan('dev'));                                        
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

//appModel
var mainRouteModel = mongoose.model('mainRouteModel', {
  test: {
  type: String,
  default: ''
  }
});



//routes go under here


//application under here

app.get('*', function(req, res) {
  res.sendFile('./client/index.html'); // load the single view file 
});

//listen(start app with node server.js)
var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);

