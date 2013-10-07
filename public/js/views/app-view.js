/*global Backbone, jQuery, _ */

var app = app || {};

(function ($) {
	'use strict';

	app.AppView = Backbone.View.extend({
		el: 'body',
		initialize: function () {
			this.$list = this.$('#quote-list');

			this.listenTo(app.quotes, 'reset', this.addAll);

			app.quotes.fetch({reset: true});
		},
		render: function(){
			
		},
		addAll: function(){
			this.$('#quote-list').html('');
			console.log(app.quotes);
			app.quotes.each(this.addOne, this);
		},
		addOne: function(quote){
			var view = new app.QuoteView({ model: quote });
			$('#quote-list').append(view.render().el);
		}

	});

})(jQuery);