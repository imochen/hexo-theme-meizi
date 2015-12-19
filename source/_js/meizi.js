$(function(){

	var Meizi = {
		$sidebar : $('#sidebar'),
		$main : $('#main'),
		$body : $('body'),
		$btn_side : $('#header i'),
		$window : $(window),

		init : function(){
			this.loadIscroll(); //初始化滚动条
			this.bindEvent(); //绑定事件
		}
	};

	Meizi.isPC = (function(){
		var ua = navigator.userAgent.toLowerCase();
		var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var result = true;
		for( var i = 0 ; i < agents.length; i++ ){
			if( ua.indexOf( agents[i].toLowerCase() ) > -1){
				result = false;
			}
		}
		return result;
	})();

	Meizi.loadIscroll = function(){
		if( this.isPC ){
			this.$body.addClass('pc');
		}else{
			this.initScroll()
		}
	}

	Meizi.initScroll = function(){
		var options = {
			click : true,
			mouseWheel : true,
			scrollbars : true,
			fadeScrollbars : true,
			preventDefault : false,
			shrinkScrollbars : 'clip'
		}

		//侧栏滚动条初始化
		var sideScroll = new IScroll( '#sidebar' , options );
		sideScroll.on('scrollEnd', function(){
			sideScroll.refresh();
		});

		//主界面滚动条初始化
		var mainScroll = new IScroll( '#main' , options );
		mainScroll.on('scrollEnd', function(){
			mainScroll.refresh();
		});


		window.onload = function(){

		}


		var highlightOpt = {
			scrollX : true ,
			scrollbars : true,
			fadeScrollbars : true,
			preventDefault : false,
			shrinkScrollbars : 'clip'
		}
		//代码高亮区域滚动条初始化
		$('.highlight').each(function(){
			new IScroll(  this , highlightOpt );
		})
		
	}

	Meizi.bindEvent = function(){

		var _this = this,
			body_class_name = 'side',
			main_event_name = 'click.once touchmove.once';

		this.$btn_side.on('click',function(){

			if( _this.$body.hasClass( body_class_name ) ){
				_this.$body.removeClass( body_class_name);
				_this.$main.off( main_event_name );
			}else{
				_this.$body.addClass( body_class_name );
				_this.$main.on( main_event_name , function(){
					_this.$btn_side.trigger('click');
				})
			}

		});

		this.$window.on('resize',function(){
			_this.$body.removeClass( body_class_name );
			_this.$main.off( main_event_name );
		})
	}

	Meizi.init();

});