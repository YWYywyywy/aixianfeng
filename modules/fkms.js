define(['text!../views/fkms.html','zepto','$css!../css/fkms.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","none");
	}
	function timeChange(){
		var timeLi = $(".timeLi");
		var timeImg = $(".timeImg");
		var timeText = $(".timeText");
		var count = 0;
		var beginText = $(".beginText");
		var beginTime = $(".beginTime");
		$.ajax({
			type : "get",
			url : "http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
			success : function(data){
				var obj = JSON.parse(data);
				var str = "";
				for(var i=0;i<2;i++){
						(function(j){
							str+='<div class="f_part3_shop"><img src="'+obj.product[i].img+'" /><div class="f_shop_right"><p>'+obj.product[i].name+'</p><p><span>'+obj.product[i].specifics+'</span><span></span></p><p><span>￥</span><span>6.9</span><span>/原价:</span><span>'+obj.product[i].price+'</span></p><p class="myText1">已抢光</p></div></div>'
						})(i);
					}
				$("#f_part3").html(str);
				Zepto(timeLi[0]).tap(function(e){
					$($("#f_part3").children().get(0)).show();
					$($("#f_part3").children().get(1)).show();
					getTime1();
				});
				function getTime2(){
					var date1 = new Date();
					date1.setHours(12);
					date1.setMinutes(00);
					date1.setSeconds(00);
					var date2 = new Date();
					var h=10-date2.getHours();
					var h1 = Math.abs(date1-date2);
					var date3 = new Date(h1);
					if(h>(-2)&&h<0){
						beginText.text("距离本场结束");
						var h1 = Math.abs(date1-date2);
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}else if(h<(-2)){
						beginText.text("本场已经结束");
						$(".hour").text("00");
						$(".minute").text("00");
						$(".second").text("00");
					}else if(h>0){
						beginText.text("距离本场开始");
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}
					
				}
				function getTime3(){
					var date1 = new Date();
					date1.setHours(15);
					date1.setMinutes(00);
					date1.setSeconds(00);
					var date2 = new Date();
					var h=15-date2.getHours();
					var h1 = Math.abs(date1-date2);
					var date3 = new Date(h1);
					if(h>(-2)&&h<0){
						beginText.text("距离本场结束");
						var h1 = Math.abs(date1-date2);
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}else if(h<(-2)){
						beginText.text("本场已经结束");
						$(".hour").text("00");
						$(".minute").text("00");
						$(".second").text("00");
					}else if(h>0){
						beginText.text("距离本场开始");
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}
					
				}
				function getTime4(){
					var date1 = new Date();
					date1.setHours(19);
					date1.setMinutes(00);
					date1.setSeconds(00);
					var date2 = new Date();
					var h=19-date2.getHours();
					var h1 = Math.abs(date1.getTime()-date2.getTime());
					if(h>(-2)&&h<0){
						beginText.text("距离本场结束");
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}else if(h<(-2)){
						beginText.text("本场已经结束");
						$(".hour").text("00");
						$(".minute").text("00");
						$(".second").text("00");
					}else if(h>0){
						beginText.text("距离本场开始");
						$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
						$(".minute").text(parseInt(h1/1000%3600/60));
						$(".second").text(parseInt(h1/1000%60));
					}
					
				}
				$(".myText1").text(timeText[0].innerHTML);
				if(timeText[0].innerHTML=="正在抢购"){
					$(".myText1").css("backgroundColor","#ff602c");
				}else{
					$(".myText1").css("backgroundColor","#aaa");

				}
				Zepto(timeLi[1]).tap(function(e){
					count++;
					$($("#f_part3").children().get(0)).hide();
					$($("#f_part3").children().get(1)).hide();
					$($("#f_part3").children().get(1)).nextAll().remove();
					str = "";
					if(count%2==0){
						for(var i=2;i<4;i++){
							(function(j){
								str+='<div class="f_part3_shop"><img src="'+obj.product[i].img+'" /><div class="f_shop_right"><p>'+obj.product[i].name+'</p><p><span>'+obj.product[i].specifics+'</span><span></span></p><p><span>￥</span><span>6.9</span><span>/原价:</span><span>'+obj.product[i].price+'</span></p><p class="myText2">已抢光</p></div></div>'
							})(i);
						}
					}
					$("#f_part3").html(str);
					$(".myText2").text(timeText[1].innerHTML);
					if(timeText[1].innerHTML=="正在抢购"){
						$(".myText2").css("backgroundColor","#ff602c");
					}else{
						$(".myText2").css("backgroundColor","#aaa");
						
					}
					getTime2();
				});
				Zepto(timeLi[2]).tap(function(e){
					$($("#f_part3").children().get(0)).hide();
					$($("#f_part3").children().get(1)).hide();
					$($("#f_part3").children().get(1)).nextAll().remove();
					str = "";
					for(var i=0;i<2;i++){
						(function(j){
							str+='<div class="f_part3_shop"><img src="'+obj.product[i].img+'" /><div class="f_shop_right"><p>'+obj.product[i].name+'</p><p><span>'+obj.product[i].specifics+'</span><span></span></p><p><span>￥</span><span>6.9</span><span>/原价:</span><span>'+obj.product[i].price+'</span></p><p class="myText3">已抢光</p></div></div>'
						})(i);
					}
					$("#f_part3").html(str);
					$(".myText3").text(timeText[2].innerHTML);
					if(timeText[2].innerHTML=="正在抢购"){
						$(".myText3").css("backgroundColor","#ff602c");
					}else{
						$(".myText3").css("backgroundColor","#aaa");
					}
					getTime3();
				});
				Zepto(timeLi[3]).tap(function(e){
					$($("#f_part3").children().get(0)).hide();
					$($("#f_part3").children().get(1)).hide();
					$($("#f_part3").children().get(1)).nextAll().remove();
					str ="";
					for(var i=2;i<4;i++){
						(function(j){
							str+='<div class="f_part3_shop"><img src="'+obj.product[i].img+'" /><div class="f_shop_right"><p>'+obj.product[i].name+'</p><p><span>'+obj.product[i].specifics+'</span><span></span></p><p><span>￥</span><span>6.9</span><span>/原价:</span><span>'+obj.product[i].price+'</span></p><p class="myText4">已抢光</p></div></div>'
						})(i);
					}
					$("#f_part3").html(str);
					$(".myText4").text(timeText[3].innerHTML);
					if(timeText[3].innerHTML=="正在抢购"){
						$(".myText4").css("backgroundColor","#ff602c");
					}else{
						$(".myText4").css("backgroundColor","#aaa");
					}
					getTime4();
				});	
			}
		});
		function getTime1(){
			var date1 = new Date();
			date1.setHours(10);
			date1.setMinutes(00);
			date1.setSeconds(00);
			var date2 = new Date();
			var h=10-date2.getHours();
			var h1 = Math.abs(date1.getTime()-date2.getTime());
			if(h>(-2)&&h<0){
				beginText.text("距离本场结束");
				$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
				$(".minute").text(parseInt(h1/1000%3600/60));
				$(".second").text(parseInt(h1/1000%60));
			}else if(h<=(-2)){
				beginText.text("本场已经结束");
				$(".hour").text("00");
				$(".minute").text("00");
				$(".second").text("00");
			}else if(h>0){
				beginText.text("距离本场开始");
				$(".hour")[0].innerHTML="0"+parseInt(h1/1000/3600);
				$(".minute").text(parseInt(h1/1000%3600/60));
				$(".second").text(parseInt(h1/1000%60));
			}
			
		}
				getTime1();
		var timer = setInterval(function(){
			var nowTime = new Date();
			var hour = nowTime.getHours();
			switch(hour){
				case 0 :case 1 : case 2 : case 3 : case 4 : case 5 : case 6 : case 7 : case 8 : 
				case 9 : timeText.text("即将开始");break;
				case 10: timeText.text("即将开始"); timeText[0].innerHTML = "正在抢购";break;
				case 11: timeText.text("即将开始");timeText[0].innerHTML = "已经结束";break;
				case 12: timeText.text("即将开始");timeText[1].innerHTML = "正在抢购";timeText[0].innerHTML = "已经结束";break;
				case 13: 
				case 14: timeText.text("即将开始");timeText[1].innerHTML = "已经结束";timeText[0].innerHTML = "已经结束";break;
				case 15: timeText.text("即将开始");timeText[1].innerHTML = "已经结束";timeText[0].innerHTML = "已经结束";timeText[2].innerHTML = "正在抢购";break;
				case 16: 
				case 17: 
				case 18: timeText.text("已经结束");timeText[3].innerHTML = "即将开始";break;
				case 19: timeText.text("已经结束");timeText[3].innerHTML = "正在抢购";break;
				case 20: 
				case 21: 
				case 22: 
				case 23: timeText.text("已经结束");break;
			}
		},1000);
		for(var i=0;i<timeLi.length;i++){
			(function(j){
				Zepto(timeLi[j]).tap(function(e){
					timeLi.css({
						"background-color":"#272c2a",
						"color" : "white"
					});
					timeImg.css("backgroundPosition","right center");
					$(timeImg[j]).css("backgroundPosition","1rem center");
					$(this).css({
						"background-color":"#FFD600",
						"color" : "#272c2a"
					});
				});
			})(i);
		}
		var myTimer = setInterval(function(){
			if(Number($(".second").text())!=0){
				var num = Number($(".second").text())-1;
				$(".second").text(num);
				if(num==0){
					var num1 = Number($(".minute").text())-1;
					$(".second").text(59);
					$(".minute").text(num1);
					if(num1==0){
						$("#hour").text("00");
						$(".minute").text(59);
						$(".second").text(60);
						var num2 = Number($(".second").text())-1;
						$(".second").text(num);
						if(num2==0){
							var num3 = Number($(".minute").text())-1;
							$(".second").text(59);
							$(".minute").text(num3);
							if(num3==0){
								$(".second").text("00");
								$(".minute").text("00");
								clearInterval(myTimer);
							}
						}
					}
				}
			}
		},1000);
	}
	return {
		render : render,
		timeChange : timeChange
	}
});