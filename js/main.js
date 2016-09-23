;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'), //选择侧栏
		mask = $('.mask'),
		backButton = $('.back-to-top'),
		sidebar_trigger = $('#sidebar_trigger');

	function showSideBar()
	{
		mask.fadeIn();
		sidebar.animate({'right':0});
	}

	function hideSideBar()
	{
		mask.fadeOut();
		sidebar.animate({'right':-sidebar.width()});
	}

	sidebar_trigger.on('click', showSideBar);

	mask.on('click',hideSideBar);

	backButton.on('click',function(){
		$('html,body').animate({scrollTop:0},800);
	})

	$(window).on('scroll',function(){
		if ($(window).scrollTop() > $(window).height() )
			backButton.fadeIn();
		else
			backButton.fadeOut();
	})


	$('.weixin-img').hide();
	var timer = null;
    $('#icon-weixin').hover(function(){
    	timer=setTimeout(function(){$('.weixin-img').fadeIn('slow')},200);
    	//鼠标放上去执行某动作,设置延时触发
		},function(){
			if(timer)
                clearTimeout(timer);
			$('.weixin-img').fadeOut('slow');//鼠标移开的时候执行某个动作
	})	

})



