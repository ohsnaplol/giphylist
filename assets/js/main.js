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
})

function addTagToPage(title) {
  $("#tagList").append('<button class="btn" id="' + title + '">' + title + '</button>');
}
