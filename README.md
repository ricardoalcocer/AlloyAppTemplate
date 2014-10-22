# Cross-Platform Application Template

I originally created this template for my [talk](https://speakerdeck.com/ricardoalcocer/advanced-cross-platform-development) at [ConnectJS 2014](http://www.connect-js.com/).

The template provides the necessary scaffolding to implement platform-specific containers, with content reusability.  This is how it works:

* **Index.xml** is an empty view
* **Index.js** picks up the request and loads the "home" controller
* The "home" controller is platform specific, so you have two versions: **/views/ios/home.xml and /views/android/home.xml**. Alloy picks up the right one for the platform.
* **Home.xml** "Requires" the "sharedhome" controller
* **Home.js** is a single cross-platform controller used by either one of the home.xml files.  From here we can "talk" to the "sharedhome" files, effectively providing platform-specific containers with shared content

> NOTE: **home.js** includes ActionBarExtras to help you easily customize the ActionBar without the need for custom ActionBar Styles

---

Licensed under the terms of the [MIT License](http://alco.mit-license.org)