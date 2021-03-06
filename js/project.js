$( document ).ready(function() {

	$("section h4").click(function() { 
		var theme2 = false;
		if ($(this).parent().hasClass("theme2")) {
			theme2 = true;
		}
		if (!$(this).next().hasClass("open")) {
			$(".expandable.open").slideUp(400).removeClass("open");
			resetSlideshow();
			$(this).next().addClass("open");
			$(".open").slideDown(400, function() {
				if (theme2) {
					animateSpans();
				}
			});
			if (theme2) {
				$(this).parent().removeClass("leo");
			}
			drunkHeight();

			if ($(this).parent().attr("id") == "mti") {
			$(this).next().find("nav a").eq(0).trigger("click");
			}
		}

		else {
			$(".expandable.open").slideUp(400,function(){
					if (theme2) {
				$(this).parent().addClass("leo");
			}
			}).removeClass("open");
		
		}

	});

	$(".expandable nav a").click(function() {
		$(".expandable nav a.current").removeClass("current");
		$(".expandable div.current").removeClass("current");

		$(this).addClass("current");
		var mti_nav = $(this).index();
		// $(".expandable div").eq(mti_nav).addClass("current");
		$(this).parents(".expandable").find(".slides div.slide-wrapper").eq(mti_nav).addClass("current");

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
		if(!$(this).hasClass("preview")) { 
		var love = "resume.html?theme=" + $(this).attr("class");
		// window.location.replace(love);
		window.location.href = love;
		}
	});


    if ($("body").attr("id") == "resume") {
        var something = window.location.href;
        var i = something.indexOf("?");
	        if(i >= 0) {
	        	var classname = something.substring(something.indexOf("?")+7);
	        	if (classname != "") {
	            $("body").removeClass();
	            $("body").addClass(classname);

	            if (classname == "theme1") {
	            	$('[data-theme1]').each(function(){
	  				$(this).addClass($(this).data("theme1"));
					});
	            }
	        }
	    }
	        	
    }
    		 
		    $("#next").click(function(e){
		  e.preventDefault();
		 var wrapperwidth = $("#wrapper").width();
		 drunkHeight();
		 	$(".active").removeClass("active").next().addClass("active");
		    $("#slides").animate({left: "-="+wrapperwidth}, 500, function(){
		    animateSpans();
		  });
		  checkArrows(); 
		});

		$("#prev").click(function(e){
		  e.preventDefault();
		  var wrapperwidth = $("#wrapper").width();
		  drunkHeight();
		  	$(".active").removeClass("active").prev().addClass("active");
		    $("#slides").animate({left: "+="+wrapperwidth}, 500, function(){
		    animateSpans();
		  });
		  checkArrows(); 
		});

		checkArrows();

		function animateSpans() {
			$(".slide span").hide();
			$(".slide span").removeClass();
			setTimeout(function() {
				$(".slide.active span").each(function(){
				$(this).addClass("animated").show().addClass($(this).data("animation"));
			});
			}, 1000);
		}

		function checkArrows() {
			 if ($(".active").hasClass("fourths")) {
		    	$("#next").hide();
		    }
		     else {
		    	$("#next").show();
		    }
		    if ($(".active").hasClass("halves")) {
		    	$("#prev").hide();
		    }
		    else {
		    	$("#prev").show();
		    }
		}

			function drunkHeight() {
			  var wrapperWidth = $("#wrapper").width();
			  var newHeight = wrapperWidth * .6;
			  	$("#wrapper").height(newHeight);
  				$("#slides").height(newHeight);
  				$(".slide").height(newHeight);
  				$(".slide img").height(newHeight);
			}

			function resetSlideshow() {
				$("#slides").stop().animate({left: 0}, 500);
			  	drunkHeight();
			  	$("#slides .slide").removeClass("active");
			  	$("#slides .slide").eq(0).addClass("active");
			  	checkArrows();
			  	animateSpans();
			}

			drunkHeight();

			$(window).resize(function(){
				resetSlideshow();
			});



});


