$(function(){
    let arr = ["여자들의 왕","미궁","아라의 소설","떠난 후에 남겨진 것들","엠브리오 기담","비상식적 성공 법칙","하이 아웃풋 매니지먼트","믹스(MIX)","공정 이후의 세계","소행성 충돌 이번에는 다르네","검은 커튼이 드리운 집","딴따라 호엔 우리가 있다","두렵지 아니한가"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".mdspick_slider").find(".content_thumbnail_large").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".mdspick_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".mdspick_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});