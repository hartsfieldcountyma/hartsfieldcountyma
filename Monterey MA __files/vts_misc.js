(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.vts_misc = {
    attach: function(context, settings) {
      $('.resp-tabs-list a[href*=#]:not([href=#])').click(function(event) {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && $(window).width() > 767) {
          /* Interrupt anchor and just change tab classes */
          event.preventDefault();
          /*
          // Scroll smoothly to responsive tab anchors on tablet and desktop.
          var target = $(this.hash);
          var dest = 0;
          if (target.offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
          }
          else {
            dest=target.offset().top;
          }
          $('html,body').animate({scrollTop: dest}, 1000, 'swing');
          */
        }
      });

      // Remove Superfish hidden classes from mega menu ul content.
      $('.menu-minipanel-panel ul.sf-hidden').removeClass('sf-hidden');
    }
  };
})(jQuery, Drupal, this, this.document);