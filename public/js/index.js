'use strict';

$(document).ready(function() {
  'use strict';

  $('form').submit(function(event) {
    event.preventDefault();

    axios.post('/mail', {
      name: $("#name").val(),
      from: $("#email").val(),
      subject: $("#subject").val(),
      text: $("#message").val()
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    $.toast({
      title: 'Thank you!  Your email was successful!',
      backgroundColor: 'rgba(50, 205, 50, 1)',
      textColor: '#fff',
      width: 'auto',
      height: '40px',
      lineheight: '20px',
      duration: 10000
     });


    $("#name").val("");
    $("#email").val("");
    $("#subject").val("");
    $("#message").val("")
  });
});


// Show and hide menu bar
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      });
    } else {
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });

      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });

      $('navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });
});

// smooth scroll
$(document).ready(function() {
  'use strict';

  $('.nav-item, #scroll-to-top, .btn-more, .btn-hire').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// active menu item on click
$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';

    $('.navbar-nav li a').parent().removeClass('active');

    $(this).parent().addClass('active');
  });
});

// Highlight menu item on scroll
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';

    $('section').each(function() {
      'use strict';

      var elementID = $(this).attr('id');
      var height = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height) {
        $(".navbar-nav li a[href='#" + elementID + "']").parent().addClass('active');
      } else {
        $(".navbar-nav li a[href='#" + elementID + "']").parent().removeClass('active');
      }
    });
  });
});
