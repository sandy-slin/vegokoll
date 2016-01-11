App.info({
	id: 'se.djurensratt.vegokoll',
	name: 'Vegokoll',
	description: 'A app that let you check if a product is vegan or not.',
	author: 'Djurens Rätt',
	email: 'info@djurensratt.se',
	website: 'http://www.djurensratt.se',
	version: '1.0'
});

App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'lightcontent');

App.accessRule('*');

App.icons({
	// iOS
	'iphone_2x': 'public/assets/iOS/Resources/icons/Icon-120.png',
	'iphone_3x': 'public/assets/iOS/Resources/icons/Icon-180@3x.png',
	'ipad': 'public/assets/iOS/Resources/icons/Icon-76.png',
	'ipad_2x': 'public/assets/iOS/Resources/icons/Icon-152.png',

	// Android
	'android_ldpi': 'public/assets/Android/res/drawable-ldpi/icon.png',
	'android_mdpi': 'public/assets/Android/res/drawable-mdpi/icon.png',
	'android_hdpi': 'public/assets/Android/res/drawable-hdpi/icon.png',
	'android_xhdpi': 'public/assets/Android/res/drawable-xhdpi/icon.png'
});

App.launchScreens({
	// iOS
	'iphone_2x': 'public/assets/iOS/Resources/splash/Default@2x~iphone_640x960.png',
	'iphone5': 'public/assets/iOS/Resources/splash/Default-568h@2x~iphone_640x1136.png',
	'iphone6': 'public/assets/iOS/Resources/splash/Default-750@2x~iphone6-portrait_750x1334.png',
	'iphone6p_portrait': 'public/assets/iOS/Resources/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png',
	'iphone6p_landscape': 'public/assets/iOS/Resources/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png',
	'ipad_portrait': 'public/assets/iOS/Resources/splash/Default-Portrait~ipad_768x1024.png',
	'ipad_portrait_2x': 'public/assets/iOS/Resources/splash/Default-Portrait@2x~ipad_1536x2048.png',
	'ipad_landscape': 'public/assets/iOS/Resources/splash/Default-Landscape~ipad_1024x748.png',
	'ipad_landscape_2x': 'public/assets/iOS/Resources/splash/Default-Landscape@2x~ipad_2048x1536.png',

	// Android
	'android_ldpi_portrait': 'public/assets/Android/res/drawable-ldpi/screen.png',
	'android_ldpi_landscape': 'public/assets/Android/res/drawable-land-ldpi/screen.png',
	'android_mdpi_portrait': 'public/assets/Android/res/drawable-mdpi/screen.png',
	'android_mdpi_landscape': 'public/assets/Android/res/drawable-land-mdpi/screen.png',
	'android_hdpi_portrait': 'public/assets/Android/res/drawable-hdpi/screen.png',
	'android_hdpi_landscape': 'public/assets/Android/res/drawable-land-hdpi/screen.png',
	'android_xhdpi_portrait': 'public/assets/Android/res/drawable-xhdpi/screen.png',
	'android_xhdpi_landscape': 'public/assets/Android/res/drawable-land-xhdpi/screen.png'

});