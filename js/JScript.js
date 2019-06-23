
$(document).ready(function () {
    /* #DEMO
    ================================================== */
    $.getScript('js/demo/demo.js');
    /* END: DEMO */
    /* ---------------------------------------------------------------------- */
    /* Progressbar load page
    /* ---------------------------------------------------------------------- */
    $(".progressbar > span").each(function () {
        var bar = $(this);
        var level = $(this).attr('title');
        bar.width(0);
        bar.animate({
            width: level + '%'
        }, 800);
    });
    var hash = window.location.hash.replace('#', '');

    if (hash && $('.' + hash).length) {
        var point = $('.' + hash).offset().top - 40;

        if (window.Zepto) {
            window.scrollTo(0, point);
        } else {
            $(window).scrollTop($('.' + hash).offset().top - 40);
        };
    };
    $('.arrows .top, .arrows .bottom, .menu-nav .menu-left').click(function (event) {
        var target = $(this).data('to'),
        target_offset = $('.' + target).offset().top;
        event.preventDefault();
        window.location.hash = target;
        if (window.Zepto) {
            window.scrollTo(0, target_offset - 40);
        } else {
            $('html, body').stop().animate({ scrollTop: target_offset - 40 }, 600);
        };
    });


});
