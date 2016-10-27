define(['backbone'], function (Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			 "":"home",
		    "home":"home", 
		    "about":"about",
		    "dzx":"dzx",
		    "fkms":"fkms",
		    "mine":"mine",
		    "shopcar":"shopcar",
		    "ssmaker":"ssmaker",
		    "xhzg":"xhzg",
		    "xq":"xq",
		    "zchy":"zchy",
		    "*action":"defaultAction"  
		},
		
		home: function() {
			require(['./modules/home.js'], function (home) {
				home.render();
				home.getLunBo();
				home.getHotSell();
			});
		},
		
		about: function() {
			require(['./modules/about.js'], function (about) {
				about.render();
			});
		}, 
		dzx: function () {
			require(['./modules/dzx.js'], function (dzx) {
				dzx.render();
				dzx.tabChange();
			});
		},
		fkms: function () {
			require(['./modules/fkms.js'],function (fkms) {
				fkms.render();
				fkms.timeChange();
			});
		},
		mine: function () {
			require(['./modules/mine.js'], function (mine) {
				mine.render();
			});
		},
		xq:function(){
			require(['./modules/xq.js'], function (xq) {
				xq.render();
			});
		},
		ssmaker:function(){
			require(['./modules/ssmaker.js'], function (ssmaker) {
				ssmaker.render();
				ssmaker.tabs();
			});
		},
		zchy:function(){
			require(['./modules/zchy.js'], function (zchy) {
				zchy.render();
			});
		},
		xhzg:function(){
			require(['./modules/xhzg.js'], function (xhzg) {
				xhzg.render();
			});
		},
		shopcar:function(){
			require(['./modules/shopcar.js'], function (shopcar) {
				shopcar.render();
			});
		}

	});
	var router = new Router();
});