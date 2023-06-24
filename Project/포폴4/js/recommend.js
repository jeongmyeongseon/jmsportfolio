$(function(){
    let arr = ["계속 버텨!","매일을 헤엄치는 법","한국의 그림책 작가들에게 묻다","인스타 브레인","당신의 뇌는 최적화를 원한다","뇌, 욕망의 비밀을 풀다","기억의 뇌과학","친밀한 이방인","화차","일곱 번의 거짓말","기후위기? 인류위기!!!","쉬고싶지만 도무지 멈출 수 없는 당신에게","멘탈을 바꿔야 인생이 바뀐다"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".recommend_slider").find(".content_thumbnail_large").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".recommend_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".recommend_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});