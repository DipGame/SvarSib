document.addEventListener("DOMContentLoaded", function () {

    // Функция для добавления класса слайдам до активного
    function addClassBeforeActive(swiper) {
        const activeIndex = swiper.activeIndex;
        const slides = swiper.slides;

        // Удаляем класс у всех слайдов
        slides.forEach(slide => {
            slide.classList.remove('swiper-slide-before-active');
        });

        // Добавляем класс всем слайдам до активного
        for (let i = 0; i < activeIndex; i++) {
            slides[i].classList.add('swiper-slide-before-active');
        }
    }

    let swiperBaner = new Swiper(".swiperBaner", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1500,
        // loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiperBaner .sw-btn-next",
            prevEl: ".swiperBaner .sw-btn-prev",
        },
        pagination: {
            el: ".swiperBaner .sw-pagin",
            clickable: true,
        },
    });
    let swiperOurProducts = new Swiper(".swiperOurProducts", {
        speed: 1500,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".main-our-products .sw-btn-next",
            prevEl: ".main-our-products .sw-btn-prev",
        },
        pagination: {
            el: ".swiperOurProducts-sw-pagin",
            clickable: true,
        },
        on: {
            init: function () {
                addClassBeforeActive(this);
            },
            slideChange: function () {
                addClassBeforeActive(this);
            }
        },
        breakpoints: {
            500: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                centeredSlides: false,
            }
        }
    });

    let swiperProductSectionSlider = new Swiper(".swiperProductSectionSlider", {
        speed: 1500,
        slidesPerView: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiperProductSectionSlider-sw-btn-next",
            prevEl: ".swiperProductSectionSlider-sw-btn-prev",
        },
        breakpoints: {
            1530: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
        }
    });

    let swiperQualityControlText = new Swiper(".swiperQualityControlText:not(.v2)", {
        speed: 1500,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".sw-btn-next-quality-control:not(.v2 .sw-btn-next-quality-control)",
            prevEl: ".sw-btn-prev-quality-control:not(.v2 .sw-btn-prev-quality-control)",
        },
    });

    let swiperQualityControlImages = new Swiper(".swiperQualityControlImages:not(.v2)", {
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiperQualityControlImages-sw-pagin",
            clickable: true,
        },
    });

    swiperQualityControlText.controller.control = swiperQualityControlImages;
    swiperQualityControlImages.controller.control = swiperQualityControlText;

    let swiperQualityControlImagesV2 = new Swiper(".swiperQualityControlImages.v2", {
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiperQualityControlText.v2 .sw-btn-next-quality-control",
            prevEl: ".swiperQualityControlText.v2 .sw-btn-prev-quality-control",
        },
        on: {
            init: function () {
                addClassBeforeActive(this);
            },
            slideChange: function () {
                addClassBeforeActive(this);
            }
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 10,
                centeredSlides: false,
                loop: true,
            },
            970: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                centeredSlides: false,
                loop: false,
            }
        }
    });

    let swiperStage = new Swiper(".swiperStage", {
        speed: 1500,
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: false,
    });
    var swiperMetalworkingDetailOther = new Swiper(".swiperMetalworkingDetailOther", {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        centeredSlides: true,
        loop: true,
        initialSlide: 2,
        pagination: {
            el: ".swiperMetalworkingDetailOther-sw-pagin",
            clickable: true,
        },
    });
    var mySwiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });
    var mySwiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        thumbs: {
            swiper: mySwiper2,
        },
    });

    let swiperFotos = new Swiper(".swiperFotos:not(.swiperFotos_v2)", {
        speed: 1500,
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        initialSlide: 2,
        pagination: {
            el: ".sw-pagin-fotos:not(.v2)",
            clickable: true,
        },
    });

    let swiperFotosV2 = new Swiper(".swiperFotos.swiperFotos_v2", {
        speed: 1500,
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".sw-pagin-fotos.v2",
            clickable: true,
        },
    });
    if (document.getElementById('is-admin')) {
        console.log('addSwiper.js finish work');
    }
});