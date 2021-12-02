(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    });

    // FIELD FOCUS
    $('.form-control').focus(function(){
        $(this).parent().addClass('is-focused')
    });

})(jQuery);
