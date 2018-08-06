$(function() {
    var effects = 'animated bounce';
    var effectsEnd = 'animationend  oAnimationEnd webkitAnimationEnd';

    $('a.button').hover(function() {
        $(this).addClass(effects).one(effectsEnd, function() {
            $(this).removeClass(effects);
        });
    });
});