function isDesktop() {
  return ($(window).width() > 640);
}

$(function() {
  $(document).click(function(e) {
    var target = $(e.target).parent();
    if (!isDesktop()) {
      if (target.is($('nav li').has('ul'))) {
        target.find('ul').slideToggle();
      } else {
        $('nav li ul').slideUp();
      }
    }
  })
  $(window).resize(function() {
    $('body').toggleClass('desktop', isDesktop());
  });
  $(window).resize();
});
