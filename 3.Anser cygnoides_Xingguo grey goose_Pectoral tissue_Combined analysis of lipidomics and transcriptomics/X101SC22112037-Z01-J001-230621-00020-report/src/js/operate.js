function operateParent(html,widths,heights){
	var t=window.parent;
	var index=window.name;
	var isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1
	var isFirefox=navigator.userAgent.toUpperCase().indexOf("Firefox")?true:false; 
    if(isChrome){
		t.postMessage("procMainPage?"+html+"?"+index+"?"+widths+"?"+heights, '*');
    }else if(isFirefox){
		t.postMessage("procMainPage?"+html+"?"+index+"?"+widths+"?"+heights, '*');
    }else{
		t.procMainPage(html,index,widths,heights);
    }
}

function showlayer(width,height,srchtml){
	$.layer({
		type: 2,
		shadeClose: true,
		title: false,
		closeBtn: [0, true],
		shade: [0.8, '#000'],
		border: [0],
		area: [width, height],
		iframe: {src: srchtml},
		scrolling: 'no'
	}); 
}
function receiveMessage(e) { 
     var data = e.data; 
	 var arr=data.split("?");
	 procMainPage(arr[1],arr[2],arr[3],arr[4]);
} 
function procMainPage(srchtml,iframe_index,widths,heights){
	 var index = layer.getFrameIndex(iframe_index);
	 layer.close(index);
	 showlayer(widths, heights,'dynamic/'+srchtml);
}
if (typeof window.addEventListener != 'undefined') {//使用html5 的postMessage必须处理的
     window.addEventListener('message', receiveMessage, false); 
} else if (typeof window.attachEvent != 'undefined') {
     window.attachEvent('onmessage', receiveMessage); 
} 
function showSonline(operateid,img,alt){
	$("body").Sonline({
		Position:"right",
		Top:250,
		Effect:true,
		DefaultsOpen:true,
		imgsrc:"<img id='"+operateid+"' src='../images/echartnav/"+img+"' style='width:70px;height:70px;' title='"+alt+"'>" 
	});
}
function closeSonline(){
	$("#SonlineBox").hide();
}
function isShowSonline(){
	if($("#SonlineBox").is(":visible")){
		return true;
	}else{
		return false;
	}
}