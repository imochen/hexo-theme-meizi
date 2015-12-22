document.addEventListener( "DOMContentLoaded", function(){


	var Meizi = {
		$sidebar : document.querySelector('#sidebar'),
		$main : document.querySelector('#main'),
		$sidebar_mask : document.querySelector('#sidebar-mask'),
		$body : document.body,
		$btn_side : document.querySelector('#header .btn-bar'),

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
			eventFirst = 'click',
			eventSecond = 'click';

		if( !this.isPC ){
			eventFirst = 'touchstart';
			eventSecond = 'touchend';
		}


		this.$btn_side.addEventListener( eventSecond ,function(){

			if( _this.$body.className.indexOf( body_class_name ) > -1 ){
				_this.$body.className = _this.$body.className.replace( body_class_name , '');
				_this.$sidebar_mask.style.display = 'none';
			}else{
				_this.$body.className += (' ' + body_class_name);
				_this.$sidebar_mask.style.display = 'block';
			}

		},false);

		this.$sidebar_mask.addEventListener( eventFirst , function( e ){
			_this.$body.className = _this.$body.className.replace( body_class_name , '');
			_this.$sidebar_mask.style.display = 'none';
			e.preventDefault();
		},false);

		window.addEventListener('resize',function(){
			_this.$body.className = _this.$body.className.replace( body_class_name , '');
			_this.$sidebar_mask.style.display = 'none';
		},false);
	}

	Meizi.init();

}, false );