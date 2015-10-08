$( document ).ready(function() {

	$("section h4").click(function() { 
		
		if(!$(this).next().hasClass("open")) {
			$(".expandable.open").slideUp(400).removeClass("open");

			$(this).next().addClass("open");
			$(".open").slideDown(400);
		}

		else {
			$(".expandable.open").slideUp(400).removeClass("open");
		}

	});

	$(".expandable nav a").click(function() {
		$(".expandable nav a.current").removeClass("current");
		$(".expandable div.current").removeClass("current");

		$(this).addClass("current");
		var mti_nav = $(this).index();
		$(".expandable div").eq(mti_nav).addClass("current");

	}); 

	$(".expandable div a.next").click(function() {
		$(".expandable nav a.current").next().trigger("click");
	});

	$(".expandable div a.previous").click(function() {
		$(".expandable nav a.current").prev().trigger("click");
	});

	$(".expandable div a.next-section").click(function() {
		$(".expandable.open").parent().next().find("h4").trigger("click");
	});

});

// add a different class to the divs, or wrap all the divs inside of another div