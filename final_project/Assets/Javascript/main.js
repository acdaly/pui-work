var featured = {
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

var creativeFrameworks = {
    "projects": [
        {
            "name": "Sandblox",
            "img": "Assets/images/coding/sandblox.jpg",
            "id": "sandblox",
            "modalID": "#sandbloxModal"
        },
        {
            "name": "Plotter Drawing",
            "img": "Assets/images/coding/plotter.jpg",
            "id": "plotter",
            "modalID": "#plotterModal"
        },
        {
            "name": "Fireflies",
            "img": "Assets/images/coding/fireflies.jpg",
            "id": "fireflies",
            "modalID": "#firefliesModal"
        },
        {
            "name": "Surround Sounds",
            "img": "Assets/images/coding/surround-sounds.jpg",
            "id": "surround-sounds",
            "modalID": "#surroundModal"
        },
        {
            "name": "P5 Experiments",
            "img": "Assets/images/coding/p5-experiments.jpg",
            "id": "p5-experiments",
            "modalID": "#p5Modal"
        }
    ]     
}

var hardware = {
    "projects": [
        {
            "name": "Google Light Prototype",
            "img": "Assets/images/coding/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "LED Controller",
            "img": "Assets/images/coding/led-controller.jpg",
            "id": "led-controller",
            "modalID": "#ledModal"
        },
        {
            "name": "Entanglement",
            "img": "Assets/images/coding/entanglement.jpg",
            "id": "google-prototype",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Light Capsule",
            "img": "Assets/images/coding/light-capsule.jpg",
            "id": "light-capsule",
            "modalID": "#capsuleModal"
        }
    ]     
}

var fabrication = {
    "projects": [
        {
            "name": "Google Light Prototype",
            "img": "Assets/images/fabrication/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "Entanglement",
            "img": "Assets/images/fabrication/entanglement.jpg",
            "id": "entanglement",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Holder & Coaster",
            "img": "Assets/images/fabrication/holder.jpg",
            "id": "holder-coaster",
            "modalID": "#holderModal"
        },
        {
            "name": "Within Our Reach",
            "img": "Assets/images/fabrication/swing.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Enclosed",
            "img": "Assets/images/fabrication/enclosed.jpg",
            "id": "enclosed",
            "modalID": "#enclosedModal"
        },
        {
            "name": "Memories",
            "img": "Assets/images/fabrication/memories.jpg",
            "id": "memories",
            "modalID": "#memoriesModal"
        }
    ]     
}

var dFab = {
    "projects": [
        {
            "name": "Google Light Prototype",
            "img": "Assets/images/fabrication/google-prototype.jpg",
            "id": "google-prototype",
            "modalID": "#googleModal"
        },
        {
            "name": "Entanglement",
            "img": "Assets/images/fabrication/entanglement.jpg",
            "id": "entanglement",
            "modalID": "#entanglementModal"
        },
        {
            "name": "Holder & Coaster",
            "img": "Assets/images/fabrication/holder.jpg",
            "id": "holder-coaster",
            "modalID": "#holderModal"
        },
        {
            "name": "Cast a Keychain",
            "img": "Assets/images/fabrication/keychain.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Eclipse",
            "img": "Assets/images/fabrication/eclipse.jpg",
            "id": "eclipse",
            "modalID": "#eclipseModal"
        }
    ]     
}

var woodMetal = {
    "projects": [
        {
            "name": "Within Our Reach",
            "img": "Assets/images/fabrication/swing.jpg",
            "id": "swing",
            "modalID": "#swingModal"
        },
        {
            "name": "Enclosed",
            "img": "Assets/images/fabrication/enclosed.jpg",
            "id": "enclosed",
            "modalID": "#enclosedModal"
        },
        {
            "name": "Memories",
            "img": "Assets/images/fabrication/memories.jpg",
            "id": "memories",
            "modalID": "#memoriesModal"
        },
        {
            "name": "Valetines",
            "img": "Assets/images/fabrication/flower.jpg",
            "id": "floweer",
            "modalID": "#flowerModal"
        },
        {
            "name": "Dead, Dying, Plant",
            "img": "Assets/images/fabrication/plants.jpg",
            "id": "plant",
            "modalID": "#plantModal"
        }
    ]     
}

function fillPortfolioTemplate(category){
    //get HTML template using jQuery
    var source = $("#portfolio-template").html();
    //compile the template into a function
    var template = Handlebars.compile(source);
    //create new HTML using our data
    var newHTML = template(category);
    //add the new HTML to the page
    $("#portfolio").append(newHTML);

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
  $('#portfolio-content').stop(true).fadeTo(500, 0,
      function(){
          $('#portfolio').children('#portfolio-content').remove();
          console.log(clickID);
          if (clickID == 'fabrication'){
            fillPortfolioTemplate(fabrication);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'd-fab'){
            fillPortfolioTemplate(dFab);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'wood-metal'){
            fillPortfolioTemplate(woodMetal);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'featured'){
            fillPortfolioTemplate(featured);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'hardware'){
            fillPortfolioTemplate(hardware);
            $('#portfolio-content').css('opacity', 0);
          }
          else if (clickID == 'creative-frameworks'){
            fillPortfolioTemplate(creativeFrameworks);
            $('#portfolio-content').css('opacity', 0);
          }

          $('#portfolio-content').stop(true).fadeTo(300, 1.0);
          onPortfolioImgHover(); 

          
      });
}

function navBarConfiguration(){
  $('#portfolio .nav-link' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
      $('#portfolio .navbar').find( '.active' ).removeClass( 'active' );
      $( this ).addClass( 'active' );
      if (this.id=="featured"){navBarLoad(this.id);}
    });
  $('#portfolio .dropdown-item' ).on( 'click', function () {
    //references https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working
    navBarLoad(this.id);
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
    fillPortfolioTemplate(featured);
    onPortfolioImgHover();
       
 });




