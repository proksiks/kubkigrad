$('.btn-grid-switcher').click(function () {
  let currentSvg = $('.switcher__btn-icon')
  currentSvg.toggleClass('active')

  let grid = $('.grid-switcher')
  grid.toggleClass('grid')
  grid.toggleClass('block')
})
