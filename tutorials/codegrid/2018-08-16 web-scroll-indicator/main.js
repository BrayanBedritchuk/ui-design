$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();

    var scrolled = (winTop / (docHeight - winHeight)) * 100;

    $(".scroll-line").css("width", (scrolled + "%"));

});