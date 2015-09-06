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
	remove: false,
	update: false
});

Categories.allow({
	insert: false,
	remove: false,
	update: false
});