class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            effect: 'slide',
            spaceBetween: 20,
            loop: false,
            centeredSlides: true,
            grabCursor: false,
            slidesPerView: 1,
            speed: 500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }
        });
    }
}