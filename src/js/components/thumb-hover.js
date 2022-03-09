$('.product__thumbs').click(function (e) {
  if (e.target.classList.contains('product__thumb')) {
    let src = e.target.querySelector('img').getAttribute('src')
    let srcImg = document.querySelector('.product__img img')
    srcImg.setAttribute('src', src)
  }
})
$('.product__thumb').hover(function (e) {
  if (e.target.classList.contains('product__thumb')) {
    let src = e.target.querySelector('img').getAttribute('src')
    let srcImg = document.querySelector('.product__img img')
    srcImg.setAttribute('src', src)
  }
})
