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
    function scrollNav() {
        $('nav a').click(function(){
          $(".active").removeClass("active");     
          $(this).addClass("active");
          
          $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top 
          }, 300);
          return false;
        });
      }
      scrollNav();
})
