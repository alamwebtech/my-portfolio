$(document).ready(function() {
  /* ----STICKY NAV-----*/

  $(".js--section-about").waypoint(
    function(direction){
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /*
    
    ----NAME ANIMATION----
    
    */

  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  /*  ------ABOUT ME ANIMATION----*/

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );

  /*  ------SKILLS ANIMATION----*/

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeInRight");
    },
    {
      offset: "50%"
    }
  );

  /*  ------PROJECTS ANIMATION----*/

  $("#js--wp-4").waypoint(
    function(direction) {
      $("#js--wp-4").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $("#js--wp-5").waypoint(
    function(direction) {
      $("#js--wp-5").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );

  /*-----SCROLL ON BUTTON ANIMATION-----*/

  /*  ------TO ABOUT----*/

  $(".js--scroll-to-about").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-about").offset().top },
      1000
    );
  });

  /*  ------TO SKILLS----*/

  $(".js--scroll-to-skills").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-skills").offset().top },
      1000
    );
  });

  /*  ------TO PROJECTS----*/

  $(".js--scroll-to-projects").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-projects").offset().top },
      1000
    );
  });

  /*  ------TO CONTACT----*/

  $(".js--scroll-to-contact").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      1000
    );
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });

  /* ---MOBILE ANIMATION----*/

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
