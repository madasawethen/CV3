$( document ).ready(function() {

	$("section h4").click(function() { 
		
		if(!$(this).next().hasClass("open")) {
			$(".expandable.open").slideUp(400).removeClass("open");

			$(this).next().addClass("open");
			$(".open").slideDown(400);

			if($(this).parent().attr("id") == "mti") {
			$(this).next().find("nav a").eq(0).trigger("click");
			}
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
		// $(".expandable div").eq(mti_nav).addClass("current");
		$(this).parents(".expandable").find(".slides div").eq(mti_nav).addClass("current");

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

	$("#theme section").click(function(){
		var love = "resume.html?theme=" + $(this).attr("class");
		// window.location.replace(love);
		window.location.href = love;
	});

	if ($("body").attr("id") == "resume") {
	

	}





  // var hash = window.location.hash,
  // hash_parts = hash.split("/"),
  // filter = hash_parts[0].slice(1),
  // link_attr = ".tag-" + filter;

});


