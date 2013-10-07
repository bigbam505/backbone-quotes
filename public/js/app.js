/*global Backbone, jQuery */
var app = app || {};

(function ($) {
	'use strict';

	var appRouter = Backbone.Router.extend({
		routes: {
			'': 'listQuotes',
			'add-quote': 'addQuote'
		},
		listQuotes: function(){
			if(!this.quoteListView)
				this.quoteListView = new app.QuoteListView();

			this.quoteListView.render();
		},
		addQuote: function(){
			
		},
		initialize: function(){


		}
	});

	app.AppRouter = new appRouter();
	Backbone.history.start();
})(jQuery);