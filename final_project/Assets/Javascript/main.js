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

var googlePrototype = '\
  <div id="google-detail">\
    <div class="row">\
      <div class = "col-sm-12 spacer"></div>\
    </div>\
    <div class="row justify-content-around align-items-center">\
      <div id="google-carousel-container" class = "col-sm-5 spacer">\
        <!-- Carousel\
        copied from bootstrap documentation\
          https://getbootstrap.com/docs/4.0/components/carousel/ -->\
        <div id="google-carousel" class="carousel slide" data-ride="carousel">\
          <ol class="carousel-indicators">\
            <li data-target="#google-carousel" data-slide-to="0" class="active"></li>\
            <li data-target="#google-carousel" data-slide-to="1"></li>\
            <li data-target="#google-carousel" data-slide-to="2"></li>\
          </ol>\
          <div id="google-carousel-inner" class="carousel-inner">\
            <div class="carousel-item active">\
              <img class="d-block w-100" src="Assets/images/google-prototype/1.jpg" alt="First slide">\
            </div>\
            <div class="carousel-item">\
              <img class="d-block w-100" src="Assets/images/google-prototype/2.png" alt="Second slide">\
            </div>\
            <div class="carousel-item">\
              <img class="d-block w-100" src="Assets/images/google-prototype/3.jpg" alt="Third slide">\
            </div>\
          </div>\
          <a class="carousel-control-prev" href="#google-carousel" role="button" data-slide="prev">\
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
            <span class="sr-only">Previous</span>\
          </a>\
          <a class="carousel-control-next" href="#google-carousel" role="button" data-slide="next">\
            <span class="carousel-control-next-icon" aria-hidden="true"></span>\
            <span class="sr-only">Next</span>\
          </a>\
        </div>\
        <!-- End of Carousel -->\
      </div>\
      <div class = "col-sm-5">\
        <p id="google-text">\
          This prototype was made during an internship at Iontank, a specialized design studio that \
          develops interactive art installations and software systems. The original design was created \
          during the ideation stage for an installation with their client, Google, and is now a component of the in-progress project.<br>\
          <br>\
          The design was then iterated upon to create a standalone prototype.\
          <br>\
          <br>\
        </p>\
        <iframe src="https://player.vimeo.com/video/259328050" width="640" height="352" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\
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

// function onPortfolioImgClick(){ 
//   $(".portfolio-img").click(function(){
//     var loadID = this.id;
//     $('#Featured').stop(true).fadeTo(500, 0,
//         function(){
//             $('#Featured').remove();
//             $('#portfolio').append('\
//                 <div class="portfolio-subsection">\
//                   <div class= "back">\
//                     < Back\
//                   </div>\
//                 </div>');
//             if (loadID == 'google-prototype'){
//               console.log("loading google");
//               $('.portfolio-subsection').append(googlePrototype);
//               $('.portfolio-subsection').css('opacity', 0);
//               $('.portfolio-subsection').stop(true).fadeTo(300, 1.0, function(){
//                 console.log("loading");
//               });
                
//             }
//             $('.portfolio-subsection').delegate('.back', 'click', function(){
//               $('.portfolio-subsection').stop(true).fadeTo(500, 0.0, function(){
//                 $('.portfolio-subsection').remove();
//               });
            
//             $('#portfolio').append(featured);
//             onPortfolioImgHover(); 
//             onPortfolioImgClick();
//             });
//         });
    
//     });
// };

$.fn.isInViewport = function() {
//Code copied from https://medium.com/talk-like/detecting-if-an-element-is-in-the-viewport-jquery-a6a4405a3ea2
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function dotOutOfView(i){
  $('#dot' + i).css('background-color', 'black');
  $('#dot' + i).css('border-color', 'white');
  $('#dot' + i).css('box-shadow', '0px 0px 0px 0px #121721');
}

function dotInView(i){
  $('#dot' + i).css('background-color', 'white');
  $('#dot' + i).css('box-shadow', '0px 0px 0px 2px #121721');
}

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() <= 770) {$.fn.fullpage.setAutoScrolling(false);}
      else {$.fn.fullpage.setAutoScrolling(true);}
});



$( document ).ready(function() {
  var win = $(this);
  if (win.width() <= 770) {
    $('#fullpage').fullpage({
      autoScrolling: false,
      touchSensitivity: 10,
      onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        console.log(nextIndex);
        
      }
    });
  }
  else {$('#fullpage').fullpage({
    autoScrolling: true,
    touchSensitivity: 10,
    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);
        for (i=0;i<=4;i++){
          if (i==nextIndex){
            dotInView(nextIndex);
          }
          else{
            dotOutOfView(i);
          }
          
        
        }
        
      }

  });
}
  
  $(window).on('resize scroll', function() {
    if ($('#home-background').isInViewport()) {
      dotInView(1);
      dotOutOfView(2);
      dotOutOfView(3);
      dotOutOfView(4);
    } 
    else if ($('#portfolio').isInViewport()) {
      dotInView(2);
      dotOutOfView(1);
      dotOutOfView(3);
      dotOutOfView(4);
    } 
    else if ($('#about').isInViewport()) {
      dotInView(3);
      dotOutOfView(1);
      dotOutOfView(2);
      dotOutOfView(4);
    } 
    else if ($('#connect').isInViewport()) {
      dotInView(4);
      dotOutOfView(1);
      dotOutOfView(2);
      dotOutOfView(3);
    }
    });

    $('.carousel').carousel({
      interval: 4000
    });
    $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
    $( this ).addClass( 'active' );
    });
    //onPortfolioImgClick();
    onPortfolioImgHover();   
 });




