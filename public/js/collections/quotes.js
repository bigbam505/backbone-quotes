var app = app || {};

(function(){
	"use strict";
	var Quotes = Backbone.Collection.extend({
		url: '/api/quotes',
    	model: app.Quote,
  	});

  	app.quotes = new Quotes();
})();