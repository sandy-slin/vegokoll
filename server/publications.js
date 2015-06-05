Meteor.publish('product', function(gtin){ 
	return Products.find({'gtin': gtin, approved: true});
});
Meteor.publish('categories', function(){ 
	return Categories.find();
});

Products.allow({
	remove: false,
	update: false
});

Categories.allow({
	insert: false,
	remove: false,
	update: false
});