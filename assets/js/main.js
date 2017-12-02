var tagArray = ["dog", "cat", "hamster"];

$(document).ready(function() {
  for (var i = 0; i < tagArray.length; i++) {
    $("#tagList").append(`<button class="btn tagButtons" id="${tagArray[i]}">${tagArray[i]}</button>`);
  }

  $("#addBtn").on("click", function () {
    inputValue = $("input").val().trim();
    if (!tagArray.includes(inputValue) && inputValue !== "") {
      $("#tagList").append(`<button class="btn tagButtons" id="${inputValue}">${inputValue}</button>`);
    }
  })

  $("#tagList").on("click", ".tagButtons", function() {
    addGifs($(this).attr("id"));
  });
})

function addGifs(title) {
  $("#gifDisplay").empty();
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&limit=10&api_key=dc6zaTOxFJmzC"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    for (var i = 0; i < 10; i++) {
      $("#gifDisplay").append(`<img class="img-thumbnail" src="${response.data[i].images.original.url}"</img>`);
    }
  });
}
