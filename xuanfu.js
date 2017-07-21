window.onload=function(){
		var btn = document.getElementById("closebutton"); 
       
		btn.onclick = function(){
			document.getElementById("xuanfudiv").style.display ="none";
			
		}
		var xuanfudiv = document.getElementById("xuanfudiv"); 
		 
		 //定时器
         var a1a = setInterval(moves,20);
                //函数
                var x = 2;
                var y = 2;
                function moves(){
                    var tops = xuanfudiv.offsetTop
                    var lefts = xuanfudiv.offsetLeft
                    if (lefts>=document.documentElement.clientWidth-xuanfudiv.offsetWidth||lefts<=0)
                    {
                        x=-x
                    }
                    if (tops>=document.documentElement.clientHeight-xuanfudiv.offsetHeight||tops<=0)
                    {
                        y=-y
                    }

                    tops+=y;
                    lefts+=x;
                    xuanfudiv.style.top=tops+"px"
                    xuanfudiv.style.left=lefts+"px"
                }
                //悬停停止
                xuanfudiv.onmouseover=function(){
                    clearInterval(a1a);
                }
                //放手继续运动
                xuanfudiv.onmouseout=function(){
                    a1a =setInterval(moves,20);
                }
				
}

 