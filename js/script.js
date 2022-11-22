$(document).ready(function(){
    // slide
    $(".slide_all").slick({
        slide : "li",
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 500,
        arrows : false,
        dots : true,
        autoplay : true,
        autoplayspeed : 3000,
        pauseOnHover : false,
        vertical : false,
        draggable : true,
        dotsClass : "dot_btn"
    });

    // footer_family
    $("footer .copy_fam .menu_fam .fam ul > li").hover(function(){
        $("ul.family_list").stop().show()
    },function(){
        $("ul.family_list").stop().hide()
    });

    // notice_tab
    $(".main_con section.notice .view h3").click(function(){
        $(".main_con section.notice .view h3,.main_con section.notice .view ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on")
    });
});