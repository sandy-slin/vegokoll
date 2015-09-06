Meteor.methods({
	'insertproduct': function ( product ) {
		var result = Products.insert( product );
		console.log(result);
		return result;
	}
});