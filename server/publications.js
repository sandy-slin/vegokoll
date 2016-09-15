Meteor.publish('product', function(gtin){ 
	return Products.find({'gtin': gtin});
});

Meteor.publish('categories', function(){ 
	return Categories.find();
});

Products.allow({
	insert: function () {
		return true;
	},
	remove: function () {
		return false;
	},
	update: function () {
		return true;
	}
});

Categories.allow({
	insert: function () {
		return false;
	},
	remove: function () {
		return false;
	},
	update: function () {
		return false;
	}
});