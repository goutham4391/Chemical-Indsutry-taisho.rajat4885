$(function(){
/*=============================================================
 set home script
=============================================================*/
/* home-slider
-------------------------------------------------------------*/
var nSpeed=500;
var nDelay=4000;

$('#mainVisual').slick({
	autoplay: true,
	speed: nSpeed,
	autoplaySpeed: nDelay,
	dots: true,
	pauseOnFocus: false,
	pauseOnHover: false,
 arrows: true,
 prevArrow:'<div class="slick-arrow prev"></div>',
 nextArrow:'<div class="slick-arrow next"></div>'
});




});
/* //end onload function */