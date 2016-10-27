define(['text!../views/ssmaker.html',"zepto",'$css!../css/ssmaker.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","block");
		myTab();
	}
	function myTab(){
		var shopLists = $(".shoplists");
		var s_menu = $(".s_menu");
		for(var i=0;i<s_menu.length;i++){
			(function(j){
				Zepto(s_menu[j]).tap(function(e){
					console.log(1);
					s_menu.children("span").hide();
					$(this).children("span").show();
					$(this).first().show();
					shopLists.hide();
					$(shopLists[j]).show();
				});
			})(i);
		}
		var category = $(".category");
		var count = 0;
		Zepto(category[0]).tap(function(e){
			count++;
			if(count%4!=0){
				category.children("img").attr("transform","rotate(0deg)");
				Zepto(this).children("img")[0].style.transform="rotate(180deg)";
				Zepto("#category_list").show();
				Zepto("#sort_list").hide();
			}else{
				category.children("img").attr("transform","rotate(180deg)");
				Zepto(this).children("img")[0].style.transform="rotate(0deg)";
				Zepto("#category_list").hide();
				Zepto("#sort_list").hide();
			}
		},false);
		count = 0;
		Zepto(category[1]).tap(function(e){
			count++;
			if(count%4!=0){
				category.children("img").attr("transform","rotate(0deg)");
				Zepto(this).children("img")[0].style.transform="rotate(180deg)";
				Zepto("#category_list").hide();
				Zepto("#sort_list").show();
			}else{
				category.children("img").attr("transform","rotate(180deg)");
				Zepto(this).children("img")[0].style.transform="rotate(0deg)";
				Zepto("#category_list").hide();
				Zepto("#sort_list").hide();
			}
		},false);
	}
	function tabs(){
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php"+"?category=热销榜",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<obj.data.length;i++){
					(function(j){
						str+='<li class="shop_list"><img src="'+obj.data[j].img+'" /><div class="shop_list_right"><p>'+obj.data[j].name+'</p><p><span>精选</span><span>'+obj.data[j].pm_desc+'</span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></div></li>';
					})(i);
				}
				$("#s_list1").html(str);
			}
		});
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php"+"?category=天天特价",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<obj.data.length;i++){
					(function(j){
						str+='<li class="shop_list"><img src="'+obj.data[j].img+'" /><div class="shop_list_right"><p>'+obj.data[j].name+'</p><p><span>精选</span><span>'+obj.data[j].pm_desc+'</span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></div></li>';
					})(i);
				}
				$("#s_list2").html(str);
			}
		});
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php"+"?category=优选水果",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<obj.data.length;i++){
					(function(j){
						str+='<li class="shop_list"><img src="'+obj.data[j].img+'" /><div class="shop_list_right"><p>'+obj.data[j].name+'</p><p><span>精选</span><span>'+obj.data[j].pm_desc+'</span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></div></li>';
					})(i);
				}
				$("#s_list3").html(str);
			}
		});
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php"+"?category=牛奶面包",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<obj.data.length;i++){
					(function(j){
						str+='<li class="shop_list"><img src="'+obj.data[j].img+'" /><div class="shop_list_right"><p>'+obj.data[j].name+'</p><p><span>精选</span><span>'+obj.data[j].pm_desc+'</span></p><p>'+obj.data[j].specifics+'</p><p>￥'+obj.data[j].price+'<span>￥'+obj.data[j].market_price+'</span></p><p></p></div></li>';
					})(i);
				}
				$("#s_list4").html(str);
			}
		});
	}
	return {
		render : render,
		myTab : myTab,
		tabs : tabs
	}
});