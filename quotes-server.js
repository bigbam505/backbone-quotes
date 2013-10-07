var express = require('express'),
	_ = require('lodash'),
	redis = require("redis");

var app = express(),
	client = redis.createClient();

// Just outputs the request to the console
app.use(function(req, res, next){
	console.log(req.method + ' Request to: ' + req.path);
	next();
});

// Uses Static Assets
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Set content type
app.use(function(req, res, next){
	var type = req.path.split('/');
	if(_.contains(type, 'api')){
		res.setHeader('Content-Type', 'application/json');
	}
	next();
});

app.get('/api/quotes', function(req, res){
  client.hvals('quotes', function(err, replies) {
  	var body = JSON.stringify(_.map(replies, function(quote) { return JSON.parse(quote);}));
  	res.setHeader('Content-Length', body.length);
  	res.end(body);
  });
});

app.get('/api/quote/:id', function(req, res){
  var id = parseInt(req.params.id);
  client.hget('quotes', id, function(err, reply) {
  	var body = JSON.stringify(JSON.parse(reply));
  	res.setHeader('Content-Length', body.length);
  	res.end(body);
  });
});

app.post('/api/quote', function(req, res){
	client.incrby('max_quote_id', '1', function(err, maxKey){
		var quote = req.body;
		quote.id = ++maxKey;
		//Save this
		client.hset('quotes', quote.id, JSON.stringify(quote));

  		var body = JSON.stringify(quote);
  		res.setHeader('Content-Length', body.length);
  		res.end(body);
	});
});

app.listen(3000);
console.log('Listening on port 3000');