(function(){
	function zhuanhuan(x) {
	if (x>3600) {
		var h = Math.floor(x/3600);
		var ms = x%3600;
		var m =Math.floor(ms/60);
		var s = Math.floor(m%60);
		return(h+":"+m+":"+s);
	}else if(x>60){
		var m1 = Math.floor(x/60);
		var s1 = Math.floor(x%60);
		return(0+":"+m1+":"+s1);
	}else{
		var s2 = Math.floor(x%60);
		return(0+":"+0+":"+s2);
	}		
}
	document.getElementById('shang').classList.add('sxdiv');
	document.getElementById('xia').classList.add('sxdiv');
	var baba = document.getElementById('baba');
	var xiabtn1 =document.getElementById('xiabtn1');
	var xiabtn11 =document.getElementById('xiabtn11');
	/*暂停、开始*/
	xiabtn1.onclick = zanting;
	var guanggao = document.getElementById('guanggao');
	function zanting(){
		baba.pause();
		xiabtn1.style.visibility = "hidden";
		xiabtn11.style.visibility = "visible";
		guanggao.style.display = "block";
	}
	xiabtn11.onclick = jixu;
	function jixu(){
		baba.play();
		xiabtn1.style.visibility = "visible";
		xiabtn11.style.visibility = "hidden";
		guanggao.style.display = "none";
	}
	guanggao.addEventListener('click',jixu);
	var jindutiao = document.getElementById('jindutiao');
	/*伴随时间变换函数在这*/
	baba.addEventListener('timeupdate',time);
	function time(){
		document.getElementById('xianzai').innerHTML = zhuanhuan(baba.currentTime);
		document.getElementById("zongshi").innerHTML = zhuanhuan(baba.duration);
		var bili = baba.currentTime/baba.duration;
		var bili1 = bili*700;
		jindutiao.style.width = bili1+"px";	
	}
	/*滚动条*/
	var diceng = document.getElementById('diceng');
	diceng.addEventListener('click',dingwei);
		function dingwei(event){
		var x = event.clientX;
		baba.currentTime = baba.duration*(x-578)/700;
	}
	jindutiao.addEventListener('mousedown',ladong);
	function ladong(event){
		var x = event.clientX;
		jindutiao.style.width = x-578+"px"; 
	}



	/*速率变化*/
	document.getElementById('xia3').onclick=man;
	document.getElementById('xia4').onclick=kuai;
	
	function man(){
		baba.playbackRate-=0.2;
	}
	function kuai(){
		baba.playbackRate+=0.2;
	}
	/*前进后退*/
	document.getElementById('xia5').onclick=tui;
	document.getElementById('xia6').onclick=jin;
	function jin(){
		baba.currentTime+=5;
	}
	function tui(){
		baba.currentTime-=5;
	}
	/*声音在这*/
	var xiabtn2 = document.getElementById("xiabtn2");
	xiabtn2.onclick=jingyin;
	function jingyin(){
	if (baba.muted==false) {
		baba.muted=true;
	}else{
		baba.muted=false;
	}
	/*声音条*/



}





}(window))