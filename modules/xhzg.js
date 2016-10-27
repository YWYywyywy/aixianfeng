define(['text!../views/xhzg.html','$css!../css/xhzg.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","none");
	}
	return {
		render : render
	}
});