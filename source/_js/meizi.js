document.addEventListener( "DOMContentLoaded", function(){


	var Meizi = {
		$sidebar : document.querySelector('#sidebar'),
		$main : document.querySelector('#main'),
		$body : document.body,
		$btn_side : document.querySelector('#header i'),

		init : function(){
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

	Meizi.bindEvent = function(){


		var _this = this,
			body_class_name = 'side',
			eventName = 'click';

		if( !this.isPC ){
			eventName = 'touchend'
		}

		this.$btn_side.addEventListener( eventName ,function(){

			if( _this.$body.className.indexOf( body_class_name ) > -1 ){
				_this.$body.className = _this.$body.className.replace( body_class_name , '');
				_this.$main.removeEventListener( eventName );
			}else{
				_this.$body.className += (' ' + body_class_name);
				_this.$main.addEventListener( eventName , function( e ){
					_this.$body.className = _this.$body.className.replace( body_class_name , '');
					_this.$main.removeEventListener( eventName );
				},false);
			}

		},false)

		window.addEventListener('resize',function(){
			_this.$body.className = _this.$body.className.replace( body_class_name , '');
			_this.$main.removeEventListener( eventName );
		},false)
	}

	Meizi.init();

}, false );