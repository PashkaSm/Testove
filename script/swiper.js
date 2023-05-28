$(document).ready(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
    $(".burger").click(function () {
        $("nav").toggleClass("active");
    });
    $(".video__video").fancybox()
    $("header ul span").click(()=>{
        $("nav").toggleClass("active");
    }
    )
})
