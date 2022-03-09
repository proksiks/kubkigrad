$(window).click(function () {
  $('.category__block_left').removeClass('active')
  $('.category__block_shadow').removeClass('active')
  $('body').removeClass('disabled-scroll')
});

$('.filter-mobile').click(function () {
  $('.category__block_left').toggleClass('active')
  $('.category__block_shadow').toggleClass('active')
  $('body').toggleClass('disabled-scroll')
})

$('.category__block_left').after($('<div>', {
  class: 'category__block_shadow',
}));

$('.filter-mobile').click(function (event) {
  event.stopPropagation();
});

$('.category__block_left').click(function (event) {
  event.stopPropagation();
});
