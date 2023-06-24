$(function(){
    let arr = ["하얼빈","당신의 뇌는 최적화를 원한다","쇳밥일지","헤어질 결심 각본","불편한 편의점","그릿:100쇄 기념 리커버 에디션","역행자","최소한의 이웃","원씽","나는야 질투왕","나는 실수로 투명인간을 죽였다","우리는 어디서 살아야 하는가","진짜 게으른 사람이 쓴 게으름 탈출법","믹스(MIX)","넛지:파이널 에디션","투명인간은 밀실에 숨는다","사피엔스","아라의 소설"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".bestseller_slider").find(".content_thumbnail_small").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".bestseller_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".bestseller_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});