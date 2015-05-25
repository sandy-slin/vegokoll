Template.homeScreen.events({
	'click #take-photo-button': function(event) {

		if (Meteor.isCordova) {
			cordova.plugins.barcodeScanner.scan(
	            function (result) {
					Router.go('productScreen', {gtin: result.text} );
	            }, 
	            function (error) {
	                alert("Scanning failed: " + error);
	            }
	        );
		} else {
			var gtin = prompt("Your browser does not have support for Cordova barcodeScanner. Please enter the EAN-code:");
			if (gtin != null) {
				Router.go('productScreen', {gtin: gtin} );
			}
		}
	}
});