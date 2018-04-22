var featured = '<div id="Featured">\
          <div class="row">\
            <div class = "col-sm-12 spacer"></div>\
          </div>\
          <div class="row justify-content-center">\
            <div id="google-prototype" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">Google Light Prototype</h2>\
              <img id="1" src="Assets/images/featured/1.jpg">\
            </div>\
            <div id="sandblox" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">Sandblox</h2>\
              <img src="Assets/images/featured/2.png">\
            </div>\
\
            <div id="led-controller" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">LED Controller</h2>\
              <img src="Assets/images/featured/3.jpg">\
            </div>\
            <div id="entanglement" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">Entanglement</h2>\
              <img src="Assets/images/featured/4.jpg">\
            </div>\
            <div id="surround-sounds" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">Surround Sounds</h2>\
              <img src="Assets/images/featured/5.jpg">\
            </div>\
            <div id="dream" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">Dream</h2>\
              <img src="Assets/images/featured/6.jpg">\
            </div>\
          </div>\
        </div>';

function onPortfolioImgHover(){   
    $(".portfolio-img").on('mouseenter', 'img', function(event){
        $(this).fadeTo(200, 0);
        $(this).parent().children('h2').fadeTo(200, 1);
    }).on('mouseleave', 'img', function(event){
            $(this).fadeTo(200, 1);
            $(this).parent().children('h2').fadeTo(200, 0);
        });
};

function onPortfolioImgClick(){ 
    $(".portfolio-img").click(function(){
        console.log(this.id);
        $('#Featured').stop(true).fadeTo(500, 0,
            function(){
                $('#Featured').remove();
                $('#portfolio').append('\
                    <div class="portfolio-subsection">\
                      <div class= "back">\
                        < Back\
                      </div>\
                    </div>');
                if (this.id == 'google-prototype'){
                    
                }
                $('.portfolio-subsection').delegate('.back', 'click', function(){
                    $(this).parent().remove();
                    $('#portfolio').append(featured);
                    onPortfolioImgHover(); 
                    onPortfolioImgClick();
                });
            });
    });
};

$( document ).ready(function() {
    $('.carousel').carousel({
      interval: 4000
    });
    $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    });
    onPortfolioImgClick();
    onPortfolioImgHover();   
 });



