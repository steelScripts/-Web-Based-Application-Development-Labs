var change = 0; 
$(document).ready(function() {
	//On hover 
	$("#doge").hover(function() {
		if(change == 0) {
			$("#doge").attr("src", "doge2.png");
			change++;
		}
		else if(change == 1) {
			$("#doge").attr("src", "doge.jpg");
			change--;
		}
	});	
	
	//Image border click
	$("#doge").on("click", function() {
		$("#doge").css("border", "solid red 3px");
	});
	
	//Check text in textbox
	$("#textBox").blur(function() {
		if($("#textBox").text() == "") {
			$("form").css("background-color", "red");
		}
		else{
			$("form").css("background-color", "#FFFFCC");
		}
	});
	
	//Title click event
	$("#pageTitle").on("click", function() {
		$("#slideshow").toggle();
	});
	
	//Grow and shrink picture	
	$(document).keydown(function() {
		var currentWidht = $("#doge").attr("width");
		var currentHeight = $("#doge").attr("height");
		
		if(event.which == "a") {
			currentWidth += 2;
			$("#doge").attr("width", currentWidth);
			currentHeight += 2;
			$("#doge").attr("height", currentHeight);
		}
		else if(event.which == "s") {
			currentWidth -= 2;
			$("#doge").attr("width", currentWidth);
			currentHeight -= 2;
			$("#doge").attr("height", currentHeight);
		}
	});
	
});