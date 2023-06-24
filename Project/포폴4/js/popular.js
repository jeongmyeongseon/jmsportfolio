$(function(){
    let arr = ["역행자","세계괴담모음","하얼빈","달러구트 꿈 백화점 2","개정판 | 하얀 늑대들","불편한 편의점","눈물을 마시는 새 2","돈의 심리학","부자 아빠 가난한 아빠 20주년 특별 기념판","원씽","데미안","피를 마시는 새","멘탈의 연금술","망원동 브라더스","어쩐지, 도망치고 싶더라니","헤어질 결심 각본","죽여 마땅한 사람들","뉴 맵"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".popular_slider").find(".content_thumbnail_small").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".popular_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".popular_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});