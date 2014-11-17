# Cross-Platform Application Template

I originally created this template for my [talk](https://speakerdeck.com/ricardoalcocer/advanced-cross-platform-development) at [ConnectJS 2014](http://www.connect-js.com/).

The template provides the necessary scaffolding to implement platform-specific containers, with content reusability.  This is how it works:

![](http://drops.ricardoalcocer.com/drops/readme_image-Nxc2gu6gH5.png)
![](http://sht.tl/VYhJar)

* **Index.xml** is an empty view
* **Index.js** picks up the request and loads the "home" controller
* The "home" controller is platform specific, so you have two versions: **/views/ios/home.xml and /views/android/home.xml**. Alloy picks up the right one for the platform.
* **Home.xml** "Requires" the "sharedhome" controller
* **Home.js** is a single cross-platform controller used by either one of the home.xml files.  From here we can "talk" to the "sharedhome" files, effectively providing platform-specific containers with shared content

## Important to keep in mind
This template project is using platform-specific folders to organize your **main app containers** and keep them in separate places.  This practice is perfectly fine for the main container.  For all other windows I recommend you keep your code in a single View file and use the platform attribute, for example:

```xml
<Alloy>
  <Window backgroundColor="#fff">

    <!-- this tag is Android-only -->
    <ActionBar platform="android" title="Window Title"/>

    <!-- this tag is iOS-only -->
    <Toolbar platform="ios" title="Window Title" top="20">
      <Items>
        <FlexSpace/>
        <Label id="wintitle">Window Title</Label>
        <FlexSpace/>
      </Items>
    </Toolbar>

  </Window>
</Alloy>
```

The same thing goes for your controllers, where you can use platform variables like:

```javascript

if (OS_IOS){
  // do some iOS stuff
}else if (OS_ANDROID){
  // do some Android stuff
}

```

# Versions

**1.1**

* iPad and Android Tablet checks

**1.0**

* Initial release


## Using Studio?

My buddy [Andrew McElroy](http://twitter.com/sophrinix) of [CodexLabs](http://www.codexlabs.com/) turned this template into an [Aptana Ruble](https://github.com/CodexLabs/RicardoBootstrap.ruble) that can be integrated into Studio, allowing you to select the template at the time of project creation.


> NOTE: **home.js** includes ActionBarExtras to help you easily customize the ActionBar without the need for custom ActionBar Styles

---

Licensed under the terms of the [MIT License](http://alco.mit-license.org)