$( ".mobile-menu" ).click(function() {
  $('.header-right').slideToggle('fast');
  });

$('.menu-item-has-children > a').after('<span>+</span>');

  $('.menu-item-has-children > span').click(function() {
    $(this).next('.sub-menu').slideToggle('fast');
    $(this).parent().siblings('li').find('.sub-menu').slideUp('fast');
  });

  $('.flexslider').flexslider({
    animation: "slide",
    rtl: true,
    directionNav: false
  });
