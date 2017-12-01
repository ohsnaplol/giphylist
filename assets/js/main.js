var tagArray = ["dog", "cat"]

$(document).ready(function() {
  for (var i = 0; i < tagArray.length; i++) {
    addTagToPage(tagArray[i]);
  }

  $("#addBtn").on("click", function () {
    inputValue = $("input").val().trim();
    if (!tagArray.includes(inputValue) && inputValue !== "") {
      tagArray.push(inputValue)
      addTagToPage(inputValue);
    }
  })

  $(".tagButtons").on("click", function () {
    addGifs($(this).attr("id"));
  })
})

function addGifs(title) {
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    $(".gifDisplay").append();
    $("#movie-view").html(JSON.stringify(response));
  });
}

function addTagToPage(title) {
  var el = $("<button>");
  el.addClass("btn");
  el.attr("id",title);
  el.html(title);
  $("#tagList").append(el);
}
