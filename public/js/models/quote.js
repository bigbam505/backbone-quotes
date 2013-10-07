/*global Backbone*/
var app = app || {};

(function(){
	"use strict";
	app.Quote = Backbone.Model.extend({
		urlRoot: '/api/quote',
		defaults: {
			text: ''
		}
	});
})();