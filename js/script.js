(function ($, root, undefined) {

	$(function() {

		'use strict';

		$('document').ready(function() {

			$('.question-and-answer').click(function() {

				$('.answer').slideUp(200);

				if( $(this).hasClass('active') ) {

					$('.question-and-answer').removeClass('active');

				} else {

					$('.question-and-answer').removeClass('active');

					$(this).addClass('active');

			  		$(this).find('.answer').slideDown(200);
				}
			})
		});
	});

})(jQuery, this);