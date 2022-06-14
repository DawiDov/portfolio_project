const consoleBG = () => {
  if ($(window).scrollTop() === 0) {
    $('#console').css('background', 'blue')
  } else {
    $('#console').css('background', 'red')
  }
}
consoleBG()

$(window).scroll(() => {
  consoleBG()
})

export default consoleBG