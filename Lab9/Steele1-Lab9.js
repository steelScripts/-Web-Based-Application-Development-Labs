/*This function is called when the window is done loading*/
var imageCounter = 0;
var changed = false;
window.onload = function() {
	$("#doge").css("display", "inline");
	//enter in the function to be called when the button is clicked
	document.getElementById("before").addEventListener("click", imageBefore);
	document.getElementById("after").addEventListener("click", imageAfter);
	document.getElementById("changeStyle").addEventListener("click", changeStyle);
};

/*This function is called when the button is pressed*/
function imageBefore() {
	if(imageCounter == 0) {
		$("#doge").css("display", "none");
		$("#doge2").css("display", "inline");
		imageCounter = 2; 
	}
	else if(imageCounter == 2) {
		$("#doge2").css("display", "none");
		$("#myPic").css("display", "inline");
		imageCounter--;
	}
	else if(imageCounter == 1) {
		$("#myPic").css("display", "none");
		$("#doge").css("display", "inline");
		imageCounter--;
	}
}

function imageAfter() {
	if(imageCounter == 2) {
		$("#doge2").css("display", "none");
		$("#doge").css("display", "inline");
		imageCounter = 0;
	}
	else if(imageCounter == 0) {
		$("#doge").css("display", "none");
		$("#myPic").css("display", "inline");
		imageCounter++; 
	}	
	else if(imageCounter == 1) {
		$("#myPic").css("display", "none");
		$("#doge2").css("display", "inline");
		imageCounter++;
	}
}

function changeStyle() {
	if(changed == false) {
		$("#slideshow").css({"border":"solid", "border-width":"10px", "border-color":"white"});
		$("#slideshow").css("background-color", "gray");
		changed = true;
	}
	else if(changed == true) {
		$("#slideshow").css("border", "none");
		$("#slideshow").css("background-color", "#FFFFCC");
		changed = false;
	}
	
	
}