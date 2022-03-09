var incrementPlus;
var incrementMinus;

var buttonPlus = $('.increment__plus');
var buttonMinus = $('.increment__minus');

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent(".increment")
    .find(".increment__count");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent(".increment")
    .find(".increment__count");
  var amount = Number($n.val());
  if (amount > 1) {
    $n.val(amount - 1);
  }
});
