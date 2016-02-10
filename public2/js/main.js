(function() {
  $(function() {
    var fullheight, winheight;
    winheight = $(window).height();
    fullheight = $(document).height();
    $('.button-lancamento').click(function() {
      $('.signup-contato').fadeIn(500);
      $('.logo').fadeOut(500);
    });
    $('.signup-btn-fornecedores').click(function() {
      $('.signup-fornecedores').fadeIn(500);
      $('.logo').fadeOut(500);
    });
    return $('.fechar').click(function() {
      $('.signup-contato').fadeOut(500);
      $('.logo').fadeIn(500);
    });
  });

}).call(this);

 //# sourceMappingURL=main.js.map