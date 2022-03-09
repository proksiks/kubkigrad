$('.product__btn').click(function () {
  if ($('.product__btn').hasClass('active')) {
    $('.product__btn').removeClass('active')
  }
  $(this).toggleClass('active')
})
