$(document).ready(function() {
  $(".js-example-basic-single").select2();


  /* Open/close aside */

  $(function() {
  	$('.turn-aside').click(function(event) {
  		event.preventDefault();
  		
  		if($(this).hasClass('aside-open')) {
  			console.log('closed');
  			$(this).removeClass('aside-open');

  			$('aside').animate({'left':'-20%'});
  			$('.main-container').animate({
											  			'width':'100%',
											  			'marginLeft':'0'
											  		});
  			$('.turn-aside').animate({'marginLeft':'20px'});

  		} else {
	  			console.log('open');
	  			$(this).addClass('aside-open');
	  			$('aside').animate({'left':'0'});

	  			$('.main-container').animate({
												  			'width':'80%',
												  			'marginLeft':'20%'
												  		});
	  			$('.turn-aside').animate({'marginLeft':'0'});
  			}
  	});
  });



});