$(function(){
    let arr = ["내가 당신이었을 때","방어가 제철","매매의 심리","죽은 자의 꿈","차이나 쇼크, 한국의 선택","다가올 날들을 위한 안내서","마법의 비행","게으른 완벽주의자를 위한 심리학","반려공구","박상미의 가족 상담소","이것도 산재예요?","안 일한 하루","고함과 분노"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".latest_slider").find(".content_thumbnail_large").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".latest_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".latest_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});