var featured = '<div class="loaded-portfolio" id="Featured">\
          <div class="row">\
            <div class = "col-sm-12 spacer"></div>\
          </div>\
          <div class="row justify-content-center">\
            <div id="google-prototype" class = "col-md-5 portfolio-img">\
              <h2 class="portfolio-title">SQUAKe</h2>\
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

var coding = {
    "projects": [
        {
            "name": "Google Light Prototype",
            "img": "Assets/images/featured/1.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "Sandblox",
            "img": "Assets/images/featured/2.png",
            "id": "sandblox",
            "modalID": "#sandbloxModal"
        },
        {
            "name": "LED Controller",
            "img": "Assets/images/featured/3.jpg",
            "id": "led-controller",
            "modalID": "#ledModal"
        },
        {
            "name": "Entanglement",
            "img": "Assets/images/featured/4.jpg",
            "id": "google-prototype",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Surround Sounds",
            "img": "Assets/images/featured/5.jpg",
            "id": "surround-sounds",
            "modalID": "#surroundModal"
        },
        {
            "name": "Dream",
            "img": "Assets/images/featured/6.jpg",
            "id": "dream",
            "modalID": "#dreamModal"
        }
    ]
        
}

function fillPortfolioTemplate(){
    //get HTML template using jQuery
    var source = $("#portfolio-template").html();
    //compile the template into a function
    var template = Handlebars.compile(source);
    //create new HTML using our data
    var newHTML = template(coding);
    //add the new HTML to the page
    $("#portfolio-content").append(newHTML);
}

function onPortfolioImgHover(){   
    $(".portfolio-img").on('mouseenter', 'img', function(event){
        $(this).fadeTo(200, 0);
        $(this).parent().children('h2').fadeTo(200, 1);
    }).on('mouseleave', 'img', function(event){
            $(this).fadeTo(200, 1);
            $(this).parent().children('h2').fadeTo(200, 0);
        });
};

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

function sideDotScrolling(nextIndex){
  for (i=0;i<=4;i++){
    if (i==nextIndex){
      dotInView(nextIndex);
    }
    else{
      dotOutOfView(i);
    }
  }
}

function windowSizeOptions(){
  var win = $(this);
  if (win.width() <= 770) {
    $('#fullpage').fullpage({
      autoScrolling: false,
      touchSensitivity: 10,
      onLeave: function(index, nextIndex, direction){sideDotScrolling(nextIndex);}
    });
  }
  else {$('#fullpage').fullpage({
    autoScrolling: true,
    touchSensitivity: 10,
    onLeave: function(index, nextIndex, direction){sideDotScrolling(nextIndex);}
    });
  }
}

function navBarLoad(clickID){
  $('#Featured').stop(true).fadeTo(500, 0,
      function(){
          $('#portfolio').children('.loaded-portfolio').remove();
          if (clickID == 'd-fab'){
            console.log("loading dfab");
            $('#portfolio').append(featured);
            $('.loaded-portfolio').css('opacity', 0);
            $('.loaded-portfolio').stop(true).fadeTo(300, 1.0, function(){
              console.log("loading");
            });
          }
          onPortfolioImgHover(); 
      });
}

function navBarConfiguration(){
  $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
      $(this).dropdown('toggle')
      $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
      $( this ).addClass( 'active' );
      console.log("click");
    });
  $('#portfolio .dropdown-item' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    navBarLoad(this.id);
    console.log(this.id);
  });
}

function modalFreezePageScrolling(){
  $(".modal").on("hidden.bs.modal", function () {
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    });

    $(".modal").on("show.bs.modal", function () {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
    });
}

$( document ).ready(function() {

    windowSizeOptions();
    $('.carousel').carousel({interval: 4000});
    navBarConfiguration();
    modalFreezePageScrolling();
    fillPortfolioTemplate();
    onPortfolioImgHover();
       
 });




