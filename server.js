var express  = require('express');          
var bodyParser = require('body-parser');    
var axios = require('axios');
var Yelp = require('./client/app/yelpReviews/yelp.js');

var app = express();  

app.use(express.static(__dirname + '/client'));                                           
app.use(bodyParser.urlencoded({'extended':'true'}));          
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


var port = process.env.PORT || 8080;

app.listen(port);

console.log('Server now listening on port ' + port);

// ******** routes ******** //

app.post('/', function(req, res) {
  Yelp.askYelp(req.body[0], res);
});

app.post('/weather', function(req, res) {
  getWeather(req, res);
})

var getWeather = function(req, res) {
  var apiKey = '5a794a20953594291ae61c55b8285e1e';
  var latLng = req.body.latLng;  // [lat, lng]
  var url = 'https://api.forecast.io/forecast/' + apiKey + '/' + latLng[0] + ',' + latLng[1];
  axios.get(url)
    .then( function(data) {
      res.send(data.data);
    })
    .catch( (data) => {
      console.log("Error getting weather: ", resp);
      response.status(503).send("Error getting weather!");
  });

};


