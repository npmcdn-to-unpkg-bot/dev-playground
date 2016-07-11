/**
 * Self Executing Anonymous function with jquery variable passed in as argument for no-conflict
 */

(function ($){
  var fixedNavHeight = -114;

  // dynamically add text copy for all buttons rather than hard code.
  // this is needed for the button animation
  $('.button').each(function(index, el) {
    $(el).children().clone().appendTo($(this));
  });

  // Expand accordion for insights pange
  if ($('body').hasClass('insights')) {
    $('.accordion').find('.accordion__item__nav').addClass("opened").siblings('.accordion__item__panel').slideToggle(0);
  }

/**
 * Nav Interactions
 * ------------------------------- */
  var $nav = $(".nav"),
      $navMenu = $nav.find(".nav__menu"),
      $closeNavBtn = $nav.find(".close-button");

  // Show navigation on scroll up
  $nav.headroom({
    "offset": $nav.outerHeight() + $nav.offset().top,
    classes : {
        initial  : "nav",                   // when element is initialised
        pinned   : "nav--affix",            // when scrolling up
        unpinned : "nav--affix--hidden",    // when scrolling down
        top      : "nav--in-view",          // when above offset
        notTop   : "nav--not-in-view"       // when below offset
    },
    onPin: function() {
      $nav.parent().css('padding-top', $nav.outerHeight() + 'px');
    },
    onUnpin: function() {
      $nav.parent().css('padding-top', $nav.outerHeight() + 'px');
    },
    onTop : function() {
      $nav.parent().css('padding-top', '0');
    }
  });

  // Hamburger Nav slide down
  $nav.on('click', '.hamburger', function(event) {
    $navMenu.addClass('nav__menu--opened');
  });

  // Hamburger Nav slide up
  $nav.on('click', '.close-button', function(event) {
    $navMenu.removeClass('nav__menu--opened');
  });

/**
 *  Homepage Slider
 * ------------------------------- */
  var $documentSlider = $("#document-solutions__slider"),
      $documentSliderNav = $("#document-solutions__slider__nav");

  $documentSlider.slick({
    arrows: true,
    appendArrows: $documentSliderNav,
    appendDots: $documentSliderNav,
    infinite: false,
    speed: 400,
    dots: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    touchThreshold: 50,
    variableWidth: true
  });

  $documentSliderNav.find('.slick-next').appendTo($documentSliderNav);


/**
 *  Interactions for process module
 * ------------------------------- */
  var $processSlider = $('#processSlider'),
      $processRingWrap = $(".solutions-process__ring__wrap");
      $processRing = $(".solutions-process__ring");

  // On slider initialize
  // must bind before calling .slick()
  $processSlider.on('init', function(event, slick){
    $processRing.velocity({rotateZ: '360deg'}, { duration: 90000, loop: true });
  });

  $processSlider.slick({
    arrows: false,
    infinite: false,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Go back to step 1
  $('.solutions-process__item__reset').on('click', function(event) {
    event.preventDefault();

    $processRing.velocity({
      rotateZ: "-=72"
    }, {
      complete: function(){ $processSlider.slick("slickGoTo", 1, true); }
    });

  });

  // Next slide button
  var processSliderObj = $processSlider.slick("getSlick");

  $('.solutions-process__item__next').click(function(event) {
    event.preventDefault();

    var currIndex = $processSlider.slick("slickCurrentSlide");

    var $thisSlide = $(processSliderObj.$slides[currIndex]),
        $nextSlide = $(processSliderObj.$slides[currIndex + 1]);

    var seqIntitial = [
      { e: $nextSlide.find(".solutions-process__item__child").children(),
        p: { translateX: "-70%", opacity: 0 },
        o: { duration: 0 }
      },
      { e: $nextSlide.find(".solutions-process__item__label"),
        p: { translateX: "-70%", opacity: 0 },
        o: { duration: 0 }
      },

      { e: $thisSlide.find(".eyebrow"),       p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50}   },
      { e: $thisSlide.find(".headline"),      p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 250, sequenceQueue: false }              },
      { e: $thisSlide.find(".headline--sub"), p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50,   sequenceQueue: false } },
      { e: $thisSlide.find(".button"),        p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 250, sequenceQueue: false }              },
      { e: $thisSlide.find(".social-links"),  p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50,   sequenceQueue: false } },

      // { e: $thisSlide.find(".solutions-process__item__child"),  p: { opacity: 0 }, o: { display: "none" duration: 0, sequenceQueue: false } },

      { e: $processRingWrap, p: { translateX: '-45%'}, o: { duration: 0,               sequenceQueue: false} },             //    force-feed transform
      { e: $processRingWrap, p: { translateX: '37%'},  o: { easing:   "easeInOutSine", duration:      400,   sequenceQueue: false }          },
      { e: $processRing,     p: { rotateZ:    "32deg"}, o: { easing:   "easeOutSine",   duration:      400,   sequenceQueue: false }          }
    ];

    var seqSlideOut = [
      { e: $nextSlide.find(".solutions-process__item__child").children(),
        p: { translateX: "-70%", opacity: 0 },
        o: { duration: 0 }
      },
      { e: $nextSlide.find(".solutions-process__item__label"),
        p: { translateX: "-70%", opacity: 0 },
        o: { duration: 0 }
      },

      { e: $thisSlide.find(".eyebrow"),       p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50}   },
      { e: $thisSlide.find(".headline"),      p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 250, sequenceQueue: false }              },
      { e: $thisSlide.find(".headline--sub"), p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50,   sequenceQueue: false } },
      { e: $thisSlide.find(".button"),        p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 250, sequenceQueue: false }              },
      { e: $thisSlide.find(".solutions-process__item__label"),  p: { translateX: "-70%", opacity: 0 }, o: { easing: "easeOutCubic", duration: 200, delay:         50,   sequenceQueue: false } },

      { e: $processRing, p: { rotateZ: "+=72" },  o: { easing: "easeOutSine", duration: 400, delay: 100, sequenceQueue: false } }
    ];

    if (currIndex === 0) {
      $.Velocity.RunSequence(seqIntitial);
      $processRing.velocity("stop");
    } else {
      $.Velocity.RunSequence(seqSlideOut);
    }

    $processSlider.slick("slickNext");

  });

  // After Slide changes
  $processSlider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var $thisSlide = $(slick.$slides[currentSlide]);

    var seqSlideIn = [
      { e: $thisSlide.find(".eyebrow"),  p: { translateX: 0, opacity: 1 }, o: { easing: "easeOutQuad", duration: 200, delay: 50 } },
      { e: $thisSlide.find(".headline"),  p: { translateX: 0, opacity: 1 }, o: { easing: "easeOutCubic", duration: 250, sequenceQueue: false } },
      { e: $thisSlide.find(".headline--sub"), p: { translateX: 0, opacity: 1 }, o: { easing: "easeOutCubic", duration: 200, delay: 50, sequenceQueue: false } },
      { e: $thisSlide.find(".button"),  p: { translateX: 0, opacity: 0.7 }, o: { easing: "easeOutQuad", duration: 250, sequenceQueue: false } },
      { e: $thisSlide.find(".solutions-process__item__label"), p: { translateX: 0, opacity: 1 }, o: { easing: "easeOutQuad", duration: 250, sequenceQueue: false } }
    ];

    $.Velocity.RunSequence(seqSlideIn);
  });

/**
 * Form Validation
 * ------------------------------- */

  // show/hide loading gif
  $(document).bind("ajaxSend", function(){
    $("#loading").show();
  }).bind("ajaxComplete", function(){
    $("#loading").hide();
  });

  // Populate fields based on page hash referal
  var theHash = window.location.hash;

  if (theHash) {
    var valIndex = theHash.indexOf('=');

    var field = theHash.substring(2, valIndex),
        value = theHash.substring(valIndex + 1);

    // Set the value of the field
    if (field) {
      $('form').find("#"+field).val(value);
    }
  }

  // Add custom email Validation method to validator plugin
  jQuery.validator.addMethod("validEmail", function(value, element) {
    return this.optional( element ) || /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test( value );
  }, 'Please enter a valid email address.');

  jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");

    return this.optional(element) || phone_number.length > 9 &&
      phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
  }, "Invalid phone number");

  $("form").validate({
    rules: {
      firstName: {
        required: true,
        rangelength: [2, 40]
      },
      lastName: {
        required: true,
        rangelength: [2, 80]
      },
      email: {
        required: true,
        validEmail: true,
        rangelength: [6, 256]
      },
      phone: {
        required: true
      },
      subject: {
        required: true
      },
      message: {
        required: true,
        maxlength: 1500
      }
    },
    errorPlacement: function(error, element) {
      return true; // suppress addinging error messages to the DOM
    },
    focusInvalid: false,
    invalidHandler: function (form, validator) {
      var $firstInvalid = $(validator.errorList[0].element);
      if (!validator.numberOfInvalids()) {
        return;
      }

      // scroll to the first invalid field
      $firstInvalid.velocity("scroll", {duration  : 250, offset: fixedNavHeight});
      $firstInvalid.focus();
    },
    submitHandler: function(form) {
      // disable the submit button to prevent double submit
      $('button[type="submit"]', form).attr('disabled', 'disabled');

      ajaxSubmit(form);
    }
  });


function submitMessage(formStatus, container) {
  if (container === undefined) {
    container = 'main';
    height = fixedNavHeight;
  } else {
    height = 0;
  }
  $(container).velocity("scroll", {
    duration: 300,
    offset: height,
    complete: function() {
      $('.form__wrapper').velocity({
        opacity: 0
      }, {
        duration: 300,
        visibility: "hidden",
        complete: function() {
          $('.message.'+formStatus).velocity("fadeIn", {
            delay: 500,
            duration: 500,
          });
          $('.form__wrapper').remove();
        }
      });
    }
  });
}

$("a[class^=wistia-popover]").click(function () {
    ga('send', 'event', '[OUW - Paid Search]', '[Watch]', '[Webinar Video - Watch]');
});

/**
 * submit forms via ajax
 * @param  {html} form
 * @return false
 */
  function ajaxSubmit(form) {
    $form = $(form);

    container = $form.hasClass('popup') ? '.modal--home' : 'main';

    // Get Craft token
    // Submit form
    $.ajax({
      url: '/actions/contactForm/getToken',
      success: function(result) {
        if (result.csrfTokenName) {

          // if we get the token from craft, proceed with form submission
          var submitURL  = '/actions/contactForm/postSubmission',
              formData = $form.serialize() + '&' + result.csrfTokenName + '=' + result.csrfTokenValue;

          ga('send', 'event', 'Contact Form', 'Contact Us', 'Contact Us Submitted');
          ga('send', 'event', '[OUW - Paid Search]', '[Submit]', '[Contact Us - Complete]');

          if ($("#contact-form #signup").prop('checked')) {
            ga('send', 'event', 'Newsletter', 'Sign Up', 'Newsletter sign up');
            ga('send', 'event', '[OUW - Paid Search]', '[Sign Up]', '[Newsletter - Complete]');
          }

          $.ajax({
            type: "POST",
            url: submitURL,
            data: formData,
            success: function(result) {

              if (result.gateOpen) {
                window.location.reload(true);
              } else if (result.ok) {
                submitMessage("success", container);
              } else {
                submitMessage("error", container);
              }

            },
            error: function() {
              submitMessage("error", container);
            }
          });

        } // endif
      },
      error: function() {
        submitMessage("error", container);
      },
      complete: function() {
        // re-enable the submit
        $('button[type="submit"]').removeAttr('disabled');

      }
    });
  }

/**
 * Integrated Solutions
 * ------------------------------- */
  var $integratedSlider = $("#integrated-solutions__slider"),
      $integratedSliderNext = $integratedSlider.find(".integrated-solutions__slider__next"),
      $integratedSliderNav = $("#integrated-solutions__slider__nav");

  $integratedSlider.slick({
    arrows: true,
    infinite: false,
    speed: 400,
    swipeToSlide: true,
    slidesToScroll: 1,
    dots: true,
    appendArrows: $integratedSliderNav,
    appendDots: $integratedSliderNav,
    touchThreshold: 50,
    variableWidth: true
  });

  $integratedSliderNext.click(function(event) {
    event.preventDefault();

    $integratedSlider.slick("slickNext");
  });

  $integratedSliderNav.find('.slick-next').appendTo($integratedSliderNav);

/**
 * Accordion
 * ------------------------------- */
  var $accordions = $(".accordion");

  $accordions.on('click', '.accordion__item__nav', function(event) {
    event.preventDefault();
    $(this).toggleClass("opened").siblings('.accordion__item__panel').slideToggle(150);
  });

/**
 * ScrollTo
 * ------------------------------- */
  $('body').on('click', 'a[data-scrollto]', function(event) {
    event.preventDefault();
    var $target = $($(this).data('scrollto'));
    $target.velocity("scroll", {duration: 500, offset: fixedNavHeight});
  });

/**
 * Modals
 * ------------------------------- */
  $('body').on('click', 'a[data-target]', function(event) {
    event.preventDefault();
    var $modalTarget = $($(this).data('target'));
    $modalTarget.addClass('modal--bio--opened');
    $('.modal--bio__main').perfectScrollbar("update");
  });

  $('.modal__close').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.modal__panel').removeClass('modal--bio--opened modal--home--opened');
  });

  $(".modal--home").each(function () {
      window.setTimeout(function ($modal) {

          $modal.addClass('modal--home--opened');

      }, $(this).data("timer")*1000, $(this));
  });

  // Initialize foundation
  $(document).foundation();


})(jQuery);
