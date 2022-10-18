$(function(){
    let arr = ["쇳밥일지","위로의 책", "대출의 마법","조선 정신과 의사 우세풍","가장 좋은 것을 너에게 줄게","아라의 소설"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".discovery_slider").find(".discovery_imgbox img").eq(i).
                attr("src",data.documents[0].thumbnail);

                $(".discovery_slider").find(".discovery_textbox > h4").eq(i).
                text(data.documents[0].title);
            }
        });
    }
});