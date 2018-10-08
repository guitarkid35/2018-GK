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
	    return false;
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

// workbg
var time = 0;
var stars =  [
	{
		el: ".ball-b",
		r: 350,
		speed: 0.2,
		width: 70,
	},
	{
		el: ".ball-c",
		r: 600,
		speed: 0.1,
		width: 90,
	},
]
function update() {
	stars.forEach((star)=>{
		var r = star.r;
		var angle = star.speed * time * 2;
		var x = r * Math.cos((angle / 360) * (Math.PI * 2))- star.width / 2;
		var y = r * Math.sin((angle / 360) * (Math.PI * 2))- star.width / 2;
		$(star.el).css("transform","translate("+x+"px,"+y+"px)");
		time+=1;
	});
}
setInterval(update,24);

if ($(window).width() > 768) {
	$(window).update();
}
//TweenMax-RWD
var timeline = new TimelineMax({

})
timeline.from("#sun1",1.5,{
	y:"-=300",
})
