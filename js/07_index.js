// Typed js 적용
let typing = new Typed('#typing', {
    strings: ["Emotion!", "Passion!", "simple-coding Shop"],
    typeSpeed: 50,
});

// menu 숨기기/보이기
$(function () {
    $(".fab").click(function () {
        $(".menu").toggle();
    })
})
// swiper 이미지 회전
let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
});
// AOS 설정
AOS.init();

// isotope 설정
$(function () {
    // isotope 설정하기: 1) product-box 를 isotope 대상으로 지정
    $('.product-box').isotope({
        // options
        itemSelector: '.product',
        layoutMode: 'fitRows',
        // filter: ".women"
    });

    // (*, .men, women) 3개 중에 1개의 li 를 클릭할 때
    $(".product-list > li").click(function () {
        $('.product-box').isotope({
            // this : 클릭한 li 를 의미함
            filter: $(this).attr("data-filter")
        });
    });
})
// TODO : sticky 설정
$(function () {
    $("#fab").click(function () {
        $("html").animate({ scrollTop: 0 }, 1000);
    });
});  