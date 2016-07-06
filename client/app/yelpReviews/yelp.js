var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key:'HvPDlRE2SFhi8cH_SsVeSA',
  consumer_secret:'HjwFZXQ4MHiaEb3OhgwDBOxUTU4',
  token:'ccNDHzbuzAUNIYztfybVYNaAPtg1NAgs',
  token_secret:'vumbjNRjf8h_qGEorbiiOfHNilc'
});

var choose = function(data) {
  var bestRating = 0; var reviews = 0;
  var winner = {};
  data.businesses.forEach( function(business) {
    if (business.rating > bestRating && business.review_count > reviews && business.is_closed === false) {
      bestRating = business.rating; reviews = business.review_count;
      winner.name = business.name; 
      winner.snippet_text = business.snippet_text;
      winner.image_url = business.image_url;
      winner.url = business.url; 
      winner.phone = business.phone;
    }   
  });
  return winner;
};

module.exports.askYelp = function(term, res) {
  console.log("this is the coordinate", term.lat, term.lng);
  yelp.search({ term: term.name, ll: term.lat + ',' + term.lng })
  .then(function(data) {
    var result = choose(data);
    result.search_term = term; 
    res.send(result);
  })
  .catch(function(err) {
    console.error(err)
  });
};
