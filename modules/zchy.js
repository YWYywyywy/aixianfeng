define(['text!../views/zchy.html','zepto','$css!../css/zchy.css'], function (html) {
	//渲染页面的方法
	function render (){
		$("#container").html(html);
		$("#footer").css("display","none");
		showTab();
	}
	function showTab(){
		var myImg = Zepto(".myImg");
		console.log(myImg);
		var myLi = Zepto(".myLi");
		var myA = Zepto(".myA");
		var myP = Zepto(".myP");
		var flag1 = true;
		var flag2 = true;
		var flag3 = true;
		var flag4 = true;
		var count = 0;
		Zepto(myLi[0]).tap(function(e){
			count++;
			if(count%4!=0){
				myA.css("height","2.761875rem");
				myP.css("height","1.3419rem");
				myImg.css("transform","rotate(0deg)");
				myImg[0].style.transform="rotate(180deg)";
				$("#p1").css({
					"height":"2.2rem"
					});
				$(myA[0]).css("height","3.5809rem");
			}else{
				myImg[0].style.transform="rotate(0deg)";
				$("#p1").css("height","1.3419rem");
				$(myA[0]).css("height","2.761875rem");
			}
		},false);
		count = 0;
		Zepto(myLi[1]).tap(function(e){
			count++;
			if(count%4!=0){
				myA.css("height","2.761875rem");
				myP.css("height","1.3419rem");
				myImg.css("transform","rotate(0deg)");
				myImg[1].style.transform="rotate(180deg)";
				$("#p2").css({
					"height":"3.9375rem"
					});
				$(myA[1]).css("height","5.3809rem");
			}else{
				myImg[1].style.transform="rotate(0deg)";
				$("#p2").css("height","1.3419rem");
				$(myA[1]).css("height","2.761875rem");
			}
			
		});
		count = 0;
		Zepto(myLi[2]).tap(function(e){
			count++;
			if(count%4!=0){
				myA.css("height","2.761875rem");
				myP.css("height","1.3419rem");
				myImg.css("transform","rotate(0deg)");
				myImg[2].style.transform="rotate(180deg)";
				$("#p3").css({"height":"3.58125rem"});
				$(myA[2]).css("height","4.846rem");
			}else{
				myImg[2].style.transform="rotate(0deg)";
				$("#p3").css("height","1.3419rem");
				$(myA[2]).css("height","2.761875rem");
			}
			
		});
		count = 0;
		Zepto(myLi[3]).tap(function(e){
			count++;
			if(count%4!=0){
				myA.css("height","2.761875rem");
				myP.css("height","1.3419rem");
				myImg.css("transform","rotate(0deg)");
				myImg[3].style.transform="rotate(180deg)";
				$("#p4").css({
					"height":"7.61875rem"
					});
				$(myA[3]).css("height","8.6261rem");
			}else{
				myImg[3].style.transform="rotate(0deg)";
				$("#p4").css("height","1.3419rem");
				$(myA[3]).css("height","2.761875rem");
			}
			
		});
	}
	return {
		render : render
	}
});