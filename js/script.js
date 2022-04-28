$(function(){
    // main
    function over(){
        $(".sec1").addClass("active");
    }
    function main(){
        setTimeout(over,6500);
    }
    function flow(){
        $(".sloganWrap").css({"overflow":"visible"});
    }
    function main2(){
        setTimeout(flow,13000);
    }
    function partnerFunc(){
        $(".mainBox").addClass("active");
    }
    function partner(){
        setTimeout(partnerFunc,16000);
    }
    main();
    main2();
    partner();

    // menu Scroll
    const menu = $(".nav_list li");
    const contents = $("section");
    menu.eq(0).addClass("active");
    menu.click(function(e){
        e.preventDefault();
        let idx = $(this).index();
        let tt = contents.eq(idx).offset().top;

        $("html, body").animate({scrollTop:tt},800);

        menu.removeClass("active");
        $(this).addClass("active");
    })//click

    $(window).scroll(function(){
        let $sct = $(this).scrollTop();
        console.log($sct);
        contents.each(function(i){
            let tg = $(this);
            if(tg.offset().top - 300 < $sct){
                menu.removeClass("active");
                menu.eq(i).addClass("active");
                tg.addClass("active");
            }   
        })
        if($sct >= 3214){
            $(".header, .nav").addClass("active");
        }else {
            $(".header, .nav").removeClass("active");
        }
    })//scroll

    // topBtn
    const top = $(".f_topBtn");

    top.click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop:0},800);
    })
})//ready end