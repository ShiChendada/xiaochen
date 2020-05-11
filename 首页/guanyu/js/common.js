window.onload = function(){
    var jinyin = document.getElementsByClassName("jinyin")[0];
    var ad = document.getElementsByClassName("ad")[0];
    var sk = true;
    jinyin.onclick = function(){
        if(sk){
            ad.play();
            sk = false;
        }else{
            ad.pause();
            sk = true;
        }
    };

	// <第一块>
	var t1 =document.getElementsByClassName("t1")[0];
	var t11 =document.getElementsByClassName("t11")[0];
	var yy1 =document.getElementsByClassName("yy1")[0];
	
	t1.onclick = function(){
	t11.style.display = "block"
	t11.style.left = "15px"
	t11.style.top = "0px"
	t1.style.opacity = "0"
	yy1.play();
	}
	
	t11.onclick = function(){
	t11.style.display = "none"
	t1.style.opacity = "1"
	yy1.pause();
	}
	
	
	// <第二块>
	var t2 =document.getElementsByClassName("t2")[0];
	var t22 =document.getElementsByClassName("t22")[0];
	var yy2 =document.getElementsByClassName("yy2")[0];
	
	t2.onclick = function(){
	t22.style.display = "block"
	t22.style.left = "15px"
	t22.style.top = "61px"
	t2.style.opacity = "0"
	yy2.play();
	}
	
	t22.onclick = function(){
	t22.style.display = "none"
	t2.style.opacity = "1"
	yy2.pause();
	}
	
	
	// <第三块>
	var t3 =document.getElementsByClassName("t3")[0];
	var t33 =document.getElementsByClassName("t33")[0];
	var yy3 =document.getElementsByClassName("yy3")[0];
	
	t3.onclick = function(){
	t33.style.display = "block"
	t33.style.left = "15px"
	t33.style.top = "122px"
	t3.style.opacity = "0"
	}
	
	t33.onclick = function(){
	t33.style.display = "none"
	t3.style.opacity = "1"
	}
	
	
	
	// <第四块>
	var t4 =document.getElementsByClassName("t4")[0];
	var t44 =document.getElementsByClassName("t44")[0];
	var yy4 =document.getElementsByClassName("yy4")[0];
	
	t4.onclick = function(){
	t44.style.display = "block"
	t44.style.left = "15px"
	t44.style.top = "182px"
	t4.style.opacity = "0"
	}
	
	t44.onclick = function(){
	t44.style.display = "none"
	t4.style.opacity = "1"
	}
	console.log(t3,t33)
	
	// <1>
	var xiao11 = document.getElementsByClassName("xiao11")[0];
	var xiao111 = document.getElementsByClassName("xiao111")[0];
	
	
	xiao11.onmouseover = function(){
	this.style.display = "none"
	xiao111.style.display = "block"
	}
	
	xiao111.onmouseout = function(){
	this.style.display = "none"
	xiao11.style.display = "block"
	}
	
	//<2>
	var xiao22 = document.getElementsByClassName("xiao22")[0];
	var xiao222 = document.getElementsByClassName("xiao222")[0];
	
	
	xiao22.onmouseover = function(){
	this.style.display = "none"
	xiao222.style.display = "block"
	}
	
	xiao222.onmouseout = function(){
	this.style.display = "none"
	xiao22.style.display = "block"
	}
	
	// <第二快>
	var cao = document.getElementsByClassName("cao")[0];
	var cao1 = document.getElementsByClassName("cao1")[0];
	
	
	cao.onmouseover = function(){
	this.style.display = "none"
	cao1.style.display = "block"
	}
	
	cao1.onmouseout = function(){
	this.style.display = "none"
	cao.style.display = "block"
	}
	
	//<2>
	var cao2 = document.getElementsByClassName("cao3")[0];
	var cao3 = document.getElementsByClassName("cao4")[0];
	
	
	cao2.onmouseover = function(){
	this.style.display = "none"
	cao3.style.display = "block"
	}
	
	cao3.onmouseout = function(){
	this.style.display = "none"
	cao2.style.display = "block"
	}


	// <第三块>
	var nma = document.getElementsByClassName("nma")[0];
	var nma1 = document.getElementsByClassName("nma1")[0];
	
	
	nma.onmouseover = function(){
	this.style.display = "none"
	nma1.style.display = "block"
	}
	
	nma1.onmouseout = function(){
	this.style.display = "none"
	nma.style.display = "block"
	}
	
	var nma2 = document.getElementsByClassName("nma2")[0];
	var nma3 = document.getElementsByClassName("nma3")[0];
	
	
	nma2.onmouseover = function(){
	this.style.display = "none"
	nma3.style.display = "block"
	}
	
	nma3.onmouseout = function(){
	this.style.display = "none"
	nma2.style.display = "block"
	}
	// var t = document.getElementsByClassName("t");
	// var yy1 = document.getElementsByClassName("yy1")[0];
	// var p = ["audio/梁静茹 - 勇气.mp3","audio/bingtai.mp3","audio/wodemeng.mp3","audio/renzhen.mp3"];
	// var styleAttr;
	// var zd = true;
	
	// for(let i =0;i < t.length;i++ ){
	// 	t[i].onclick = function(){
			
	// 	yy1.pause();
		
	// 	styleAttr = this.className.slice(2,4);
	
	// 		if(styleAttr == 'tt'){	
	// 		yy1.play();
	// 	   }
		   
		
	// 		yy1.src = p[i];
	// 		yy1.play();
			
	
			
		
		
	// }
 // }
 // function playT(){
	//  for(var i=0;i<t.length;i++){
	// 	 t[i].classList.remove('tt')
	//  }
 // }

	// <1>
   var b1 = document.getElementsByClassName("b1")[0];
   var b11 = document.getElementsByClassName("b11")[0];
   var fang1 = document.getElementsByClassName("fang")[0];
   console.log(b1,b11,fang1)
   
   b1.onclick = function(){
   b11.style.display = "block";
   b1.style.opacity = "0";
   fang1.play();
   }

  b11.onclick = function(){
   b11.style.display = "none";
   b1.style.opacity = "1";
   fang1.pause();
   }
   
   // <2>
   var b2 = document.getElementsByClassName("b2")[0];
   var b22 = document.getElementsByClassName("b22")[0];
    var fang = document.getElementsByClassName("fang1")[0];
   
   b2.onclick = function(){
   b22.style.display = "block";
   b2.style.opacity = "0";
   fang.play();
   }
   
   b22.onclick = function(){
   b22.style.display = "none"
   b2.style.opacity = "1"
   fang.pause();
   }
   
   
   // <3>
   var b3 = document.getElementsByClassName("b3")[0];
   var b33 = document.getElementsByClassName("b33")[0];
   var fang3 = document.getElementsByClassName("fang3")[0];
	
	
   b3.onclick = function(){
   b33.style.display = "block"
   b3.style.opacity = "0"
   fang3.play();
   }
   
   b33.onclick = function(){
   b33.style.display = "none";
   b3.style.opacity = "1";
   fang3.pause();
   }
};
$(function(){
    var key = true;
    $('.xiala').click(function(){
        if(key){
            $('.sousuokuang').css({
                'display':'block'
            })
            $('.wenan').css({
                'display':'none'
            })
            key = false;
        }else{
            $('.sousuokuang').css({
                'display':'none'
            })
            $('.wenan').css({
                'display':'block'
            })
            key = true;
        }
    })
    var s = true;
    $('.denl').click(function(){
        if(s){
            $('.dengluzhuc').css({
                'display':'block'
            })
            s = false;
        }else{
            $('.dengluzhuc').css({
                'display':'none'
            })
            s = true;
        }
    })
    $('.daohangbuju>.wenan>li').mouseenter(function(){
        $('.daohangbuju>.wenan>li').removeClass('action');
        $(this).addClass('action');
    })
	
 $('.kuai1>ul>li').click(function(){
        $('.kuai1>ul>li').removeClass('tt');
        $(this).addClass('tt');
    })

});