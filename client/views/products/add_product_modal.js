Template.addProductModal.helpers({ 
	gtin: function () {
		var gtin = Router.current().params['gtin'];
		return gtin;
	},
	categories: function () {
		return Categories.find();
	}
});

Template.addProductModal.rendered = function(){
	if (Meteor.isCordova) {
		StatusBar.styleDefault();
	}
};

Template.addProductModal.events({
	'click .bar-stable .button.button-icon': function ( event ) {
		if (Meteor.isCordova) {
			StatusBar.styleLightContent();
		}
	},
	'submit .new-product': function ( event ) {
		var modal = $(event.currentTarget).parents('.modal').get(0);
		var modalView = Blaze.getView(modal);
		var tplView = Meteor._get(modalView, 'parentView', 'parentView'); // Twice because the parent view is a #with block
		var tplName = tplView.name.slice('Template.'.length, tplView.name.length);

		var title = event.target.title.value;
		var subtitle = event.target.subtitle.value;
		var gtin = parseInt(event.target.gtin.value);
		var brand = event.target.brand.value;
		var category = event.target.category.value;

		var contains_animal_milk = event.target.contains_animal_milk.checked;
		var contains_eggs = event.target.contains_eggs.checked;
		var contains_animal_ingredients = event.target.contains_animal_ingredients.checked;
		var additives_may_come_from_animal_origin = event.target.additives_may_come_from_animal_origin.checked;
		var gluten_free = event.target.gluten_free.checked;

		var contains_traces_of_milk = event.target.contains_traces_of_milk.checked;
		var contains_traces_of_eggs = event.target.contains_traces_of_eggs.checked;

		var manufacturer_confirms_vegetarian = event.target.manufacturer_confirms_vegetarian.checked;
		var manufacturer_confirms_vegan = event.target.manufacturer_confirms_vegan.checked;
		var hundred_procent_vegan = false;
		var general_comment = event.target.general_comment.value;
		var organic = event.target.organic.checked;

		var approved = false;

		if ( title === '' || brand === '' || gtin === '' || category === '' ){
			IonPopup.alert({
				title: 'För lite information!',
				template: 'Fyll gärna i produktens <strong>namn</strong>, <strong>tillverkare</strong> och välj <strong>kategori</strong> så vi snabbare kan lägga till produkten.',
				okText: 'Ok!',
				okType: 'button-positive'
			});
			return false;
		} else {

			product = {
				gtin: gtin,
				title: title,
				subtitle: subtitle,
				brand: brand,
				category: category,
				ingredients: {
					contains_animal_milk : contains_animal_milk,
					contains_eggs : contains_eggs,
					gluten_free: gluten_free,
					additives_may_come_from_animal_origin: additives_may_come_from_animal_origin,
					contains_animal_ingredients : contains_animal_ingredients
				},
				other: {
					contains_traces_of_milk : contains_traces_of_milk,
					contains_traces_of_eggs : contains_traces_of_eggs,
					animal_tested: false,
					organic: organic
				},
				manufacturer_confirms_vegetarian: manufacturer_confirms_vegetarian,
				manufacturer_confirms_vegan: manufacturer_confirms_vegan,
				hundred_procent_vegan: hundred_procent_vegan,
				general_comment: general_comment,
				approved: approved
			};

			Meteor.call('insertproduct', product);

			IonPopup.alert({
				title: 'Klart!',
				template: 'Tack för att du hjälper oss att skapa en bättre vegansk värld.',
				okText: 'Tillbaka',
				okType: 'button-positive',
				onOk: function() {
					if (Meteor.isCordova) {
						StatusBar.styleLightContent();
					}
					IonModal.close( tplName );
				}
			});

		}

		return false;
	}
});