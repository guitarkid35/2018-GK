$(document).ready(function(){
	//top
	$("#Top").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    	},1000, "easeInOutCirc");
	});
	$(window).scroll(function() {
	    if ( $(this).scrollTop() > 300){
	        $("#Top").fadeIn("fast");
	    } else {
	        $("#Top").stop().fadeOut("fast");
	    }
	});

	//header color change
	$(window).on("scroll",function(){
		var scrollDis = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDis > 80){
			$header.addClass("header--colorchange");
		}
		else{
			$header.removeClass("header--colorchange");
		}
	})
	//skills-slider
	$(window).on("scroll", function(){
		var scrollDis = $(window).scrollTop();
		if(scrollDis > 600){
    		$(".js-skill").addClass("skill_line");
		}
		else{
			$(".js-skill").removeClass("skill_line");
		}
	});
	//WOW-plugin
	if($(window).width() > 768){
		new WOW().init();
	}
	//stellar
	if($(window).width() > 768){
		$(window).stellar();
	}
	//slide
	$("#at").click(function(){
		$("html,body").animate({scrollTop:$("#about").offset().top}, 900, "easeInOutCirc");
	});
	$("#sk").click(function(){
		$("html,body").animate({scrollTop:$("#skills").offset().top}, 900, "easeInOutCirc");
	});
	$("#ex").click(function(){
		$("html,body").animate({scrollTop:$("#experience").offset().top}, 900, "easeInOutCirc");
	});
	$("#wk").click(function(){
		$("html,body").animate({scrollTop:$("#works").offset().top}, 900, "easeInOutCirc");
	});
	$("#ct").click(function(){
		$("html,body").animate({scrollTop:$("#contact").offset().top}, 900, "easeInOutCirc");
	});
	$("#tk").click(function(){
		$("html,body").animate({scrollTop:$("#contact").offset().top}, 900, "easeInOutCirc");
	});
})

