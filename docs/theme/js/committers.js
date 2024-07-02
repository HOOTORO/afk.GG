$('.contributors img[data-src]').each(function () {
  let src = $.find(this).attr("data-src");
  $.find(src).attr('src', src);
});
