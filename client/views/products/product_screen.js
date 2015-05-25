Template.productScreen.rendered = function(){
	if( Products.findOne() === undefined ){
		/*
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
					type: 'button-positive',
					onTap: function(event, template) {
					    var gtin = Router.current().params['gtin'];
						Router.go('/add-product/'+gtin);
						return true;
					}
				}
			]
		});
		*/
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
		if ( this.hundred_procent_vegan == true )
			return 'icon-100-vegan.png';
		else if ( this.manufacturer_confirms_vegan || ( this.ingredients.additives_may_come_from_animal_origin != true && this.ingredients.contains_animal_additives != true && this.ingredients.contains_eggs != true && this.ingredients.contains_animal_milk != true && this.ingredients.contains_animal_ingredients != true ) )
			return 'icon-vegan.png';
		else if ( this.manufacturer_confirms_vegan || ( this.ingredients.additives_may_come_from_animal_origin == true && this.ingredients.contains_animal_additives != true && this.ingredients.contains_eggs != true && this.ingredients.contains_animal_milk != true && this.ingredients.contains_animal_ingredients  != true ) )
			return 'icon-maybe-vegan.png';
		else
			return 'icon-lacto-vegetarian.png';
	},
	glutenFreeClass: function () {
		if ( this.ingredients.gluten_free == true )
			return 'active';
		else
			return 'inactive';
	},
	organicClass: function () {
		if ( this.other.organic == true )
			return 'active';
		else
			return 'inactive';
	},
	lactoseCLass: function () {
		if ( this.ingredients.contains_animal_milk != true && this.other.contains_traces_of_milk != true )
			return 'active';
		else
			return 'inactive';
	},
	categoryName: function () {
		var category = Categories.findOne({code: this.category});
		return category.name;
	}
});