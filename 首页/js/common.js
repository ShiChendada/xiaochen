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
    var bof = document.getElementsByClassName("bof");
    var a = document.getElementsByClassName('a')[0];
    var gec = document.getElementsByClassName('gec')[0];
    var mm = document.getElementsByClassName('mm')[0];
    var m = document.getElementsByClassName('m')[0];
    var guangdie = document.getElementsByClassName('guangdie')[0];
    var f = ["audio/renzhen.mp3","audio/dujioaxi.mp3","audio/nishuo.mp3","audio/Marshmallow.mp3"];
    var bofs = true;
    for(let i = 0; i < bof.length; i++){
     bof[i].onclick = function(){
        console.log(bof[i])
        if(bofs){
            a.src = f[i];      
            guangdie.classList.remove('kl');
            guangdie.classList.add('kl');
            a.play();
            
            bof[i].style.background = 'url(img/zanting.png) no-repeat';
            bofs = false;
        }else{
            guangdie.classList.remove('kl');
            a.pause();
            bof[i].style.background = 'url(img/bofang.png) no-repeat';
            bofs = true;
        }
        
        switch(i){
          case 0 : 
            gec.style.opacity = '1';      
           break;

           case 1 :
                gec.style.opacity = '0';
            break;

            case 2 :
                    a.src = f[i];
                    a.play();
            break;

            case 3 :
            break;
        }
    }
};
var hao = document.getElementsByClassName('hao')[0];
var pos = document.getElementsByClassName('pos');
var p = ["audio/wodemeng.mp3","audio/dujioaxi.mp3","audio/nishuo.mp3","audio/Marshmallow.mp3"];
var zd = true;
for(let s = 0;s < pos.length;s++){
    pos[s].onclick = function(){
        if(zd){
            hao.src = p[s];      
            hao.play();
            
            pos[s].style.background = 'url(img/zanting.png) no-repeat';
            zd = false;
        }else{
            hao.pause();
            pos[s].style.background = 'url(img/bofang.png) no-repeat';
            zd = true;
        }
    }
};
    var gengduo = document.getElementsByClassName('gengduo')[0];
    var dianzheg = document.getElementsByClassName('dianzheg')[0];
    var remendanq = document.getElementById('remendanq');
    var bb = true;
    gengduo.onclick = function(){
        if(bb){
            dianzheg.style.display = 'block';
            bb = false;
        }else{
            dianzheg.style.display = 'none';
            bb = true;
        }
        
    };

    var shuzi = document.getElementById('shuzi');
    var opa = document.getElementsByClassName('opa');
    var i1 = document.getElementsByClassName('i1')[0];
    var i2 = document.getElementsByClassName('i2')[0];
    var cai = document.getElementsByClassName('cai');
    var index = 0;
    
    i1.onclick = function(){
        none();
        index --;
        if(index < 0){
           index = 3;
        }
        cai[index].classList.add('play');
        opa[index].classList.add('abn'); 
    }

    i2.onclick = function(){
none();
        index++;
        if(index > 3){
             index = 0;
        }
        opa[index].classList.add('abn');
        cai[index].classList.add('play');
    }

function none(){
    for( var i = 0; i < cai.length; i++){
          cai[i].classList.remove('play');
          opa[i].classList.remove('abn');
    }
};

    var xzx = document.getElementsByClassName('xzx');
    var sp = document.getElementsByClassName('sp');
    var xia = document.getElementsByClassName('xia')[0];
    var shang = document.getElementsByClassName('shang')[0];
    var bs = document.getElementsByClassName('bs')[0];
    var daskuang = document.getElementsByClassName('daskuang')[0];
    var vide = document.getElementsByClassName('vide')[0];
    var x = document.getElementsByClassName('x')[0];
    var inb = 0;
    xia.onclick = function(){
        wje();
        inb++;
        if(inb>3){
            inb = 0;
        }
        sp[inb].classList.add('haod');
        xzx[inb].classList.add('s');
    }
    for(let k = 0;k<sp.length;k++){
        sp[k].onmouseenter = function(){
            bs.style.opacity = '1';
        }    
        sp[k].onmouseleave = function(){
            bs.style.opacity = '0';
        }
        bs.onmouseenter = function(){
            bs.style.opacity = '1';
        }    
        bs.onmouseleave = function(){
            bs.style.opacity = '0';
        }
    }
    shang.onclick = function(){
        wje();
        inb--;
        if(inb<0){
            inb = 3;
        }
        sp[inb].classList.add('haod');
        xzx[inb].classList.add('s');
    }
    function wje(){
        for(var i = 0;i<xzx.length;i++){
            xzx[i].classList.remove('s');
            sp[i].classList.remove('haod');
        }
    }
    bs.onclick = function(){
        vide.style.display = 'block';
    };
    x.onclick = function(){
        vide.style.display = 'none';
    };
    var guangs = document.getElementsByClassName('guangs');
    var df = document.getElementsByClassName('df');
    for(let d = 0;d<df.length;d++){
        guangs[0].style.display = 'block';
        df[d].onclick = function(){
            oos();
            guangs[d].style.display = 'block';
        }
    }
    function oos(){
        for(let i =0;i<guangs.length;i++){
            guangs[i].style.display = 'none';
        }
    }

    var shutu = document.getElementsByClassName('shutu');
    var shutu2 = document.getElementsByClassName('shutu2');
    for(let n = 0;n<shutu.length;n++){
        shutu[n].onmouseover = function(){
            switch(n){
                case 0 :
                        blok();
                        shutu[n].style.background = 'url(img/xuezhiqianhou.png) no-repeat';
                break;
                case 1 :
                        blok();
                    shutu[n].style.background = 'url(img/yiyangqianxi.png) no-repeat';
                break;
                case 2 :
                    blok();
                    shutu[n].style.background = 'url(img/luozhix.png) no-repeat';
                break;
            }
        }
    }
    for(let k = 0; k<shutu2.length;k++){
        shutu2[k].onmouseover = function(){
            switch(k){
                 case 0 :
                        kl();
                        shutu2[k].style.background = 'url(img/zhoujielun.png) no-repeat';
                break;
                case 1 :
                    kl();
                    shutu2[k].style.background = 'url(img/zj2.png) no-repeat';
                break;
                case 2 :
                        kl();
                        shutu2[k].style.background = 'url(img/hcy2.png) no-repeat';
                break;
            }
        }
    }
    function blok(){
        for(var s = 0; s<shutu.length;s++){
            shutu[s].style.background = '';
        }
    };
    function kl(){
        for(var s = 0; s<shutu.length;s++){
            shutu2[s].style.background = '';
        }
    };
    
    var yiy = document.getElementsByClassName('yiy');
    var yuy = ['img/yiy1.png','img/yiy2.png']
    var sas = ['img/yiy1wu.png','img/yiy2wu.png']
    for(let i = 0;i<yuy.length;i++){
        yiy[i].onmouseenter = function(){
            kkl();
            yiy[i].src = yuy[i];
        }
    }

function kkl(){
    for(let i = 0;i<yuy.length;i++){
        yiy[i].src = sas[i];
    }
}

    var zx = document.getElementsByClassName('zx');
    var tinhao = document.getElementsByClassName('tinhao')[0];
    var mu = ['audio/muouren.mp3','audio/manbanpai.mp3','audio/Show Time.mp3','audio/xiaochang.mp3','audio/bingtai.mp3'];
    var mk = true;
    for(let o = 0;o<zx.length;o++){
        zx[o].onclick = function(){
            if(mk){
                tinhao.src = mu[o];      
                tinhao.play();
                
                zx[o].style.background = 'url(img/zanting.png) no-repeat';
                mk = false;
            }else{
                tinhao.pause();
                zx[o].style.background = 'url(img/bofang.png) no-repeat';
                mk = true;
            }
        }
    };
    var xihuan = document.getElementsByClassName('xihuan')[0];
    var xi = true;
    xihuan.onclick = function(){
        if(xi){
            xihuan.style.background = 'url(img/xihaun.png)';
            xi = false;
        }else{
            xihuan.style.background = 'url(img/xihaunwu.png)';
            xi = true;
        }
    }



    var shoucang = document.getElementsByClassName('shoucang')[0];
    var shuo = true;
    shoucang.onclick = function(){
        if(shuo){
            shoucang.style.background = 'url(img/shoucang.png)';
            shuo = false;
        }else{
            shoucang.style.background = 'url(img/shoucangwu.png)';
            shuo = true;
        }
    }


    var changt = document.getElementsByClassName('changt');
    var wenans = document.getElementsByClassName('wenans');
    for(let v = 0;v<changt.length;v++){
        changt[0].style.display = 'block';
        wenans[v].onclick = function(){
            numbsa();
            changt[v].style.display = 'block';
        }
    };
    function numbsa(){
        for(let i = 0;i<changt.length;i++)
        changt[i].style.display = 'none';
    };

};
var oo = 0;
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
    $('#remendanq>.wenan>li').click(function(){
        $('#remendanq>.wenan>li').removeClass('zhuyao');
        $(this).addClass('zhuyao');
    })
    $('.gedan>ul').click(function(){
        $('.gedan>ul').removeClass('g');
        $(this).addClass('g');
    });
    $('#mu>.a').click(function(){
        $('#mu>.a').removeClass('k');
        $(this).toggleClass('k');
    })
    $('.xia').mousedown(function(){
        $('.xia').css({
            'background':'url(img/xiayig.png)'
        })
    })
    $('.xia').mouseup(function(){
        $('.xia').css({
            'background':'url(img/xiayigwu.png)'
        })
    })
    $('.shang').mousedown(function(){
        $('.shang').css({
            'background':'url(img/shangyig.png)'
        })
    })
    $('.shang').mouseup(function(){
        $('.shang').css({
            'background':'url(img/shangyigwu.png)'
        })
    })

        $('.adc').eq(1).click(function(){
            $('.ger').eq(0).hide(1000);
            $('.ger').eq(1).show(1000);
        })
        $('.adc').eq(0).click(function(){
            $('.ger').eq(1).hide(1000);
            $('.ger').eq(0).show(1000);
        })


        // $('.m').click(function(){
        //     $('.liux').hide(1000);
        //     $('.huayu').fadeIn(1000);
        // })

        // $('.mm').click(function(){
        //     $('.huayu').hide(1000);
        //     $(".liux").fadeIn(1000);
           
        // })
        
    var huayu = document.querySelector('.huayu');
    var liux = document.querySelector('.liux');
    var m = document.querySelector('.m');
    var mm = document.querySelector('.mm');
    var xiaotu = document.querySelectorAll('.xiaotu');
    var datu = document.querySelectorAll('.datu');
    var xxzahng = document.getElementsByClassName('xxzahng')[0];
    console.log(datu);


    xiaotu[0].style.opacity = '1';
    datu[1].style.opacity = '0';
    mm.onclick = function(){
        huayu.style.display = 'none';
        liux.style.display = 'block';

        datu[1].style.opacity = '1';
        datu[0].style.opacity = '0';

        xiaotu[0].style.opacity = '0';
        xiaotu[1].style.opacity = '1';
        xxzahng.style.zIndex = '5';
        setTimeout(function(){
           liux.style.display = 'block';
           
        },10)
    }
    m.onclick = function(){
        liux.style.display = 'none';
        huayu.style.display = 'block';

        datu[1].style.opacity = '0';
        datu[0].style.opacity = '1';


        xiaotu[1].style.opacity = '0';
        xiaotu[0].style.opacity = '1';
        xxzahng.style.zIndex = '-1';
        setTimeout(function(){
           huayu.style.display = 'block';
           
        },10)
    }
})