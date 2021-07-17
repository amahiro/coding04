document.addEventListener('DOMContentLoaded', function(){
    //フェードインアニメーション
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 200){
                    $(this).addClass('scrollin');
                }
            });
        });
    });
    //ページトップリンク
    $(function(){
        var top = $(".page-top");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $(top).addClass("top-open");
            } else {
                $(top).removeClass("top-open");
            }
        });
        top.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
    //swiperの切り替え(スマホサイズのみ起動する)
    var destroyed = true;
    $(window).resize(function(){
        $('.swiper-container').each(function(){
            if (destroyed == false) {
                this.swiper.destroy();
                destroyed = true;
            }
        });
        var w = $(window).width();
        makeSwiper(w);
    });
    $(function(){
        var w = $(window).width();
        makeSwiper(w);
    });
    function makeSwiper(w) {
        if (w >= 701) {
            $('.swiper-wrapper').removeAttr('style');
            $('.swiper-slide').removeAttr('style');
        } else if (w < 701) {
            new HeroSlider('.swiper-container');
            destroyed = false;
        }
    }
    //ハンバーガーメニュー
    new Hamburger();
});