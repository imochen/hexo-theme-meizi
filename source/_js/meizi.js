document.addEventListener( "DOMContentLoaded", function(){

	var utils = {
		isMob : (function(){
			var ua = navigator.userAgent.toLowerCase();
			var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
			var result = false;
			for( var i = 0 ; i < agents.length; i++ ){
				if( ua.indexOf( agents[i].toLowerCase() ) > -1){
					result = true;
				}
			}
			return result;
		})()
	}


	if( utils.isMob ){
		document.documentElement.className += ' mob';
	}else{
		document.documentElement.className += ' pc';
	}


	var Meizi = {
		$sidebar : document.querySelector('#sidebar'),
		$main : document.querySelector('#main'),
		$sidebar_mask : document.querySelector('#sidebar-mask'),
		$body : document.body,
		$btn_side : document.querySelector('#header .btn-bar'),
		$article : document.querySelectorAll('.mob #page-index article'),

		init : function(){
			this.bindEvent(); //绑定事件
		}
	};

	Meizi.bindEvent = function(){

		var _this = this,
			body_class_name = 'side',
			eventFirst = 'click',
			eventSecond = 'click';

		if( utils.isMob ){
			eventFirst = 'touchstart';
			eventSecond = 'touchend';
		}


		for( var i = 0 ; i < this.$article.length; i++ ){
			this.$article[i].addEventListener( 'click' , function(){
				var url = this.getAttribute('data-url');
				window.location.href = url ;
			},false);
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