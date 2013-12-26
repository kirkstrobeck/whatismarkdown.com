
$(window).load ->
  converter = new Markdown.Converter()
  $('.markdown').html converter.makeHtml($('.markdown').html())
  $('.markdown-container').fadeIn
    start: ->
      $("h1").fitText()

