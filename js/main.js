/******************************************************
 *			Réalisé par : DOULADI Oussama	          *
 *			Date : 02/2020                            *
 ******************************************************
*/
//slider height
function sliderHeight() {
    var height1=$('header').innerHeight();
    var winHeight=$(window).innerHeight();
    var winWidth=$(window).innerWidth();
	var sliderHeight;
	if(winWidth>768){
		sliderHeight=winHeight-height1;
	}
	else{
		sliderHeight=300;
	}
    
    $('#slider1 img').innerHeight(sliderHeight);
}
$(document).ready(sliderHeight);
$(window).resize(sliderHeight);

//Duree slider images 3s
$('.carousel').carousel({
  interval: 2000
});
//Date aujoud'hui
setInterval(function(){
    var dt = new Date();
    $('#date').html("Date d'aujourd'hui <b>"+dt.toLocaleString()+"</b>");
},1000);

//items hover effect
$('.item').hover(function(){$(this).toggleClass('shadow')});

// Gallery Buttons Change bg 
$('.buttons button').click(function(){
        
	$(this).addClass('active_btn').siblings().removeClass('active_btn');
	
	var CSSFilter = $(this).attr('id');
	
	if( CSSFilter === 'all' ) {
		$('.Images .row > div ').fadeIn();
	} else {
		$('.Images .row > div ').fadeOut();
		$('.Images .row').contents().filter('.' + CSSFilter).fadeIn();
	}
	
});
// Fade The Scroll Top Btn
$(window).scroll(function(){
	var sc = $(this).scrollTop();
	
	
	if ( sc > 500) { 
		$('.scrollTop').fadeIn();
	} 
	else 
	{
		$('.scrollTop').fadeOut();
		if(sc > 45)
		{
			$('.bottomnav').addClass('fixed-top').addClass('clrNav');
			$('.mySlide').css('marginTop','60px');
		}
		else 
		{
			$('.bottomnav').removeClass('fixed-top').removeClass('clrNav');
			$('.mySlide').css('marginTop','0px');
		}
	}
	
});
//hide collapse  navbar on click Bootstrap 4
$('.navbar-nav>li>a:not(.dropdown-toggle),.dropdown-menu a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
// Scroll to Top
$('.scrollTop').click(function(){
	$('body,html').animate({
		scrollTop : 0
	},800);
});
//autres links
$('.vendre').click(function(){
	var winWidth=$(window).innerWidth();
	if(winWidth>768){
			$('body,html').animate({
			scrollTop : 600
		},500);
	}
	else{
		$('body,html').animate({
		scrollTop : 400
	},500);
	}
	
});

