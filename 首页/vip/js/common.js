window.onload = function(){

    var banner1 = document.getElementsByClassName("banner1")[0];
    console.log(banner1)

    var idx = 0;

    var timer = setInterval(show,2000);

    banner1.onmouseover = function(){
        clearInterval(timer);
    }

    banner1.onmouseout = function(){
        timer = setInterval(show,2000);
    }
   var arr = ['img/banner1.jpg','img/banner2.jpg']
    function show(){
        idx++;
        if(idx>1){
            idx = 0;
        }
        banner1.src = arr[idx];
        console.log(banner1);
    };
    
    var fang = document.getElementsByClassName("hover")[0];
    var ge1 = document.getElementsByClassName("ge1")[0];
    var fang2 = document.getElementsByClassName("hover1")[0];
    var ge2 = document.getElementsByClassName("ge2")[0];
    var fang3 = document.getElementsByClassName("hover2")[0];
    var ge3 = document.getElementsByClassName("ge3")[0];
    var go = document.getElementsByClassName("jiji")[0];
    var mv = document.getElementsByClassName("luozhixiang")[0];
    console.log(go,mv)

    var zd = true;

    go.onclick = function(){
    mv.style.display = "block";
    mv.style.width= "999px";
    mv.play();
    }

    mv.onclick = function(){
    mv.style.display = "none";
    mv.pause();
    }



    fang.onclick = function(){
        if(zd){
            ge1.play();

            zd = false;
        }else{
            ge1.pause();

            zd = true;
        }
  }

    fang2.onclick = function(){
        if(zd){
            ge2.play();

            zd = false;
        }else{
            ge2.pause();

            zd = true;
        }
    }
    fang3.onclick = function(){
        if(zd){
            ge3.play();

            zd = false;
        }else{
            ge3.pause();

            zd = true;
        }
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


    $("#banner>.mask").click(function(){
        console.log("111");
    })
});