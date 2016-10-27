var i_myLi = Zepto(".i_myLi");
var i_img = Zepto(".i_img");
var count = 0;
$(i_myLi[0]).click(function(e){
	window.sessionStorage.index=0;
	i_img[0].src="img/footer1.jpg";
	i_img[1].src="img/footer2.jpg";
	i_img[2].src="img/footer3.jpg";
	i_img[3].src="img/fooetr4.jpg";
	if(i_img[0].style.animationPlayState = "paused"){
		i_img.css("animation-play-state","paused");
		i_img[0].style.animationPlayState = "running";
	}
	
	
});
Zepto(i_myLi[1]).tap(function(e){
	window.sessionStorage.index=1;
	i_img[0].src="img/1.jpg";
	i_img[1].src="img/2.jpg";
	i_img[2].src="img/footer3.jpg";
	i_img[3].src="img/fooetr4.jpg";
	if(i_img[0].style.animationPlayState = "paused"){
		i_img.css("animation-play-state","paused");
		i_img[0].style.animationPlayState = "running";
	}
});
Zepto(i_myLi[2]).tap(function(e){
	window.sessionStorage.index=2;
	i_img[0].src="img/1.jpg";
	i_img[1].src="img/footer2.jpg";
	i_img[2].src="img/3.jpg";
	i_img[3].src="img/fooetr4.jpg";
	if(i_img[0].style.animationPlayState = "paused"){
		i_img.css("animation-play-state","paused");
		i_img[0].style.animationPlayState = "running";
	}
});
Zepto(i_myLi[3]).tap(function(e){
	window.sessionStorage.index=3;
	i_img[0].src="img/1.jpg";
	i_img[1].src="img/footer2.jpg";
	i_img[2].src="img/footer3.jpg";
	i_img[3].src="img/4.jpg";
	if(i_img[0].style.animationPlayState = "paused"){
		i_img.css("animation-play-state","paused");
		i_img[0].style.animationPlayState = "running";
	}
});
/*function myChange(index){
	for(var i=0;i<4;i++){
		if(i!=index){
			i_img[0].src="img/1.jpg";
			i_img[1].src="img/footer2.jpg";
			i_img[2].src="img/footer3.jpg";
			i_img[3].src="img/fooetr4.jpg";		
		}else{
			if(i==1){
				i_img[i].src="img/footer1.jpg";
			}else{
				i_img[i].src="img/"+i+".jpg";
			}	
		}
	}
}
window.onload=function(){
	var index =window.sessionStorage.getItem("index");
	myChange(index);
}*/


