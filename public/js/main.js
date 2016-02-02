(function() {
  $(function() {
    var animate_elems, fullheight, winheight;
    winheight = $(window).height();
    fullheight = $(document).height();
    $('.signup').fadeOut(0);
    $('.signup-btn-designers').click(function() {
      $('.signup-designers').fadeIn(500);
      $('.logo').fadeOut(500);
    });
    $('.signup-btn-fornecedores').click(function() {
      $('.signup-fornecedores').fadeIn(500);
      $('.logo').fadeOut(500);
    });
    $('.fechar').click(function() {
      $('.signup').fadeOut(500);
      $('.logo').fadeIn(500);
    });
    animate_elems = function() {
      var topcoords, wintop;
      wintop = $(window).scrollTop();
      topcoords = $('.trigger').offset().top;
      if (wintop > topcoords - (winheight * .4)) {
        $('.menu').fadeIn(400);
      } else {
        $('.menu').fadeOut(400);
      }
    };
    $(window).scroll(function() {
      animate_elems();
    });
  });

}).call(this);

 //# sourceMappingURL=main.js.map