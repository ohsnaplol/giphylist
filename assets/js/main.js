var tagArray = ["dog", "cat"]

$(document).ready(function() {
  for (var i = 0; i < tagArray.length; i++) {
    addTagToPage(tagArray[i]);
  }

  $("#addBtn").on("click", function () {
    inputValue = $("input").val()
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
  
}

function addTagToPage(title) {
  $("#tagList").append('<button class="btn tagButtons" id="' + title + '">' + title + '</button>');
}
