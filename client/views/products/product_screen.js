Template.productScreen.rendered = function(){
	if (Meteor.isCordova) {
		StatusBar.styleLightContent();
	}
};

Template.productScreen.helpers({ 
	foundProduct: function () {
		if( Products.findOne() === undefined )
			return false;
		else
			return true;
	},
	productUnapproved: function () {
		var product = this.product;
		if ( product && product.approved == false )
			return true;
		else
			return false;
	},
	productFlagged: function () {
		var product = this.product;
		if ( product && product.flagged == true )
			return true;
		else
			return false;
	},
	veganOrNot: function () {
		var product = this.product;
		if ( product.hundred_procent_vegan == true )
			return 'icon-100-vegan.png';
		else if ( product.ingredients.contains_eggs )
			return 'icon-ovo.png';
		else if ( product.ingredients.contains_animal_milk )
			return 'icon-lacto.png';
		else if ( product.ingredients.contains_animal_ingredients )
			return 'icon-novegan.png';
		else if ( product.manufacturer_confirms_vegan || ( product.ingredients.additives_may_come_from_animal_origin != true && product.ingredients.contains_animal_additives != true && product.ingredients.contains_eggs != true && product.ingredients.contains_animal_milk != true && product.ingredients.contains_animal_ingredients != true ) )
			return 'icon-vegan.png';
		else
			return 'icon-novegan.png';
	},
	lactoClass: function () {
		var product = this.product;
		if ( product.ingredients.contains_animal_milk == true )
			return 'active';
		else
			return 'inactive';
	},
	ovoClass: function () {
		var product = this.product;
		if ( product.ingredients.contains_eggs == true )
			return 'active';
		else
			return 'inactive';
	},
	otherClass: function () {
		var product = this.product;
		if ( product.ingredients.additives_may_come_from_animal_origin == true || product.ingredients.contains_animal_ingredients == true )
			return 'active';
		else
			return 'inactive';
	},
	glutenFreeClass: function () {
		var product = this.product;
		if ( product.ingredients.gluten_free == true )
			return 'active';
		else
			return 'inactive';
	},
	organicClass: function () {
		var product = this.product;
		if ( product.other.organic == true )
			return 'active';
		else
			return 'inactive';
	},
	lactoseCLass: function () {
		var product = this.product;
		if ( product.ingredients.contains_animal_milk != true && product.other.contains_traces_of_milk != true )
			return 'active';
		else
			return 'inactive';
	},
	categoryName: function () {
		var category = Categories.findOne({code: this.product.category});
		return category.name;
	}
});

Template.productScreen.events({
	'click .button-flag': function ( event ) {
		var _this = this;
		IonPopup.confirm({
			title: 'Är du säkert?',
			template: 'Dubbelkolla gärna om produktinformationen verkligen är felaktig innan du fortsätter.',
			onOk: function() {
				Meteor.call('flagproduct', _this.product);
			},
			onCancel: function() {
				return false;
			}
		});
	}
});