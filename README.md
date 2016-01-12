# Vegokoll
A meteor.js app that uses GTIN to check if a product is vegan or not. Built for Djurens Rätt but open for everyone to fork and redustribute.

Please report issues or send in your own pull requests if you find bugs or have ideas for new features.


## Installation

	$ git clone https://github.com/redundans/hundraprocentveganskt.git
    $ cd hundraprocentveganskt
    $ meteor --server=http://hundraprocentveganskt.herokuapp.com/

## Build for Google Appstore

	$ keytool -genkey -alias vegokoll -keyalg RSA -keysize 2048 -validity 10000
	cd {buildfolder}/android
	$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-unsigned.apk vegokoll
	$ ANDROID_HOME/build-tools/23.0.0/zipalign 4 release-unsigned.apk release-production.apk