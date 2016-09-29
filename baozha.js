(function(){
	var ipt =document.getElementById('ipt'); 
	
	 
	
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
	var syc = document.getElementById('shengyincao');
	var sy = document.getElementById('shengyin');
	var st = document.getElementById('shengtou');
	/*伴随时间变换函数在这*/
	baba.addEventListener('timeupdate',time);
	function time(){
		document.getElementById('xianzai').innerHTML = zhuanhuan(baba.currentTime);
		document.getElementById("zongshi").innerHTML = zhuanhuan(baba.duration);
		var bili = baba.currentTime/baba.duration;
		var bili1 = bili*750;
		jindutiao.style.width = bili1+"px";	
		sy.style.width = baba.volume*750+"px";
		if (baba.muted==true) {
			sy.style.width = 0+"px";
		}
	}
	/*声音条点击*/
	syc.addEventListener('click',syjd);
	function syjd(event){
		var x = event.clientX;
		baba.volume = (x-318)/750;
	}
	/*滚动条点击*/
	var diceng = document.getElementById('diceng');
	var lty =document.getElementById('lingtouyang');
	diceng.addEventListener('click',dingwei);
		function dingwei(event){
		var x = event.clientX;
		baba.currentTime = baba.duration*(x-318)/750;
	}
	/*声音条拖动*/
	syc.onmousedown = anxia;
	function anxia(){
		syc.onmousemove = tuodong;
		function tuodong(event){
			var x = event.clientX;
			baba.volume = (x-308)/750;
			sy.style.width = baba.volume*750+"px";
			syc.onmouseup = taiqi;
			function taiqi(event){
				var x = event.clientX;
				syc.onmousemove = null;
			}
		}
	}
	/*滚动条拖动*/
	diceng.onmousedown = anxia1;
	function anxia1(){
		diceng.onmousemove = tuodong1;
		function tuodong1(event){
			var x = event.clientX;
			baba.currentTime = baba.duration*(x-308)/750;
			var bili = baba.currentTime/baba.duration;
			var bili1 = bili*750;
			jindutiao.style.width = bili1+"px";
			diceng.onmouseup = taiqi1;
			function taiqi1(event){
				var x = event.clientX;
				diceng.onmousemove = null;
			}
		}
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
	/*静音在这*/
	var xiabtn2 = document.getElementById("xiabtn2");
	xiabtn2.onclick=jingyin;
	function jingyin(){
	if (baba.muted==false) {
		baba.muted=true;
	}else{
		baba.muted=false;
	}
	
	











}

}(window))
	/*全屏*/
	function quanping() {
	if(baba.requestFullscreen) {
		baba.requestFullscreen();
	} else if(baba.webkitRequestFullscreen) {
		baba.webkitRequestFullscreen();
	} else if(baba.mozRequestFullscreen) {
		baba.mozRequestFullscreen();
	} else if(baba.msRequestFullscreen) {
		baba.mskitRequestFullscreen();
	}
}
	function shipin() {
		baba.src = "lyb.mp4";
		baba.poster = "lyb.jpg";
	}
	function shipin1() {
		baba.src = "http://media.w3.org/2010/05/sintel/trailer.mp4";
		baba.poster = "Sintel.jpg";
	}
	function shipin2() {
		baba.src = "lyb.mp4";
		baba.poster = "dxt.jpg";
	}
	function shipin3() {
		baba.src = "lyb.mp4";
		baba.poster = "dxzm.jpg";
	}

	function xuan() {
	    var file = ipt.files[0];
	    console.log(file);
	    var url = URL.createObjectURL(file); 
	    console.log(url);
	    baba.src = url;
	  }

	
