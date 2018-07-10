(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#nav').fadeIn(500);
            } else {
                $('#nav').fadeOut(500);
            }
        });
    });
})(jQuery);
