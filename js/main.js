$(function () {

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });

    $('.product__tabs .tab, .finance__tabs, .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.product__tabs, .finance__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product__tabs .tabs, .finance__tabs, .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
    });

    $('.js-tab-trigger').click(function() {
      var id = $(this).attr('data-tab'),
          content = $('.js-tab-content[data-tab="'+ id +'"]');
      
      $('.js-tab-trigger.active').removeClass('active');
      $(this).addClass('active');
      
      $('.js-tab-content.active').removeClass('active').hide();
      content.addClass('active').fadeIn();
    });

    $('.calculator-tab').click(function() {
      var id = $(this).attr('data-tab'),
          content = $('.calculator-tab-item[data-tab="'+ id +'"]');
      
      $('.calculator-tab.active').removeClass('active');
      $(this).addClass('active');
      
      $('.calculator-tab-item.active').removeClass('active').hide();
      content.addClass('active').fadeIn();
    });

    $('.tab__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      asNavFor: '.tab__slider-nav'
    });

    $('.tab__slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.tab__slider',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 378,
          settings: {
            slidesToShow: 3,
          }
        },
      ]
    });
    $('.main__item-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            arrows: true,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>'
          }
        },
      ]
    });
    
    $('.advatages-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      variableWidth: true
    });
    $('.advatages-slider-adaptive').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      variableWidth: true
    });


    $('.navigation__menu-search').on('click', function () {
      $('.main__search-form').toggleClass('show');
      // $('.main__items-link').toggleClass('rotate');
    });
   
    $('.main__items-link').on('click', function () {
      $('.advatages-slider').toggleClass('show');
      $('.main__items-link').toggleClass('rotate');
    });
    $('.main__items-link').on('click', function () {
      $('.advatages-slider-adaptive').toggleClass('visible');
      $('.main__head').toggleClass('hide');
      $('.main__items-link').toggleClass('rotate');
    });
    $('.main__items-link').on('click', function () {
      $('.main__items-link').toggleClass('rotate');
    });
    
    $('.advanced-search').on('click', function () {
      $('.advanced-row').toggleClass('show');
      $('.advanced-search').toggleClass('rotate');
    });

    $('.btn-favorites').on('click', function () {
      $('.btn-favorites').toggleClass('active');
    });

    $('.btn-comparison').on('click', function () {
      $('.btn-comparison').toggleClass('active');
    });


    $('.navigation__menu-button').on('click', function () {
      $('.navigation__menu-button').toggleClass('active');
      $('.main__search-form').toggleClass('active');
    });


    $('.nav-card').on('click', function () {
      $(this).toggleClass('show');
    });

  $('.reviews__item-like').on('click', function(){
    $(this).addClass('active');
    $('.reviews__item-dislike').removeClass('active');
  });

  $('.reviews__item-dislike').on('click', function(){
    $(this).addClass('active');
    $('.reviews__item-like').removeClass('active');
  });
  $('.reviews__item-more').on('click', function () {
    $('.reviews__item-more').toggleClass('inactive');
    $('.reviews__items-more').toggleClass('show');
  });

  $(function() {

    $('input[type=checkbox], select, input[type=file]').styler({});
  
  });
   
  });