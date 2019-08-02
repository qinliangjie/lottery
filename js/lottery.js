var lottery = {
	ch: 0
}
var slectList = []; 

function clickBtn() {
	var n1 = Math.floor(Math.random()*10000);
	var n2 = Math.floor(Math.random()*4+4);
	if(n1>0&&n1<=5){
		lottery.ch = 45 + 360*n2 + 22.5;
		slectList.push('a')
	}else if(n1>5&&n1<=25){
		lottery.ch = 90+ 360*n2 + 22.5;
		slectList.push('b')
	}else if(n1>25&&n1<=65){
		lottery.ch = 135 + 360*n2 + 22.5;
		slectList.push('c')
	}else if(n1>65&&n1<=140){
		lottery.ch = 180 + 360*n2 + 22.5;
		slectList.push('d')
	}else if(n1>140&&n1<=290){
		lottery.ch = 225 + 360*n2 + 22.5;
		slectList.push('e')
	}else if(n1>290&&n1<=910){
		lottery.ch = 270 + 360*n2 + 22.5;
		slectList.push('f')
	}else if(n1>910&&n1<=2580){
		lottery.ch = 315+ 360*n2 +22.5 ;
		slectList.push('h')
	}else if(n1>2580&&n1<=10000){
		lottery.ch = 360+ 360*n2 + 22.5;
	}
	$(this).unbind().css("cursor", "wait");
	$('.lottery').css({
		"transition": "all 5s ease",
		"transform": "rotate("+lottery.ch+"deg)",
		"-webkit-transform": "rotate("+lottery.ch+"deg)"
	});
}
$('.btn').bind('click', clickBtn);
 
$('.lottery')[0].addEventListener('transitionend',function(){
	$('.btn').bind('click',clickBtn).css("cursor","pointer");
	setTimeout(result,2000);

})
 
function result(){
	alert("点击确认，再次开始游戏！");
	$('.lottery').css({
		"transition":"none",
		"transform":"none",
		"-webkit-transform":"none"
	});
} 