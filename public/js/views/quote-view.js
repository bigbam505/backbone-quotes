var app = app || {};


(function($){
	"use strict";
	
	app.QuoteView = Backbone.View.extend({
		template: _.template($('#quote-template').html()),
		render: function(){
			this.$el.html(this.template(this.options));
			return this;
		}
	});
})(jQuery);