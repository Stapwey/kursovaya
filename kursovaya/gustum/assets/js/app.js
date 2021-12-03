$(function(){
    var header =$("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    /*Nav-toggle*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
   /*Transition_article*/

    $(document).ready(function() {

        $("a.transition").click(function(event){
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        });

        function redirectPage() {
            window.location = linkLocation;
    }
});

    
});