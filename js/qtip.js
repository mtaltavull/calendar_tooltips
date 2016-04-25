(function ($) {
  Drupal.behaviors.calendar_tooltips = {
    attach: function (context, settings) {
      $('.has-tooltip').each(function() {
        $(this).qtip({
          content: {
            text: $(this).find('.calendar_tooltips')
          },
          hide: {
            fixed: true,
            delay: 300
          }
        });
      });
    }
  };
})(jQuery);
