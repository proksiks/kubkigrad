"use strict";

// catalog-btn
$('#catalog-btn').click(function () {
  $(this).toggleClass("active");
  $('.catalog-popup').toggleClass("active");
  $('.shadow-block').toggleClass("active");
});
$('.shadow-block').click(function () {
  $('#catalog-btn').toggleClass("active");
  $('.catalog-popup').toggleClass("active");
  $('.shadow-block').toggleClass("active");
}); // catalog-drop-elems

$(".catalog-popup__nav-elem").hover(function () {
  $('.catalog-popup__nav-elem').removeClass('active');
  $(this).addClass("active");
  $('.catalog-popup__nav-child-block').removeClass('active');
  $($(this).data("target")).addClass("active");
}); //sort-btn

$(window).click(function () {
  $(".btn_sort").next().removeClass('active');
});
$(".btn_sort").click(function () {
  $($(this).data("target")).toggleClass("active");
});
$('.btn_sort').click(function (event) {
  event.stopPropagation();
});
$('.btn_sort').next().click(function (event) {
  event.stopPropagation();
});
$(".btn_filter").click(function () {
  $($(this)).toggleClass("active");
});
$(".btn_favorite").click(function () {
  $($(this)).toggleClass("active");
});
$(".grid-switcher__option").click(function () {
  $('.grid-switcher__option').removeClass("active");
  $($(this)).toggleClass("active");
}); //check-sort

$(".sort-block__check").click(function () {
  $('.sort-block__check').removeClass('active');
  $(this).addClass("active");
}); //fixed header

$(function () {
  var header = $(".header");
  var headerFantom = $(".header__fantom");
  var catalogPopup = $(".catalog-popup");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= header.outerHeight()) {
      header.addClass("fixed");
      headerFantom.addClass("active");
      catalogPopup.addClass("fix-head");
    } else {
      header.removeClass("fixed");
      headerFantom.removeClass("active");
      catalogPopup.removeClass("fix-head");
    }
  });
}); //fixed-basket

$(window).click(function () {
  $('.fixed-basket').removeClass("active");
  $('.fixed-basket__icon').removeClass("active");
  $('.fixed-basket__body').removeClass("active");
  $('body').removeClass("hidden");
});
$(".fixed-basket__icon").click(function () {
  $(this).toggleClass("active");
  $('.fixed-basket').toggleClass("active");
  $('.fixed-basket__body').toggleClass("active");
  $('body').toggleClass("hidden");
});
$('.fixed-basket').after($('<div>', {
  "class": 'fixed-basket_shadow'
}));
$('.fixed-basket').click(function (event) {
  event.stopPropagation();
}); //Plugins

$(document).ready(function () {
  $('select').niceSelect();
  Inputmask().mask(document.querySelectorAll("input"));
  $('.open-popup').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});
"use strict";

$(function () {
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("active")) {
      $(".accordion__contentt").slideUp(300);
      $(".accordion__title").removeClass("active");
    }

    $this.toggleClass("active");
    $this.next().slideToggle(200);
  });
});
"use strict";

// go to previosly page
$('.breadcrumbs__back').click(function () {
  window.history.back();
});
"use strict";

var incrementPlus;
var incrementMinus;
var buttonPlus = $('.increment__plus');
var buttonMinus = $('.increment__minus');
var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent(".increment").find(".increment__count");
  $n.val(Number($n.val()) + 1);
});
var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent(".increment").find(".increment__count");
  var amount = Number($n.val());

  if (amount > 1) {
    $n.val(amount - 1);
  }
});
"use strict";

$(window).click(function () {
  $('.category__block_left').removeClass('active');
  $('.category__block_shadow').removeClass('active');
  $('body').removeClass('disabled-scroll');
});
$('.filter-mobile').click(function () {
  $('.category__block_left').toggleClass('active');
  $('.category__block_shadow').toggleClass('active');
  $('body').toggleClass('disabled-scroll');
});
$('.category__block_left').after($('<div>', {
  "class": 'category__block_shadow'
}));
$('.filter-mobile').click(function (event) {
  event.stopPropagation();
});
$('.category__block_left').click(function (event) {
  event.stopPropagation();
});
"use strict";

$('.product__btn').click(function () {
  if ($('.product__btn').hasClass('active')) {
    $('.product__btn').removeClass('active');
  }

  $(this).toggleClass('active');
});
"use strict";

$('.btn-grid-switcher').click(function () {
  var currentSvg = $('.switcher__btn-icon');
  currentSvg.toggleClass('active');
  var grid = $('.grid-switcher');
  grid.toggleClass('grid');
  grid.toggleClass('block');
});
"use strict";

$('.product__thumbs').click(function (e) {
  if (e.target.classList.contains('product__thumb')) {
    var src = e.target.querySelector('img').getAttribute('src');
    var srcImg = document.querySelector('.product__img img');
    srcImg.setAttribute('src', src);
  }
});
$('.product__thumb').hover(function (e) {
  if (e.target.classList.contains('product__thumb')) {
    var src = e.target.querySelector('img').getAttribute('src');
    var srcImg = document.querySelector('.product__img img');
    srcImg.setAttribute('src', src);
  }
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
