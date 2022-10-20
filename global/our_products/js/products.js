/*=============================================================
 img Change
=============================================================*/

$('#photoThum li').on('click', function(){
	var myID=$(this).attr('id');
	var actID='#cur'+myID;
	//alert(actID);
	$(this).addClass('act').siblings('li').removeClass('act');
	$(actID).addClass('act').siblings('li').removeClass('act');
});

/* //end ready function */
