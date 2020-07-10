$("document").ready(function(){
    
    var Body = $('body');
    
    // Preloader
    Body.addClass('preloader-site');
});
   
$(window).load(function() {
    
    // Page Load
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
    
    $("body").hide().fadeIn(1000);
    $("#splashMenu").hide().delay(1000).fadeIn(500);
    $("#downArrow").hide().delay(1000).fadeIn(500);
    
    // Moving Arrow
    setInterval(arrowMove(),1000);
    
    // Page Unload
    $(document).on("click", "a", function () {
        
        var newUrl = $(this).attr("href");

        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }

        $("body").fadeOut(500, function () {
            location = newUrl;
        });

        return false;
    });
});