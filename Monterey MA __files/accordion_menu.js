(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.accordion_menu = {
    attach: function(context, settings) {
      var expandableSubMenu = $(".menu-block-vts-accordion");
      var noSubMenu = $(".menu-block-vts-accordion li.leaf");
      var withSubMenu = $(".menu-block-vts-accordion li.expanded");

      expandableSubMenu.find("li.expanded").once('accordion-menu', function() {
        // Make the children of list items hidden by default.
        $(this).addClass("is-closed");
      });

      // Expand the menu based on the active menu item.
      var activeParent = expandableSubMenu.find(".active").parents(".expanded");
      activeParent.addClass("is-active-parent");
      activeParent.children("ul").show();
      if (activeParent.hasClass("is-closed")) {
        activeParent.removeClass("is-closed");
        activeParent.addClass("is-open");
      }

      // Hide sub menus for non-active menu items.
      $(".menu-block-vts-accordion .is-closed > ul").hide();

      // Only apply click event to the direct children, not grandchildren.
      withSubMenu.click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("is-closed is-open");
        $(this).children("ul").slideToggle();
      });

      // Prevent clicks on nested links from affecting parent list items without children.
      noSubMenu.click(function(event) {
        event.stopPropagation();
      });
    }
  };
})(jQuery, Drupal, this, this.document);