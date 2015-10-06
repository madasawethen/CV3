$( document ).ready(function() {

$("section h4").click(function() { 
	
	if(!$(this).next().hasClass("open")) {
		$(".expandable.open").slideUp(400).removeClass("open");
		// $(this).next().slideToggle(300);

		$(this).next().addClass("open");
		$(".open").slideDown(400);
	}


});
});