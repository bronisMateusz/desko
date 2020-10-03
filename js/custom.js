AOS.init({
    duration: 1400
})

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      var $jumbo = $(".jumbotron");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $jumbo.height());
    });
})
