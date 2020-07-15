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
            nextArrow: '<button type="button" class="slick-next"><div class="btn__box btn-right"><div class="btn__box-favorite btn-favorites"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.02 19.97"><defs><style>.cls-1{fill:#5b5b5f;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="ВАРИАНТ_4_гибрид_" data-name="ВАРИАНТ 4 (гибрид)"><g id="ГЛАВНАЯ_СТРАНИЦА_копия_" data-name="ГЛАВНАЯ СТРАНИЦА (копия)"><g id="фон_копия_" data-name="фон (копия)"><g id="левая_панель" data-name="левая панель"><path class="cls-1" d="M15.6,0a6.41,6.41,0,0,0-2.92.7A6.74,6.74,0,0,0,11,1.93,6.93,6.93,0,0,0,9.34.7,6.42,6.42,0,0,0,0,6.42c0,2.5,1.32,5.17,3.93,7.91a38.36,38.36,0,0,0,6.71,5.4L11,20l.37-.24a38.34,38.34,0,0,0,6.7-5.4C20.69,11.59,22,8.92,22,6.42A6.43,6.43,0,0,0,15.6,0Z"/></g></g></g></g></g></svg><span class="btn__favorites-disactive">Добавить в избранное</span><span class="btn__favorites--active">Добавлено в избранное</span></div><div class="btn__box-comprassion btn-comparison"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24.96"><defs><style>.cls-1{fill:#5b5b5f;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="ВАРИАНТ_4_гибрид_" data-name="ВАРИАНТ 4 (гибрид)"><g id="ГЛАВНАЯ_СТРАНИЦА_копия_" data-name="ГЛАВНАЯ СТРАНИЦА (копия)"><g id="фон_копия_" data-name="фон (копия)"><g id="левая_панель" data-name="левая панель"><path class="cls-1" d="M7,.08H4.79A4.8,4.8,0,0,0,0,4.87v18A2,2,0,0,0,2.05,25H9.71a2,2,0,0,0,2-2.05v-18A4.8,4.8,0,0,0,7,.08ZM4.34.93A4.09,4.09,0,0,1,.85,4.42,4,4,0,0,1,4.34.93ZM.82,11.65a4.92,4.92,0,0,1,.46-2.1l1.08,1.54a1.17,1.17,0,0,0-.17.61v6a1.14,1.14,0,0,0,.12.52L1.05,20a1.32,1.32,0,0,1-.23-.73ZM3.42,19H8.34a1.18,1.18,0,0,0,.53-.12L10,20.49a1.13,1.13,0,0,1-.32.05H2.05a1.13,1.13,0,0,1-.32-.05l1.16-1.66a1.18,1.18,0,0,0,.53.12Zm5.36-8.4a1.32,1.32,0,0,0-.44-.08H3.42a1.27,1.27,0,0,0-.44.08L1.73,8.76a5.05,5.05,0,0,1,8.3,0Zm2.16,8.75a1.2,1.2,0,0,1-.24.72L9.45,18.24a1.14,1.14,0,0,0,.12-.52v-6a1.17,1.17,0,0,0-.17-.61l1.08-1.54a5.08,5.08,0,0,1,.46,2.1ZM7.59,1a4,4,0,0,1,3.32,3.44A4.11,4.11,0,0,1,7.59,1ZM23.21.08H21a4.8,4.8,0,0,0-4.79,4.79v18A2,2,0,0,0,18.29,25H26A2,2,0,0,0,28,22.91v-18A4.8,4.8,0,0,0,23.21.08Zm3.94,4.31A4.12,4.12,0,0,1,23.83,1a4,4,0,0,1,3.32,3.44ZM20.58.93a4.09,4.09,0,0,1-3.49,3.49A4,4,0,0,1,20.58.93ZM17.06,11.65a5.08,5.08,0,0,1,.46-2.1l1.08,1.54a1.17,1.17,0,0,0-.17.61v6a1.14,1.14,0,0,0,.12.52L17.3,20a1.25,1.25,0,0,1-.24-.73Zm2.6,7.3h4.92a1.18,1.18,0,0,0,.53-.12l1.16,1.66a1.13,1.13,0,0,1-.32.05H18.29a1.13,1.13,0,0,1-.32-.05l1.16-1.66a1.21,1.21,0,0,0,.53.12ZM25,10.55a1.27,1.27,0,0,0-.44-.08H19.66a1.22,1.22,0,0,0-.43.08L18,8.76a5.05,5.05,0,0,1,8.3,0Zm2.16,8.75A1.26,1.26,0,0,1,27,20l-1.26-1.78a1.14,1.14,0,0,0,.12-.52v-6a1.17,1.17,0,0,0-.17-.61l1.08-1.54a4.92,4.92,0,0,1,.46,2.1ZM13.62,0h.82V24.72h-.82Zm-12,22.5h.82v.82H1.61Zm7.71,0h.82v.82H9.32Zm8.65,0h.82v.82H18Zm7.71,0h.82v.82h-.82Z"/></g></g></g></g></g></svg><span class="btn__comparison--hide">Добавить к сравнению</span><span class="btn__comparison--active">Добавлено к сравнению</span></div></div></button>',
            prevArrow: '<button type="button" class="slick-prev"><div class="btn__box btn-left"><div class="btn__box-favorite btn-favorites"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.02 19.97"><defs><style>.cls-1{fill:#5b5b5f;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="ВАРИАНТ_4_гибрид_" data-name="ВАРИАНТ 4 (гибрид)"><g id="ГЛАВНАЯ_СТРАНИЦА_копия_" data-name="ГЛАВНАЯ СТРАНИЦА (копия)"><g id="фон_копия_" data-name="фон (копия)"><g id="левая_панель" data-name="левая панель"><path class="cls-1" d="M15.6,0a6.41,6.41,0,0,0-2.92.7A6.74,6.74,0,0,0,11,1.93,6.93,6.93,0,0,0,9.34.7,6.42,6.42,0,0,0,0,6.42c0,2.5,1.32,5.17,3.93,7.91a38.36,38.36,0,0,0,6.71,5.4L11,20l.37-.24a38.34,38.34,0,0,0,6.7-5.4C20.69,11.59,22,8.92,22,6.42A6.43,6.43,0,0,0,15.6,0Z"/></g></g></g></g></g></svg><span class="btn__favorites-disactive">Добавить в избранное</span><span class="btn__favorites--active">Добавлено в избранное</span></div><div class="btn__box-comprassion btn-comparison"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24.96"><defs><style>.cls-1{fill:#5b5b5f;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="ВАРИАНТ_4_гибрид_" data-name="ВАРИАНТ 4 (гибрид)"><g id="ГЛАВНАЯ_СТРАНИЦА_копия_" data-name="ГЛАВНАЯ СТРАНИЦА (копия)"><g id="фон_копия_" data-name="фон (копия)"><g id="левая_панель" data-name="левая панель"><path class="cls-1" d="M7,.08H4.79A4.8,4.8,0,0,0,0,4.87v18A2,2,0,0,0,2.05,25H9.71a2,2,0,0,0,2-2.05v-18A4.8,4.8,0,0,0,7,.08ZM4.34.93A4.09,4.09,0,0,1,.85,4.42,4,4,0,0,1,4.34.93ZM.82,11.65a4.92,4.92,0,0,1,.46-2.1l1.08,1.54a1.17,1.17,0,0,0-.17.61v6a1.14,1.14,0,0,0,.12.52L1.05,20a1.32,1.32,0,0,1-.23-.73ZM3.42,19H8.34a1.18,1.18,0,0,0,.53-.12L10,20.49a1.13,1.13,0,0,1-.32.05H2.05a1.13,1.13,0,0,1-.32-.05l1.16-1.66a1.18,1.18,0,0,0,.53.12Zm5.36-8.4a1.32,1.32,0,0,0-.44-.08H3.42a1.27,1.27,0,0,0-.44.08L1.73,8.76a5.05,5.05,0,0,1,8.3,0Zm2.16,8.75a1.2,1.2,0,0,1-.24.72L9.45,18.24a1.14,1.14,0,0,0,.12-.52v-6a1.17,1.17,0,0,0-.17-.61l1.08-1.54a5.08,5.08,0,0,1,.46,2.1ZM7.59,1a4,4,0,0,1,3.32,3.44A4.11,4.11,0,0,1,7.59,1ZM23.21.08H21a4.8,4.8,0,0,0-4.79,4.79v18A2,2,0,0,0,18.29,25H26A2,2,0,0,0,28,22.91v-18A4.8,4.8,0,0,0,23.21.08Zm3.94,4.31A4.12,4.12,0,0,1,23.83,1a4,4,0,0,1,3.32,3.44ZM20.58.93a4.09,4.09,0,0,1-3.49,3.49A4,4,0,0,1,20.58.93ZM17.06,11.65a5.08,5.08,0,0,1,.46-2.1l1.08,1.54a1.17,1.17,0,0,0-.17.61v6a1.14,1.14,0,0,0,.12.52L17.3,20a1.25,1.25,0,0,1-.24-.73Zm2.6,7.3h4.92a1.18,1.18,0,0,0,.53-.12l1.16,1.66a1.13,1.13,0,0,1-.32.05H18.29a1.13,1.13,0,0,1-.32-.05l1.16-1.66a1.21,1.21,0,0,0,.53.12ZM25,10.55a1.27,1.27,0,0,0-.44-.08H19.66a1.22,1.22,0,0,0-.43.08L18,8.76a5.05,5.05,0,0,1,8.3,0Zm2.16,8.75A1.26,1.26,0,0,1,27,20l-1.26-1.78a1.14,1.14,0,0,0,.12-.52v-6a1.17,1.17,0,0,0-.17-.61l1.08-1.54a4.92,4.92,0,0,1,.46,2.1ZM13.62,0h.82V24.72h-.82Zm-12,22.5h.82v.82H1.61Zm7.71,0h.82v.82H9.32Zm8.65,0h.82v.82H18Zm7.71,0h.82v.82h-.82Z"/></g></g></g></g></g></svg><span class="btn__comparison--hide">Добавить к сравнению</span><span class="btn__comparison--active">Добавлено к сравнению</span></div></div></button>'
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
      $('#main-advatages__item').show(1000, function(){
        setTimeout(function(){
          $('#main-advatages__item').hide(500);
        }, 2000);
      });

      $('#main-advatages__item').css({'display' : 'flex'});

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
    $('.reviews__item-more').addClass('disactive');
    $('.reviews__items-more').addClass('show');
    $('.reviews__item-hide').addClass('active');
  });
  $('.reviews__item-hide').on('click', function () {
    $('.reviews__item-more').removeClass('disactive');
    $('.reviews__items-more').removeClass('show');
    $('.reviews__item-hide').removeClass('active');
  });

  $('.product__characteristic-btn').on('click', function () {
    $('.product__characteristic-add').toggleClass('hide');
    $('.product__characteristic--active').toggleClass('active');
  });
  

  $('.product__characteristic-comparison').on('click', function () {
    $('.product__characteristic-comparison--hide').toggleClass('hide');
    $('.product__characteristic-comparison--active').toggleClass('active');
    $('.product__characteristic-comparison').toggleClass('active');
    $('.btn-comparison').toggleClass('active');
  });
  $('.btn-comparison').on('click', function () {
    $(this).toggleClass('active');
  });



  $('input[type=checkbox], select, input[type=file]').styler({});

  $(function() {
    $(".product-menu li a").on('click', function () {
      $(".product-menu li a").removeClass('active');
      $(this).addClass('active');
    })
  });
  

  //slider box

  $('.slick-disabled').on('click', function () {
    $(this).addClass('show');
  });
  $('.slick-next, .slick-disabled').on('click', function () {
    $(this).addClass('show');
  });
 
  $('.main__item-slider img').on('click', function () {
    $('.slick-disabled').removeClass('show');
    //$('.slick-prev').removeClass('hide');
  });


  //slider box


});