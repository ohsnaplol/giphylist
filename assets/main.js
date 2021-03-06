var tagArray = ['dog', 'cat', 'hamster'] // default values
var offset = -10 // addGifs makes this start at 0

$(document).ready(function() {
  // fill tags with default values
  for (var i = 0; i < tagArray.length; i++) {
    $('#tagList').append(
      `<button class='btn tagButtons' id='${tagArray[i]}'>
         <img class="close" src="./assets/img/close.gif">
         ${tagArray[i]}
       </button>`)
  }
  // get input and add it to tags array and html
  $('#tagAdder').on('submit', function (event) {
    event.preventDefault()
    inputValue = $('input').val().trim()
    if (!tagArray.includes(inputValue) && inputValue !== '') {
      tagArray.push(inputValue)
      $('#tagList').append(
        `<button class='btn tagButtons' id='${inputValue}'>
           <img class="close" src="./assets/img/close.gif">
             ${inputValue}
         </button>`)
    }
    this.reset()
  })
  // on tag click, shows gifs
  $('#tagList').on('click', '.tagButtons', function() {
    addGifs($(this).attr('id'))
  })
  // when they click the close button, remove the tag (WE SHOULD REMOVE IT FROM OTHER PLACES TOO!)
  $("#tagList").on("click", ".close", function() {
    console.log(`Let's close ${$(this).parent().remove()}`)
  })
  // when clicked,
  $('#gifDisplay').on('click', '.video', function() {
    if (!this.paused) {
      this.pause()
    } else {
      this.play()
    }
  })
})

function addGifs(title) {
  $('#gifDisplay').empty()
  offset += 10
  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${title}&offset=${offset}&rating=pg&limit=10&api_key=dc6zaTOxFJmzC`
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    for (var i = 0; i < 10; i++) {
      $('#gifDisplay').append(`
        <div class='imgDiv'>
          <span class='rating'>Rating: ${response.data[i].rating}</span><br>
          <video class='video' preload='auto' loop='true' src='${response.data[i].images.looping.mp4}'</video>
        </div>
        `)
    }
  })
}
