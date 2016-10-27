define(['text!../views/about.html','$css!../css/about.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","none");
	}
	return {
		render : render
	}
});