$(function() {
	$("a.top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});

$(function() {
	$("a.to_aboutme").click(function() {
		var position = $("#about-me").offset().top;
		$("html, body").animate({ scrollTop: position }, "slow");
		return false;
	});
});

$(function() {
	$("a.to_skill").click(function() {
		var position = $("#skill").offset().top;
		$("html, body").animate({ scrollTop: position }, "slow");
		return false;
	});
});

$(function() {
	$("a.to_experience").click(function() {
		var position = $("#experience").offset().top;
		$("html, body").animate({ scrollTop: position }, "slow");
		return false;
	});
});

$(function() {
	$("a.to_contact").click(function() {
		var position = $("#contact").offset().top;
		$("html, body").animate({ scrollTop: position }, "slow");
		return false;
	});
});

	