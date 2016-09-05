$(function(){
	// === Smooth Scroll ===
	$('body a').on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(hash).offset().top},
			400,
			function(){
				window.location.hash = hash;
			});
		};
	});

	// === Animate on Scroll ===
	var $animated_bar = $('.progress-bar-container');
	var $animated_thumbnail = $('.thumbnail');
	var animation_bar = 'slideInLeft animated';
	var animation_thumbnail = 'fadeInUp animated';
	var $window = $(window);
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animated_bar, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);			

			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass(animation_bar);
			} 
		});

		$.each($animated_thumbnail, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass(animation_thumbnail);
			} 
		});

		$(function() {
			var $ctaTop = $('#cta-top');			
			if (window_bottom_position > window_height) {
				$ctaTop.fadeIn();
			}
			else {
				$ctaTop.fadeOut();
			}
		});
		

	}

	

		
	
	// === fixed large screen thumbnail ===
	$(window).resize(function() {
		var $winWidth = $(window).width();
		if ($winWidth >= 1200) {
			$('.lg').addClass('row');
			$('.md').removeClass();
		} else {
			$('.md').addClass('row');
			$('.lg').removeClass();
		}
	})
});
