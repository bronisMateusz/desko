AOS.init({
    duration: 1400
})

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
})
