var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    onTransitionEnd:function (swiper) {
        var curIndex=swiper.activeIndex;
        var slides=swiper.slides;
        [].forEach.call(slides,function (item,index) {
            item.removeAttribute('id');
            if(index==curIndex){
                item.id = "page"+(curIndex+1);
            }
        })
    },
    onInit : function(swiper) {
        //对第一个滑块初始化
        var slides = swiper.slides;
        slides[0].id = "page1";
    }
})
var music = document.querySelector(".music");
var beyond = document.querySelector("#beyond");
window.setTimeout(function(){
    beyond.play();
    beyond.addEventListener("canplay",function(){
        music.className = "music musicCur";
    })
},1000)
music.addEventListener("click",function(){
    //paused属性判断音频文件是播放的还是停止 beyond.paused=true说明音频文件目前是停止播放
    //让音频文件播放play(),让音频文件停止是pause();
    if(beyond.paused){//停止
        beyond.play();
        music.className = "music musicCur";
    }else{
        beyond.pause();
        music.className = "music";
        music.style.opacity = 1;
    }
},false)
