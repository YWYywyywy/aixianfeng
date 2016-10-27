define(['text!../views/mine.html','$css!../css/mine.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","block");
	}
	return {
		render : render
	}
});