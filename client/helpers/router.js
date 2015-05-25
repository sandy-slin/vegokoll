Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function() { 
	this.route('homeScreen', {path: '/',
		onBeforeAction: function() {
    		$('body').addClass('hidenav');
    		this.next();
    	}
    });
	this.route('infoScreen', {path: '/info',
		onBeforeAction: function() {
    		$('body').removeClass('hidenav');
    		this.next();
    	}
    });
	this.route('productScreen', { 
		path: '/products/:gtin',
		onBeforeAction: function() {
    		$('body').removeClass('hidenav');
    		this.next();
    	},
		subscriptions: function() {
			return [ Meteor.subscribe('product', parseInt(this.params.gtin)), Meteor.subscribe('categories') ];
		},
		data: function(){
			return Products.findOne();
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
    		$('body').removeClass('hidenav');
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