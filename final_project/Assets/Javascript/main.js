$( document ).ready(function() {
    console.log("ready");

    $('.carousel').carousel({
      interval: 4000
    });

    $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    });

    $(".portfolio-img img").hover(function(){
    //references https://stackoverflow.com/questions/14616818/how-to-use-stop-properly-in-jquery-animation-with-hover-event
        $(this).stop(true).fadeTo(200, 0);
        //$(this).parent('h2').stop(true).fadeTo(200, 1);
        console.log($(this).parent().children('h2'));
        $(this).parent().children('h2').fadeTo(200, 1);
    },
        function(){
            $(this).stop(true).fadeTo(200, 1);
            //$(this).parent('h2').stop(true).fadeTo(200, 0);
            $(this).parent().children('h2').fadeTo(200, 0);
        });
});



