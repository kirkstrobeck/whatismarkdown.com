(function() {
  $(window).load(function() {
    var converter;

    converter = new Markdown.Converter();
    $('.markdown').html(converter.makeHtml($('.markdown').text()));
    return $('.markdown-container').fadeIn({
      start: function() {
        return $("h1").fitText();
      }
    });
  });

}).call(this);
