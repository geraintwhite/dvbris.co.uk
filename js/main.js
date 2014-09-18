var dropdown = 'nav li:has(ul)',
    dropdown_ul = 'nav li ul',
    open_class = 'open',
    desktop_class = 'desktop',
    breakpoint = 640,
    anim_delay = 200;


function isDesktop() {
  return ($(window).width() > breakpoint);
}


$(function() {
  $(document).click(function(e) {
    var target = $(e.target).parent();
    var target_ul = target.children('ul');

    if (!isDesktop()) {
      $(dropdown).not(target).removeClass(open_class);
      $(dropdown_ul).not(target_ul).slideUp(anim_delay);

      if (target.is(dropdown)) {
        target.toggleClass(open_class);
        target_ul.slideToggle(anim_delay);
      }
    }
  })

  $(window).resize(function() {
    $('body').toggleClass(desktop_class, isDesktop());
  });

  $(window).resize();
});
