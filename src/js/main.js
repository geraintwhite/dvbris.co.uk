var dropdown = 'nav li:has(ul)',
    dropdown_ul = 'nav li ul',
    nav_ul = 'nav > ul',
    nav_toggle = 'nav .nav-toggle',
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

      if (target.is(nav_toggle)) {
        target.toggleClass(open_class);
        $(nav_ul).slideToggle(anim_delay);
      }
    }
  });

  $(window).resize(function() {
    $('body').toggleClass(desktop_class, isDesktop());

    if (isDesktop()) {
      $(dropdown).removeClass(open_class);
      $(dropdown_ul).hide();
      $(nav_toggle).addClass(open_class);
      $(nav_ul).show();
    }
  });

  $('a[data-lightbox]').each(function() {
    $(this).attr('data-title', $(this).siblings('p').html());
  });

  if (!Modernizr.svg) {
    $('.logo').attr('src', 'images/dvbris.png');
  }

  $(window).resize();
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-38825205-5', 'auto');
ga('send', 'pageview');
