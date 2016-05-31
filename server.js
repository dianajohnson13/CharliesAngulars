var express  = require('express');
var mongoose = require('mongoose'); 
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override');
var axios = require('axios');

var app = express();
//mongodb to be connected once deployed with URI

//mongoose.connect('mongodb://localhost/database');    

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


// app.get('*', function(req, res) {
//   res.sendFile('./client/index/html'); // load the single view file 
// });

//application under here

//listen(start app with node server.js)
var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);


// app.get('today', function(req, res) {
//   var latLng = request.body.latLng;  // [lat, lng]
//   var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latLng[0] + "&lon=" + latLng[1] + "&appid=" + APP_ID;
//   getWeather(req, res);
// })


app.post('/weather', function(req, res) {
  getWeather(req, res);
})

var getWeather = function(req, res) {
  var apiKey = '5a794a20953594291ae61c55b8285e1e';
  var latLng = req.body.latLng;  // [lat, lng]
  var url = 'https://api.forecast.io/forecast/' + apiKey + '/' + latLng[0] + ',' + latLng[1];
  axios.get(url)
    .then( function(data) {
      console.log(data.data)
      res.send(data.data);
    })
    .catch( (data) => {
      console.log("Error getting weather: ", resp);
      response.status(503).send("Error getting weather!");
  });

};


