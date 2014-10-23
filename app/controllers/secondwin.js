var args = arguments[0] || {};

function closewin(evt){
	$.secondwin.close();
}

function doopen(evt){
	if (OS_ANDROID){
		var abx=require('com.alcoapps.actionbarextras');
		abx.setBackgroundColor('#dddddd');
	}
}