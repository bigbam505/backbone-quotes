/*global Backbone, jQuery */
var app = app || {};

(function ($) {
	'use strict';

	var quoteRouter = Backbone.Router.extend({
		routes: {
			'': 'listQuotes',
			'add-quote': 'addQuote'
		},
		listQuotes: function(){
			$('#main-title').html('Quotes');
		},
		addQuote: function(){
			$('#main-title').html('Add Quote');
		}
	});

	app.QuoteRouter = new quoteRouter();
	Backbone.history.start();
})(jQuery);