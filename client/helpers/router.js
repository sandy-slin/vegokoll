Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() { 
	this.route('homeScreen', {path: '/',
		onBeforeAction: function() {
    		this.next();
    	}
    });
	this.route('infoScreen', {path: '/info',
		onBeforeAction: function() {
    		this.next();
    	}
    });
	this.route('productScreen', { 
		path: '/product/:gtin',
		onBeforeAction: function() {
    		this.next();
    	},
		subscriptions: function() {
			return [ Meteor.subscribe('product', parseInt(this.params.gtin)), Meteor.subscribe('categories') ];
		},
		data: function(){
			return {
				product: Products.findOne(),
				categories: Categories.find()
			};
		},
		action: function () {
			if (this.ready()) {
			  this.render();
			} else {
			  this.render('Loading');
			}
		}
	});
	this.route('addProductScreen', { 
		path: '/add-product/:gtin',
		onBeforeAction: function() {
    		this.next();
    	},
		subscriptions: function() {
			return Meteor.subscribe('categories');
		},
		data: function(){
			return {
				gtin: this.params.gtin,
				categories: Categories.find()
			};
		}
	});
});