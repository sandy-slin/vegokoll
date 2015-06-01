Template.productScreen.rendered = function(){
	if( Products.findOne() === undefined ){

		IonPopup.show({
			title: 'Hittade inte produkten',
			template: 'Vill du lägga till produkten i vår databas?',
			buttons: [
				{
					text: 'Ta ny bild',
					onTap: function(event, template) {
						Router.go('homeScreen');
						return true;
					}
				},
				{
					text: 'Lägg till',
					type: 'button-calm',
					onTap: function(event, template) {
						return true;
					}
				}
			]
		});
		
	}
}

Template.productScreen.helpers({ 
	foundProduct: function () {
		if( Products.findOne() === undefined )
			return false;
		else
			return true;
	},
	veganOrNot: function () {
		var product = this.product;
		if ( product.hundred_procent_vegan == true )
			return 'icon-100-vegan.png';
		else if ( product.manufacturer_confirms_vegan || ( product.ingredients.additives_may_come_from_animal_origin != true && product.ingredients.contains_animal_additives != true && product.ingredients.contains_eggs != true && product.ingredients.contains_animal_milk != true && product.ingredients.contains_animal_ingredients != true ) )
			return 'icon-vegan.png';
		else if ( product.manufacturer_confirms_vegan || ( product.ingredients.additives_may_come_from_animal_origin == true && product.ingredients.contains_animal_additives != true && product.ingredients.contains_eggs != true && product.ingredients.contains_animal_milk != true && product.ingredients.contains_animal_ingredients  != true ) )
			return 'icon-maybe-vegan.png';
		else
			return 'icon-lacto-vegetarian.png';
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