var title = document.getElementsByClassName("title")[0];
var author = document.getElementsByClassName("author")[0];

$.getJSON("data/questions.json", function(json) {
  title.innerHTML = json.title;
  author.innerHTML = "By" + json.author;
  console.log(json);
});
