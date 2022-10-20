/*=============================================================
 setting
=============================================================*/
function xCheckHistory(){
	if($('#container').css('min-width')=='320px'){return true;}else{return false;}
}

/*=============================================================
 HISTORY
=============================================================*/
var parentElm='';
var targetElm='';
var targetHeight='';
var parentElmTop='';
var targetElmTop='';

$(function(){
/* TXT clone
-------------------------------------------------------------*/
$('.historyBox01').clone().appendTo('.spHistoryBox01');
$('.historyBox02').clone().appendTo('.spHistoryBox02');
$('.historyBox03').clone().appendTo('.spHistoryBox03');

/* TOGGLE
-------------------------------------------------------------*/
$('.boxHistory dt').on('click', function(){
	parentElm=$(this).parent('dl');
	targetElm=$(this).siblings('dd');
	targetHeight=targetElm.children('div.boxContentsOuter').outerHeight();
	parentElmTop=parentElm.offset().top-($('#header').outerHeight());
	targetElmTop=targetElm.offset().top-($('#header').outerHeight());
	if(!xCheckHistory()){
	 parentElmTop=parentElm.offset().top-($('#topicPath').outerHeight());
	 targetElmTop=targetElm.offset().top-($('#topicPath').outerHeight());
	}
	if(!parentElm.hasClass('open')){
		parentElm.addClass('open');
		$(targetElm).outerHeight(targetHeight);
		$('body,html').animate({scrollTop:targetElmTop});
	}else{
		parentElm.removeClass('open');
		$(targetElm).outerHeight(0);
		$('body,html').animate({scrollTop:parentElmTop});
	}
});

$('.boxHistory dd .boxIcnBtn').on('click', function(){
	parentElm=$(this).parent('div').parent('div').parent('dd').parent('dl');
	targetElm=$(this).parent('div').parent('div').parent('dd');
	targetHeight=targetElm.children('div.boxContentsOuter').outerHeight();
	parentElmTop=parentElm.offset().top-($('#header').outerHeight());
	targetElmTop=targetElm.offset().top-($('#header').outerHeight());
	if(!xCheckHistory()){
	 parentElmTop=parentElm.offset().top-($('#topicPath').outerHeight());
	 targetElmTop=targetElm.offset().top-($('#topicPath').outerHeight());
	}
	parentElm.removeClass('open');
	$(targetElm).outerHeight(0);
	$('body,html').animate({scrollTop:parentElmTop});
});

	
	
});
/* //end onload function */