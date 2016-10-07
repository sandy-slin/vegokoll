Meteor.methods({
	'insertproduct': function ( product ) {
		Products.insert( product );
	},
	'flagproduct': function ( product ) {
		product.flagged = true;
		Products.update( { _id: product._id }, product );
	}
});