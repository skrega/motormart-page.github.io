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
      infinite: false,
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
      variableWidth: true,
      // autoplay: true,
      // speed: 200
      //fade: true
    });
    $('.advatages-slider-adaptive').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      variableWidth: true
    });
    $('.navigation__links-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplay: true,
      speed: 100,
      fade: true,
    });
    $('.navigation__user').on('click', function () {
      $('.user__menu').toggleClass('show');
      $('.menu-background, navigation__user').toggleClass('show');
      $('.user-btn').toggleClass('activ');
    });

    $('.navigation__menu-search').on('click', function () {
      $('.main__search-form').toggleClass('show');
    });
   
    $('.main__head').on('click', function () {
      $('.advatages-slider').toggleClass('show');
    });
    $('.main__head').on('click', function () {
      $('.advatages-slider-adaptive').toggleClass('visible');
      $('.main__items-link').toggleClass('rotate');
    });  
    $('.advanced-search').on('click', function () {
      $('.advanced-row').addClass('show');
      $('.main__form-advanced').addClass('show');
      $('.advanced-search').addClass('rotate');
      $('.advanced-hide').addClass('show');
      $('.advanced-hide').addClass('rotate');
    });
    $('.advanced-search__hide').on('click', function () {
      $('.advanced-row').removeClass('show');
      $('.main__form-advanced').removeClass('show');
      $('.advanced-search').Class('rotate');
    });
    $('.btn-favorites').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.btn-view').on('click', function () {
      $(this).toggleClass('active');
    });


    $('.advanced-hide').on('click', function () {
      $('.advanced-row').removeClass('show');
      $('.advanced-hide').removeClass('show');
      $('.advanced-search').removeClass('rotate');
    });


    $('.navigation__menu-button').on('click', function () {
      $('.navigation__menu-button').toggleClass('active');
      $('.main__search-form').toggleClass('active');
      $('.navigation__menu__wrapper').toggleClass('active');
      $('.main__items').toggleClass('hide');
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

  // $('.product-menu__link').on('click', function () {
  //   $(this).addClass('active');
  // });

  $(function() {
    $(".product-menu li a").on('click', function () {
      $(".product-menu li a").removeClass('active');
      $(this).addClass('active');
    })
  });
  


  $(function() {

    $('input[type=checkbox], select, input[type=file]').styler({});
  
  });



  // $('.main__item-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   console.log(currentSlide); // индекс текущего слайда
  // });

  

  // $('.main__items-inner').scroll(function(){
  //   var docscroll=$('.main__items-inner').scrollTop();
  //   if(docscroll>$('.main__items-inner').height()){
  //     $('.main__items').css({'height': $('.main__items').height(),'width': $('.main__items').width()}).addClass('fixed');
  //   }else{
  //     $('.main__items').removeClass('fixed');
  //   }
  // });
  // $('.main__items-inner').scroll(function(){
  //   if($(this).scrollTop()>140){
  //       $('.main__items').addClass('fixed');
  //   }
  //   else if ($(this).scrollTop()<140){
  //       $('.main__items').removeClass('fixed');
  //   }
  // });

  // const simpleBar = new SimpleBar(document.getElementById('product__main'));
  // simpleBar.getScrollElement().addEventListener('scroll', function(){
  
  // });

  // window.onscroll = function() {
  //   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //   if(scrolled >= 80)
  //     document.querySelector(".block-1").style.display = 'none';
  //     document.querySelector(".block-2").style.display = 'none';
  //     document.querySelector(".block-3").style.width = '100px';
  // }
     
});