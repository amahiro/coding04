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
    let destroyed = true;
    const sContainer = document.querySelector('.swiper-container');
    window.addEventListener('resize', function() {
        if(destroyed == false) {
            sContainer.swiper.destory();
            destroyed = true;
        }
        const browserWidth = window.innerWidth;
        makeSwiper(browserWidth);
    });
    const browserWidth = window.innerWidth;
    makeSwiper(browserWidth);
    function makeSwiper(browserWidth) {
        const sWrapper = document.querySelector('.swiper-wrapper');
        const sSlide = document.querySelector('.swiper-slide');
        if (browserWidth >= 701) {
            sWrapper.removeAttribute('style');
            sSlide .removeAttribute('style');
        } else if (browserWidth < 701) {
            new HeroSlider('.swiper-container');
            destroyed = false;
        }
    }
    //ハンバーガーメニュー
    new Hamburger();
});
