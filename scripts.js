var title = document.getElementsByClassName("title")[0];
var author = document.getElementsByClassName("author")[0];
var ask = document.getElementsByClassName("ask")[0];
var data;
$.getJSON("data/questions.json", function(json) {
  data = json;
});
