$(document).ready(function() {
  $(".js-example-basic-single").select2();


  /* Open/close aside */

  $(function() {
  	$('.turn-aside').click(function(event) {
  		event.preventDefault();
  		$('aside').animate({'left':'-20%'});
  		$('.main-container').animate({
  			'width':'100%',
  			'marginLeft':'0'
  		});
  		$('.turn-aside').animate({'marginLeft':'20px'});
  	});
  });

  $(function() {
  	if (!$('aside').is('.aside-open')) {
  		$('.main-container').addClass('width-100')
  	} 
  });

});