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
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=dc6zaTOxFJmzC"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var imgel = $("<img>");
    imgel.addClass("imgThumbnail");
    imgel.attr("href", response.data[0].embed_url);
    $("#gifDisplay").append(imgel);
  });
}

function addTagToPage(title) {
  var el = $("<button>");
  el.addClass("btn");
  el.addClass("tagButtons");
  el.attr("id",title);
  el.html(title);
  $("#tagList").append(el);
}
