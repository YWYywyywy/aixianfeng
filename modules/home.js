define(['text!../views/home.html','$css!../css/home.css','swiper','lazyload'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","block");
	}
	function getLunBo(){
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<obj.data.slide.length;i++){
					(function(j){
						str+='<img src="'+obj.data.slide[j].activity.img+'" class="swiper-slide"/>';
					})(i);
				}
				$(".swiper-wrapper").html(str);
				lunBo();
				str="";
				for(var i=0;i<obj.data.menu.length;i++){
					(function(j){
						str+='<li><a href="#"><figure><img src="'+obj.data.menu[j].activity.img+'"/><figcaption>'+obj.data.menu[j].activity.name+'</figcaption></figure></a></li>'
					})(i);
				}
				$("#h_ul").html(str);
				$("#h_ul li a")[1].setAttribute("href","#fkms");
				$("#h_ul li a")[2].setAttribute("href","#xhzg");
				$("#h_ul li a")[3].setAttribute("href","#dzx");
			}
		});
	}
	function lunBo(){
		console.log($(".swiper-container"));
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
		});
	}
	function getHotSell(){
		$("#load").show();
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				console.log(obj);
				for(var i=0;i<obj.data.length;i++){
					(function(j){
						if(obj.data[j].pm_desc!=""){
							str+='<li><a href="#"><img data-original="'+obj.data[j].img+'" ><p>'+obj.data[j].name+'</p><p><span>精选</span><span class="h_sell">'+obj.data[j].pm_desc+'</span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></img></a></li>';
						}else{
							str+='<li><a href="#"><img data-original="'+obj.data[j].img+'" ><p>'+obj.data[j].name+'</p><p><span>精选</span><span></span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></img></a></li>';
						}
						
					})(i);
				}
				$("#h_hot").html(str);
				$("img").lazyload({
					effect : "fadeIn"
				});
				$("#load").hide();
			}
		});
	}
	return {
		render : render,
		getLunBo : getLunBo,
		getHotSell : getHotSell
	}
})