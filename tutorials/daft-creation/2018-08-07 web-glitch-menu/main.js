$(document).ready(function() {

    $(".menuIcon").click(function(){
        if ($(".close").is(":visible")) {
            $(".open").show();
            $(".close").hide();
            $(".main").fadeOut();
        } else {
            $(".open").hide();
            $(".close").show();
            $(".main").fadeIn();
        }
    });
    
});