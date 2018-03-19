$(document).ready(function() {
    
    /*
    
    ----NAME ANIMATION----
    
    */
    
$(".js--wp-1").waypoint(function(direction){
         $(".js--wp-1").addClass("animated fadeInUp");
       
       }, {
         offset: "50%"
     });
	
	

	
	$(".js--wp-2").waypoint(function(direction){
         $(".js--wp-2").addClass("animated fadeIn");
       
       }, {
         offset: "50%"
     });

	$(".js--wp-3").waypoint(function(direction){
         $(".js--wp-3").addClass("animated fadeInRight");
       
       }, {
         offset: "50%"
     });
	
	/*-----SCROLL ON BUTTON-----*/
    
    
    $(".js--scroll-to-about").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-about").offset().top}, 1000);
    });
    
	$(".js--scroll-to-skills").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-skills").offset().top}, 12000);
    });
	
	
	$('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    
    });
