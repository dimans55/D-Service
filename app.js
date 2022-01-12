$(function() {
 
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
     
    });    
    
    /* Smooth scroll  */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("active");
        
        console.log(elementOffset);
        
        $("html, body").animate({
           scrollTop: elementOffset - 50 
            
        },700);
    });
});

    /* Nav Toggle */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(Event) {
        Event.preventDefault();
        
        nav.toggleClass("show");
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

















