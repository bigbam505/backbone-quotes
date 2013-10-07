/*global Backbone, jQuery, _ */

var app = app || {};

(function ($) {
	'use strict';

	app.QuoteListView = Backbone.View.extend({
		el: 'div.content',
		tagName: 'ul',
		className: 'quote-list',
		initialize: function () {
			//this.$list = this.$('#quote-list');
			console.log('test');
			this.listenTo(app.quotes, 'reset', this.addAll);
		},
		render: function(){
			app.quotes.fetch({reset: true});
		},
		addAll: function(){
			var $el = $(this.el),
				self = this;
			$el.html('');
			app.quotes.each(function(quote){
				var quote = new app.QuoteView({ model: quote });
				$el.append(quote.render().el);
			});

			return this;
		},
	});

})(jQuery);