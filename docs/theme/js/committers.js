$('.contributors img[data-src]').each(function () {
  let src = $(this).attr("data-src");
  $.find(src).attr('src', src);
});
