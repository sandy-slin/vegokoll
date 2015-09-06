Meteor.methods({
	'insertproduct': function ( product ) {
		Products.insert( product );
	}
});