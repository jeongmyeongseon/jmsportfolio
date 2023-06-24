$(function () {
    let shrinkHeader = 300;
    $(window).scroll(function () {
        let scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header_fixed_wrap').addClass('shrink');
        }
        else {
            $('.header_fixed_wrap').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});