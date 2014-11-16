/*
Even though your Views are platform-specific, you can still keep your controllers cross-platform.
This controller will be used for your home View regardless of the platform, so you'll have to
manually check in case you need to perform platform-specific operations
*/

var args = arguments[0] || {};

if (!Alloy.isTablet){
  if (OS_IOS){
    $.sharedhome.greeting.text = "Hello from iOS";
  }else if (OS_ANDROID){
    $.sharedhome.greeting.text = "Hello from Android"
  }
}else{
  if (OS_IOS){
    console.log('ipad');
    $.sharedhome.greeting.text = "Hello from iPad";
  }else if (OS_ANDROID){
    $.sharedhome.greeting.text = "Hello from Android Tablet"
  }
}

function doopen(evt){
	if (OS_ANDROID){
		var abx=require('com.alcoapps.actionbarextras');
		abx.setBackgroundColor('#dddddd');
	}
}

function doadd(evt){
	if (OS_IOS){
		$.nav.openWindow(Alloy.createController('secondwin').getView());
	}else if (OS_ANDROID){
		Alloy.createController('secondwin').getView().open();
	}
}