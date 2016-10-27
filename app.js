require.config({
	paths : {
		'zepto' : './lib/zepto',
		'text' : './lib/text',
		'$css' : './lib/css',
		'underscore' : './lib/underscore',
		'backbone' : './lib/backbone',
		'swiper' : './lib/swiper-3.3.1.min',
		'jquery' : './lib/jquery',
		'lazyload' : './lib/jquery.lazyload.min'
	}
})

require(['backbone', './router'], function (Backbone) {
	Backbone.history.start();
})