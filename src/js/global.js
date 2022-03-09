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
});

// catalog-drop-elems
$(".catalog-popup__nav-elem").hover(function () {
  $('.catalog-popup__nav-elem').removeClass('active');
  $(this).addClass("active");
  $('.catalog-popup__nav-child-block').removeClass('active');
  $($(this).data("target")).addClass("active");
});

//sort-btn
$(window).click(function () {
  $(".btn_sort").next().removeClass('active')
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
});

//check-sort
$(".sort-block__check").click(function () {
  $('.sort-block__check').removeClass('active');
  $(this).addClass("active");
});

//fixed header
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
});

//fixed-basket

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
  class: 'fixed-basket_shadow',
}));


$('.fixed-basket').click(function (event) {
  event.stopPropagation();
});

//Plugins
$(document).ready(function () {
  $('select').niceSelect();
  Inputmask().mask(document.querySelectorAll("input"));
  $('.open-popup').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  })
});

