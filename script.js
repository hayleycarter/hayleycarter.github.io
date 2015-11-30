$(document).ready(function() {
	$(".card-preview").hover(function() {
		$(".image-info").fadeIn();
	})

	$(".map-point").click(function() {
		$(".info-card").hide();
		var number = $(this).attr('id').slice(-1);
		$("#i" + number).show();
		$("#dest-background").css({"background-color":"#39464A", "opacity":0.6});
		$("#up-arrow").attr("src", "images/up-arrow-light.png");
		$("html, body").animate({
        	scrollTop: $("#i" + number).offset().top
    		}, 2000);
	})

	$("#up-arrow").click(function() {
  		$("html, body").animate({ scrollTop: 0 }, "slow")
  		$("#dest-background").css({"background-color":"white", "opacity":0})
  		$("#up-arrow").attr("src", "images/up-arrow.png");
	})

	$("#homepage").mouseover(function() {
		$("#logo-camera").animate({marginTop: "50px"}, 2000);
	})
})


