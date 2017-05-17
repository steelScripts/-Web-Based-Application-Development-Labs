var hide = 0;
$(document).ready(function(){
	//effects added
	$("#effects").click(function(){ 
		$("slide").fadeIn("slow");
		$("#tnails.img").slideUp("slow");
		$("body").css("background-color", "gray");
	});
	
	$("#style").click(function(){
		$("#imgBig").css("padding", "5px");
		$("#imgBig").css("border", "solid");
		$("#imgBig").css("border-width", "5px");
		$("footer").css("background-color", "blue");
	});
	$("#effects").click(function(){
		$("h1").toggle();
	});
	$("img.tn.leftcol").click(function() {
		var image = this;
		$("#imgBig").hide();
		$("#slide").append(image);
		
	});
	$("img.tn.rightcol").hover(function() {
		var image = $(this);
		$("#imgBig").hide();
		$("#slide").append(image);
		
	});
	$("img.tn.rightcol").mouseleave(function() {
		var image = $(this);
		$("#imgBig").show();
		$("#slide".image).hide();
		image.show();
	});
});
