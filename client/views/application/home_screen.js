Template.homeScreen.rendered = function(){
	if (Meteor.isCordova) {
		StatusBar.styleLightContent();
	}
};

Template.homeScreen.events({
	'click #take-photo-button': function(event) {

		if (Meteor.isCordova) {
			cordova.plugins.barcodeScanner.scan(
	            function (result) {
	            	if( parseInt(result.cancelled) != 1 ){
						Router.go('productScreen', {gtin: result.text} );
	            	}
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