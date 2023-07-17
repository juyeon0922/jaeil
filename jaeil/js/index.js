$(document).ready(function(){
    //상단 메뉴 부분
    $('.mm').mouseenter(function(){
        $('.mm').removeClass('ho');
        $('.mm+nav').hide();
        $(this).addClass('ho');
        $(this).next().slideDown();
    });
    //이미지 슬라이드
    const x=$('#slide div');
    setInterval(leftMove,2000);
    function leftMove(){
        x.animate({left:'-1280px'}, 1500,function(){
            x.append(x.children().first());
            x.css('left','0');
        });
    }

    //팝업보이기
    $('#notice a').click(function(){
        $('#popup').fadeIn();
        $('body').css('overflow','hidden');
    });
    //팝업 닫기
    $('#popup button').click(function(){
        $('#popup').fadeOut();
        $('body').css('overflow','auto');
    });
});//끝부분


