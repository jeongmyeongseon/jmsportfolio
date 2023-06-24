$(function () {
    let slide_count = 0;

    //자동적으로 slider를 움직이기 위한 함수
    function slide_move() {
        slide_count++;
        $('.slider').stop().animate({ marginLeft: -1800 }, 700, function () {
            $('.slider > li:first').appendTo(".slider");
            $('.slider').css({ marginLeft: 0 });
        }); 
        if (slide_count > $('.slider > li:last').index()) {
            slide_count = 0;
        };
    }
    let resetIn = setInterval(slide_move, 6000);

    //prev 버튼을 누르면 실행되는 함수
    function slide_prev() {
        //clearInterval 비 사용시 interval의 이동과 클릭시 이동이 겹쳐지면서 오류가 발생 그것을 막기위해 정지후 다시 interval을 줌
        clearInterval(resetIn);
        resetIn = setInterval(slide_move, 6000);
        slide_count--;
        if (slide_count < 0) {
            slide_count = 2;
        }
        $('.slider > li:last').prependTo(".slider");
        $('.slider').css({ marginLeft: -1800 });
        $('.slider').stop().animate({ marginLeft: 0 }, 700);

    }
    //next 버튼을 누르면 실행되는 함수
    function slide_next() {
        clearInterval(resetIn);
        resetIn = setInterval(slide_move, 6000);
        $('.slider').stop().animate({ marginLeft: -1800 }, 700, function () {
            slide_count++;
            if (slide_count > $('.slider > li:last').index()) {
                slide_count = 0;
            };
            $('.slider > li:first').appendTo(".slider");
            $('.slider').css({ marginLeft: 0 });
        });
    }

    //함수 실행을 위해 click 이벤트 발생시 실행함수를 불러오기위한 함수
    $('.prev').click(function () {
        slide_prev();
    });
    $('.next').click(function () {
        slide_next();
    });
});