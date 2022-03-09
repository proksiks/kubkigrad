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
