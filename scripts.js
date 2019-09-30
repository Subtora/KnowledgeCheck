var title = document.getElementsByClassName("title")[0];
var author = document.getElementsByClassName("author")[0];
var ask = document.getElementsByClassName("ask")[0];
var picknext = document.getElementById('picknext');
var pickprev = document.getElementById('pickprev');
var data;

$.getJSON("data/questions.json", function(json) {
  data = json;
  console.log(data)
});

function setData(index){
  title.innerHTML = data.title;
  author.innerHTML = "By " + data.author;
  ask.innerHTML = data.questions[index].ask;
}

setData(0);
