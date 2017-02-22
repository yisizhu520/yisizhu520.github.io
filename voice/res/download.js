	function downloadApp(){ 
		
		
	 if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {

		 testApp("readpoemforyou://");

	 } else if (navigator.userAgent.match(/android/i)) {

		 testApp("m://thepoemforyou.com/weinidushi");

	 }
	 
 }
	
	
	function downloadApp_static_ios(){ 
		
		 if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
			 
			    var ifr = document.createElement("iframe");
		        ifr.src = "m://thepoemforyou.com/weinidushi"; /***打开app的协议，有ios同事提供***/
		        ifr.style.display = "none"; 
		        document.body.appendChild(ifr);
		        window.setTimeout(function(){
		          document.body.removeChild(ifr);
		           window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.thepoemforyou.app"; /***下载app的地址***/
		        },1000)


		 }
		 
	 }
	
	function downloadApp_static_android(){ 
		
		
		 if (navigator.userAgent.match(/android/i)) {
			  var ifr = document.createElement("iframe");
		        ifr.src = "m://thepoemforyou.com/weinidushi"; /***打开app的协议，有ios同事提供***/
		        ifr.style.display = "none"; 
		        document.body.appendChild(ifr);
		        
		        window.setTimeout(function(){
			          document.body.removeChild(ifr);
			           window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.thepoemforyou.app"; /***下载app的地址***/
			        },1000)

		 }
		 
	 }
	
	function is_weixin(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger"|| ua.match(/qq/i)=="qq") {
			return true;
	 	} else {
			return false;
		}
	}
	
	
	
	
	
	
	
	function testApp(url) { 
			if(is_weixin()){
				 //window.location.href = "http://fusion.qq.com/cgi-bin/qzapps/unified_jump?appid=42263438&from=wx&isTimeline=false&actionFlag=0&params=pname%3Dcom.thepoemforyou.app%26versioncode%3D1000%26channelid%3D%26actionflag%3D0"; /***下载app的地址***/
				 window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.thepoemforyou.app"; /***下载app的地址***/ 
				return;
			}
		  var timeout, t = 1000, hasApp = true; 
		  setTimeout(function () { 
		    if (hasApp) { 
		    	window.location.href=url;
		    } else { 
		    	 window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.thepoemforyou.app"; /***下载app的地址***/
		    } 
		    document.body.removeChild(ifr); 
		  }, 1000) 
		  
		  var t1 = Date.now(); 
		  var ifr = document.createElement("iframe"); 
		  ifr.setAttribute('src', url); 
		  ifr.setAttribute('style', 'display:none'); 
		  document.body.appendChild(ifr); 
		  timeout = setTimeout(function () { 
		     var t2 = Date.now(); 
		     if (!t1 || t2 - t1 < t + 100) { 
		       hasApp = false; 
		     } 
		  }, t); 
		} 

	
