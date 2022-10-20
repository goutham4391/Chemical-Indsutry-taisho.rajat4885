/*=============================================================
 include library
=============================================================*/
/* set CSS Browser Selector */
/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
/* //end CSS Browser Selector */

/* set rwdImageMaps */
/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);
/* //end rwdImageMaps */

/* set jquery-auto-height */
/*
 * jquery-auto-height.js
 *
 * Copyright (c) 2010 Tomohiro Okuwaki (http://www.tinybeans.net/blog/)
 * Licensed under MIT Lisence:
 * http://www.opensource.org/licenses/mit-license.php
 * http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license
 *
 * Since:   2010-04-19
 * Update:  2013-08-16
 * version: 0.04
 * Comment:
 *
 * jQuery 1.2 <-> 1.10.2
 *
 *//* Edited */
(function($){$.fn.autoHeight=function(options){var op=$.extend({column:0,clear:0,height:'minHeight',reset:'',descend:function descend(a,b){return b-a}},options||{});var self=$(this);var n=0,hMax,hList=new Array(),hListLine=new Array();hListLine[n]=0;self.each(function(i){if(op.reset=='reset'){$(this).removeAttr('style')}var h = $(this).css('box-sizing')=='border-box'?$(this).outerHeight():$(this).height();hList[i]=h;if(op.column>1){if(h>hListLine[n]){hListLine[n]=h}if((i>0)&&(((i+1)%op.column)==0)){n++;hListLine[n]=0}}});hList=hList.sort(op.descend);hMax=hList[0];var ie6=typeof window.addEventListener=="undefined"&&typeof document.documentElement.style.maxHeight=="undefined";if(op.column>1){for(var j=0;j<hListLine.length;j++){for(var k=0;k<op.column;k++){if(ie6){self.eq(j*op.column+k).height(hListLine[j])}else{self.eq(j*op.column+k).css(op.height,hListLine[j])}if(k==0&&op.clear!=0){self.eq(j*op.column+k).css('clear','both')}}}}else{if(ie6){self.height(hMax)}else{self.css(op.height,hMax)}}}})(jQuery);
/* //end jquery-auto-height */


/*=============================================================
 setting
=============================================================*/
var bMobile=$('html').hasClass('mobile') ? true : false;
var bTouchDevice = ('ontouchstart' in document) ? true : false;
var ua =navigator.userAgent;
var nViewportW=1000;//PC:min-width or more
var viewportNormal='width=device-width, initial-scale=1';
var viewportTbP='width='+nViewportW;
if(bTouchDevice){$('html').addClass('touchDevice');}
function xCheckSmpLayout(){
	if($('#container').css('min-width')=='320px'){return true;}else{return false;}
}

if (location .protocol == "https:") {
document.write(unescape('%3Cscript src="https://ssl.syncsearch.jp/common/js/suggest_absolute.js" type="text/javascript"%3E%3C/script%3E'));
} else {
document.write(unescape('%3Cscript src="http://pro.syncsearch.jp/common/js/suggest_absolute.js" type="text/javascript"%3E%3C/script%3E'));
}
SYNCSEARCH_SITE="4L6KNUKF";
SYNCSEARCH_GROUP=11;
SYNCSEARCH_GROUP1=11;

/*=============================================================
 enable label (for iPad and iPhone)
=============================================================*/
if(ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('iPod') > -1){
	$('label').click(function(){});
}

/*=============================================================
 Set viewport
=============================================================*/
//function xChangeViewport(){
//	$('meta[name="viewport"]').attr('content', screen.width<nViewportW && !xCheckSmpLayout() ? viewportTbP : viewportNormal);
//}
//xChangeViewport();
//$(window).on('load resize', xChangeViewport);


/*=============================================================
 anchor scroll
=============================================================*/
$('a[href^="#"]:not(.noSc):not([href="#"]),area[href^="#"]:not(.noSc):not([href="#"])').on('click', function(e){
	e.preventDefault();
	if($('body:animated,html:animated').length>0){return false;}
	var nSpeed=600;//unit:msec
	var nAc=$(this).attr('href');
	if(nAc!="#" && $(nAc).length>0){
		var nHdrH=$('#header').css('position')=='fixed'?$('#header').outerHeight():0;
		var nY=$(nAc).offset().top-(nHdrH+10);
		nY=(nY<0 || nAc=="#header")?0:nY;
		$('body,html').animate({scrollTop:nY}, nSpeed, 'swing');
	}
	if(!(nAc=="#header" || $(this).hasClass('noAdd'))){window.location.hash = nAc;}
});
/* Set ancher position Y
-------------------------------------------------------------*/
$(window).on('load', function(){
	var hash_str=location.hash;
	if(hash_str && $('#header').css('position')=='fixed'){
		if(!/[^#a-zA-Z0-9-_]/.test(hash_str)){
			var nHashY=$(hash_str).offset().top-($('#header').outerHeight()+10);
			nHashY=nHashY<0?0:nHashY;
			$('body,html').animate({scrollTop:nHashY});
		}
	}
});

/*=============================================================
 Add telLink (for mobile device)
=============================================================*/
if(bMobile){
	$('.telLink').each(function(){
		var str=$(this).html();
		var class_str=$(this).attr('class');
		var tel_str=str.replace(/[^0-9]/g,"");
		tel_str=str.charAt(0)=="+" ? '+'+tel_str : tel_str;
		$(this).before($("<a>").attr({href:'tel:'+tel_str, class:class_str}).html(str)).remove();
	});
}

/*=============================================================
 header Fix
=============================================================*/
var bodyID=$('body').attr('id');

$(window).on('load scroll', function(){
	if(bodyID!="home"){
		if($(this).scrollTop()>140){
			if(!xCheckSmpLayout()){
				$('#container').addClass('gbFix');
			}
		}
		if($(this).scrollTop()<140){
			if($('#container').hasClass('gbFix')){
				$('#container').removeClass('gbFix');
			}
		}
	}else{
		if($(this).scrollTop()>91){
			if(!xCheckSmpLayout()){
				$('#container').addClass('hdrFix');
			}
		}else{
			if($('#container').hasClass('hdrFix')){
				$('#container').removeClass('hdrFix');
			}
		}
	}
});
/*=============================================================
 set Navigation
=============================================================*/
/* Set globalNav drop
-------------------------------------------------------------*/
var gNavElm=$('#globalNavSet');

$('#globalNav a.btnCat').on('click', function(){
	if(xCheckSmpLayout()){
  $(this).siblings('div').removeAttr('style').addClass('on');
	}else{
		if($(this).hasClass('act')){
			$('#globalNav>li').siblings().children('a').removeClass('act');
			$('#globalNav>li').siblings().children('div').slideUp(400);
			$('#globalNav>li').siblings().children('.hdr-gbDrop').removeClass('openPC');
			return false;
		}else{
			$(this).addClass('act').parent('li').siblings().children('a').removeClass('act');
			$(this).parent('li').siblings().children('div').slideUp(400);
			$(this).addClass('act').parent('li').siblings().children('.hdr-gbDrop').removeClass('openPC');
			$('#gbDrop-'+$(this).parent('li').attr('id').slice(3)).addClass('openPC');
			$(this).siblings('div').slideDown(400);
			$(searchElm.children('dd')).slideUp(400);
			searchElm.removeClass('open');
			return false;
		}
	}
});

$('#globalNavSet>dd .boxInner .ttlArea .btnClose').on('click', function(){
	if(xCheckSmpLayout()){
	}else{
		$('#globalNav>li').siblings().children('a').removeClass('act');
		$('#globalNav>li').siblings().children('div').slideUp(400);
		$('#globalNav>li').siblings().children('.hdr-gbDrop').removeClass('openPC');
	}
});

$('.ttlArea a').on('click', function(){
	if(xCheckSmpLayout()){
		$(this).parent().parent().parent().parent().parent('div').removeClass('on');
  return false;
	}
});

$('.btnLevel2>a').on('click', function(){
	if(xCheckSmpLayout()){
		$(this).siblings('ul').addClass('on');
  return false;
	}
});

$('.second a').on('click', function(){
	if(xCheckSmpLayout()){
		$(this).parent().parent('ul').removeClass('on');
  return false;
	}
});

$('.first a').on('click', function(){
	if(xCheckSmpLayout()){
		$(this).parent().parent('ul').removeClass('on');
		$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent('div').removeClass('on');
  return false;
	}
});

/* Set Header toggle
-------------------------------------------------------------*/
var gNavElm=$('#globalNavSet');
var searchElm=$('#searchArea');
var nScTop=0;

/* Set GB */
gNavElm.children('dt').on('click', function(){
	if(gNavElm.children('dd:not(:animated)').length>0 && $(this).css('cursor')=='pointer'){
		if(!gNavElm.hasClass('open')){
			nScTop=$(window).scrollTop();
			$('html').addClass('gNavOpen');
			$('#container').css('margin-top','-'+nScTop+'px');
			gNavElm.attr('class', 'open');;
			$('#pageBody').on('touchmove.noScroll', {passive: false}, function(e){e.preventDefault();});//for iOS
			if(searchElm.hasClass('open')){
				searchElm.removeClass('open');
			}
			$(searchElm.children('dd')).slideUp(400);
		}else{
			xRemoveGNav();
		}
	}
});
function xRemoveGNav(){
	gNavElm.attr('class', 'off');
	$('html').removeClass('gNavOpen');
	$('#container').css('margin-top','');
	$(window).scrollTop(nScTop);
	$('#pageBody').off('.noScroll');//for iOS
	$('.toggle-set.open', gNavElm).removeClass('open').children('.toggle-box').slideUp(0);
}

/* Set SEARCH */
searchElm.children('dt').on('click', function(){
	if(xCheckSmpLayout()){
		if(searchElm.children('dd:not(:animated)').length>0){
			if(!searchElm.hasClass('open')){
				nScTop=$(window).scrollTop();
				$('html').addClass('gNavOpen');
				$('#container').css('margin-top','-'+nScTop+'px');
				searchElm.addClass('open');
				$('#pageBody').on('touchmove.noScroll', {passive: false}, function(e){e.preventDefault();});//for iOS
				if(gNavElm.hasClass('open')){
					gNavElm.attr('class', 'off');
				}
			}else{
				$(searchElm.children('dd')).slideUp(400);
				xRemoveSearch();
			}
		}
	}else{
		$('#globalNav li').siblings().children('div').slideUp(400);
		$('#globalNav li').siblings().children('a').removeClass('act');
		$('#globalNav li').siblings().children('.hdr-gbDrop').removeClass('openPC');
		if(searchElm.children('dd:not(:animated)').length>0){
			if(!searchElm.hasClass('open')){
				$(searchElm).addClass('open');
				$(searchElm.children('dd')).slideDown(400);
			}else{
				$(searchElm.children('dd')).slideUp(400);
				searchElm.removeClass('open');
			}
		}
	}
});
function xRemoveSearch(){
	searchElm.removeClass('open');
	$('html').removeClass('gNavOpen');
	$('#container').css('margin-top','');
	$(window).scrollTop(nScTop);
	$('#pageBody').off('.noScroll');//for iOS
}





/*=============================================================
 topicPath
=============================================================*/
var tpClass='off';
var actClass='off';
var tpTraget='#topicPathMenu';
var tpTragetMenu='off';
var actTragetMenu='off';
var targetHeight='';


if(bTouchDevice){
	$('#topicPathMenu a.catFst,#topicPathMenu a.cat2nd,#topicPathMenu a.cat3rd,#topicPathMenu a.cat4th').on('click', function(){
		tpClass=$(this).attr('class');
		tpTragetMenu='#topicPath div.'+tpClass;
		targetHeight=$(this).parent('li').children('div').children('ul').outerHeight();
		if(actClass=='off'){
			$(tpTraget).attr('class', tpClass);
			$(tpTragetMenu).outerHeight(targetHeight);
			actClass=tpClass;
			actTragetMenu=tpTragetMenu;
//			$('#topicPath').attr('class', actTragetMenu);
		}else{
			if(actClass==tpClass){
				$(tpTraget).attr('class', 'off');
				actClass='off';
				$(actTragetMenu).outerHeight(0);
			}else{
				$(tpTraget).attr('class', tpClass);
				$(tpTragetMenu).outerHeight(targetHeight);
				actClass=tpClass;
				$(actTragetMenu).outerHeight(0);
//				$('#topicPath').attr('class', actTragetMenu);
				actTragetMenu=tpTragetMenu;
			}
		}
		return false;
	});
}else{
	$('#topicPathMenu a.catFst,#topicPathMenu a.cat2nd,#topicPathMenu a.cat3rd,#topicPathMenu a.cat4th').on('mouseenter', function(){
			tpClass=$(this).attr('class');
			tpTragetMenu='#topicPath div.'+tpClass;
			targetHeight=$(this).parent('li').children('div').children('ul').outerHeight();
			actTragetMenu=tpTragetMenu;
			$(tpTragetMenu).outerHeight(targetHeight);
			xOpenTPDrop();
	}).on('mouseleave', function(){
			$(actTragetMenu).outerHeight(0);
			xRemoveTPDrop();
	});
	$('#topicPath div.catFst,#topicPath div.cat2nd,#topicPath div.cat3rd,#topicPath div.cat4th').on('mouseenter', function(){
			tpTragetMenu='#topicPath div.'+tpClass;
			targetHeight=$(this).parent('li').children('div').children('ul').outerHeight();
			actTragetMenu=tpTragetMenu;
			$(tpTragetMenu).outerHeight(targetHeight);
			xOpenTPDrop();
	}).on('mouseleave', function(){
			$(actTragetMenu).outerHeight(0);
			xRemoveTPDrop();
	});
}
function xOpenTPDrop(){
	$(tpTraget).attr('class', tpClass);
}
function xRemoveTPDrop(){
	$(tpTraget).attr('class', 'off');
}


/*=============================================================
 tabs
=============================================================*/
$('.tab-btn a').on('click', function(){
	$(this).addClass('act').parent('li').siblings().children('a').removeClass('act');
	var id_str=$(this).attr('href');
	var p_elm=$(this).closest('.tab-set');
	$(id_str,p_elm).addClass('act').siblings().removeClass('act');
	return false;
});
//window load
$(window).on('load', function(){
	var n=window.location.search.substring(1,window.location.search.length);
	var tub="#tub"+n+" a";
	var panel="#panel"+n;
	$(tub).addClass('act').parent('li').siblings().children('a').removeClass('act');
	$(panel).addClass('act').siblings().removeClass('act');
});
/*=============================================================
 toggle
=============================================================*/
$('.toggle-btn','.toggle-set').on('click', function(e){
	var elm=$(this).closest('.toggle-set');
	if(!elm.hasClass('toggle-sp') || (elm.hasClass('toggle-sp') && xCheckSmpLayout())){
		if(elm.children('.toggle-box:not(:animated)').length==1){
			if(elm.hasClass('open')){
				elm.children('.toggle-box').slideUp(function(){elm.removeClass('open');});
				if(xCheckSmpLayout()){
					var nHdrH=$('#header').css('position')=='fixed'?$('#header').outerHeight():0;
					$('body,html').animate({scrollTop:elm.offset().top-nHdrH-10},'normal');
				}
			}else{
				elm.addClass('open').children('.toggle-box').hide().slideDown();
				if(xCheckSmpLayout()){
					var nHdrH=$('#header').css('position')=='fixed'?$('#header').outerHeight():0;
					$('body,html').animate({scrollTop:elm.offset().top-nHdrH-10},'normal');
				}
			}
		}
	}
	return false;
});
/*=============================================================
 toggle pulldown
=============================================================*/
$('dl.dl-pullDown').on('click', function(e){
	var elm=$(this);
			if(elm.hasClass('open')){
				elm.children('dd').slideUp(function(){elm.removeClass('open');});
				if(xCheckSmpLayout()){
					var nHdrH=$('#header').css('position')=='fixed'?$('#header').outerHeight():0;
					$('body,html').animate({scrollTop:elm.offset().top-nHdrH-10},'normal');
				}
			}else{
				elm.addClass('open').children('dd').hide().slideDown();
				if(xCheckSmpLayout()){
					var nHdrH=$('#header').css('position')=='fixed'?$('#header').outerHeight():0;
					$('body,html').animate({scrollTop:elm.offset().top-nHdrH-10},'normal');
				}
			}
});






/*=============================================================
 window load resize
=============================================================*/
$(window).on('load resize', function(){
	xSetSctableArw();//set scroll table
});
/*=============================================================
 window scroll
=============================================================*/
var pagetopBtn=$('#ftr-pagetop');	
$(window).on('load scroll', function(){
	/* Set header */
	if(!xCheckSmpLayout()){
		$('#header').css('left', -$(window).scrollLeft());
	}
//	xRemoveGbDrop();
	/* Set pagetop */
	if($(this).scrollTop()>200){
		pagetopBtn.addClass('show');
	}else{
		pagetopBtn.removeClass('show');
	}
	if($(document).height()-(window.innerHeight+$(window).scrollTop())<=($('#footerInner').outerHeight()+65)){
		pagetopBtn.addClass('bottom');
	}else{
		pagetopBtn.removeClass('bottom');
	}
});

/*=============================================================
 set scroll table
=============================================================*/
$('.sp-table-scroll').prepend('<div class="arwSc"></div>');
var bTableSc=false;
function xSetSctableArw(){
	if(xCheckSmpLayout()&&!bTableSc){
		$('.sp-table-scroll').addClass('sc');
	}
}
$('.sp-table-scroll').on('mouseover touchstart', function(){
	if(xCheckSmpLayout()){
		bTableSc=true;
		$(this).removeClass('sc');
	}
});

/*=============================================================
 set other library
=============================================================*/
/* Set Responsive Image Maps
-------------------------------------------------------------*/
$('img[usemap]').rwdImageMaps();


/* Set ScrollMagic
-------------------------------------------------------------*/
/* include file */
var targetDirName = 'shared/';
var jsDir = 'js/';
var include=function(){var e=function(){if(document.getElementsByTagName)for(var e=document.getElementsByTagName("script"),t=new RegExp("^(.*/?"+targetDirName.replace(/([\\$^*+?(){}\[\].|])/g,"\\$1")+").*?$"),r=0;r<e.length;r++)if(e[r].src.match(t))return e[r].src.match(t)[1]}(),t=function(t){document.write('<script type="text/javascript" src="'+e+jsDir+t+'"><\/script>')};return t.baseDir=e,t}();

include('ScrollMagic.min.js');

$(function(){
	var controller = new ScrollMagic.Controller();
	var offset=Math.round(screen.availHeight*0.2);
	var offset2=Math.round(screen.availHeight);
	
	$('.setScMc').each(function(i, ele){
		new ScrollMagic.Scene({
			triggerElement:ele,
			offset:offset,
			triggerHook:'onEnter',
			reverse:false	
		})
		.setClassToggle(ele,"enter")
		.addTo(controller);	
	});
});
/* //end ready function */

/*=============================================================
 newsArea
=============================================================*/
$(function(){
  if ($('body#home')[0] || $('body#newsIndex')[0])
  {
    $('.newsArea').hide();
    $('.newsArea dl').each(function(i) {
      var h = $(this).children('dd').children('a').attr('href');
      var _this = $(this);

      $.ajax({
        url: h,
        type: "GET",
        statusCode: {
          404: function() {
            _this.remove();
          }
        }
      });
    }).promise().done( function(){ $('.newsArea').delay(30).queue(function(){ $('.newsArea').show(); }); } );
  }
});


