define(['text!../views/dzx.html','$css!../css/dzx.css',"zepto"], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","none");
	}
	function tabChange(){
		var myNav = $(".d_Mynav");
		for(var i=0;i<3;i++){
			(function(j){
				Zepto(myNav[j]).tap(function(e){
					myNav.css("backgroundPositionY","0rem");
					this.style.backgroundPositionY = "-0.8rem";
					$(".myTab").css("display","none");
					$(".myTab")[j].style.display = "block";
				});
			})(i);
		}
	}
	return {
		render : render,
		tabChange : tabChange
	}
});

