function isDesktop() {
  return ($(window).width() > 640);
}

$(function() {
  $(document).click(function(e) {
    var target = $(e.target).parent();
    if (!isDesktop()) {
      $('nav li ul').not(target.find('ul')).slideUp(200);
      if (target.is('nav li:has(ul)')) {
        target.find('ul').slideToggle(200);
      }
    }
  })
  $(window).resize(function() {
    $('body').toggleClass('desktop', isDesktop());
  });
  $(window).resize();
});
