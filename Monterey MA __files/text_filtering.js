(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.text_filtering = {
    attach: function(context, settings) {
      // Inline images need to resize on browser resize
      $('.field-type-text-with-summary img').each(function() {
        $(this).removeAttr('height');
        $(this).removeAttr('width');
        $(this).css('width', 'auto');
        $(this).css('height', 'auto');

        // Replace float with class that can be responsive.
        if ($(this).css('float') == 'left') {
          $(this).addClass('float-left');
          $(this).css('float', '');
        }
        else if ($(this).css('float') == 'right') {
          $(this).addClass('float-right');
          $(this).css('float', '');
        }
      });
      $('.pane-custom img').each(function() {
        $(this).removeAttr('height');
        $(this).removeAttr('width');
        $(this).css('width', 'auto');
        $(this).css('height', 'auto');
      });

      // Inline tables need to resize if they can.
      $('.field-type-text-with-summary td').each(function() {
        var cell_width = $(this)[0].style.width;
        // Allow only percentage widths.
        if (cell_width.length > 1 && cell_width.lastIndexOf('%') !== (cell_width.length - 1)) {
          $(this).removeAttr('width');
          $(this).css('width', 'auto');
        }
      });
    }
  };
})(jQuery, Drupal, this, this.document);