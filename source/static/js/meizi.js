document.addEventListener("DOMContentLoaded",function(){var e={$sidebar:document.querySelector("#sidebar"),$main:document.querySelector("#main"),$sidebar_mask:document.querySelector("#sidebar-mask"),$body:document.body,$btn_side:document.querySelector("#header .btn-bar"),init:function(){this.bindEvent()}};e.isPC=function(){for(var e=navigator.userAgent.toLowerCase(),n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0,a=0;a<n.length;a++)e.indexOf(n[a].toLowerCase())>-1&&(s=!1);return s}(),e.bindEvent=function(){var e=this,n="side",s="click";eventSceond="click",this.isPC||(s="touchstart",eventSceond="touchend"),this.$btn_side.addEventListener(eventSceond,function(){e.$body.className.indexOf(n)>-1?(e.$body.className=e.$body.className.replace(n,""),e.$sidebar_mask.style.display="none"):(e.$body.className+=" "+n,e.$sidebar_mask.style.display="block")},!1),this.$sidebar_mask.addEventListener(s,function(s){e.$body.className=e.$body.className.replace(n,""),e.$sidebar_mask.style.display="none",s.preventDefault()},!1),window.addEventListener("resize",function(){e.$body.className=e.$body.className.replace(n,""),e.$sidebar_mask.style.display="none"},!1)},e.init()},!1);