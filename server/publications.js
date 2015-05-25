Meteor.publish('product', function(gtin){ 
	return Products.find({'gtin': gtin, approved: true});
});
Meteor.publish('categories', function(){ 
	return Categories.find();
});