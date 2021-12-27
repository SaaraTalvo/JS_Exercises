//evenlisteners
document.getElementById("Fetch").addEventListener("click", parseData);
document.getElementById("Fetch2").addEventListener("click", famous);
document.getElementById("Fetch3").addEventListener("click", parse);
document.getElementById("Fetch3b").addEventListener("click", iltalehti);

function parseData() {
  var quote = document.getElementsByTagName("quote");
  var author = document.getElementsByTagName("author");

  for (var i = 0; i < quote.length; i++) {
    console.log(quote[i].innerHTML);
    console.log(author[i].innerHTML);
  }
}

//exercise2
function famous() {
  //create ajax object
  var xhr = new XMLHttpRequest();

  //specify what to get, here url
  xhr.open(
    "GET",
    " https://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml",
    true
  );

  xhr.onload = function () {
    if (this.status == 200) {
      var quotes = this.responseText;

      //find the div and insert the url data
      for (var i = 0; i < quotes.length; i++) {
        document.getElementById("quotes").innerHTML = quotes;
      }
    }
  };
  xhr.send();
}

//exercise 3
// i made my own div to put the output in, extra table styling in style7.csss
function parse() {
  //create ajax object
  var xhr = new XMLHttpRequest();

  //specify what to get, here url
  xhr.open(
    "GET",
    " https://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml",
    true
  );
  xhr.send();

  //if everything ok
  xhr.onload = function () {
    if (this.status == 200) {
      var xmlDoc = this.responseXML;

      var allQuotes = xmlDoc.getElementsByTagName("quote");
      
      var allAuthors = xmlDoc.getElementsByTagName("author");
      var table = "<table>";
        //"<table>" + "<tr><td><b>Quote</b></td><td><b>Author</b></td></tr>";

      //find the div and insert the url data
      for (var i = 0; i < allQuotes.length; i++) {
        //concatenate the quotes inside the table
        table +=
          "<tr><td>" +
          allQuotes[i].childNodes[0].nodeValue +
          "</td>" +
          "<td>" +
          allAuthors[i].childNodes[0].nodeValue +
          "</td></tr>";
        console.log(table);
      }
      table += "</table>";
      //put it in the div
      document.getElementById("ownTable").innerHTML = table;
    }
  };
}

//exercise 4
function iltalehti() {
  //create ajax object
  var xhr = new XMLHttpRequest();

  //specify what to get, here url
  xhr.open(
    "GET",
    "https://meijastiina.github.io/news_rss_topstories.xml",
    true
  );
  xhr.send();
  //if everything ok
  xhr.onload = function () {
    if (this.status == 200) {
      var xmlDoc = this.responseXML;

      var items = xmlDoc.getElementsByTagName("item");
      var name = "";
      var feedlink = "";
      var item = "";
      var uutiset = "<ul>";

      //find the div and insert the url data
      for (var i = 0; i < items.length; i++) {
        feedlink = items[i].getElementsByTagName("link").item(0)
          .firstChild.nodeValue;
        name = items[i].getElementsByTagName("title").item(0)
          .firstChild.nodeValue;

        //concatenate news to list
        item = "<li>" + name + "</li>";
        item = "<li> <a href='" + feedlink + "'>" + name + "</a></li>";

        uutiset += item;

        uutiset += "</ul>";

        //put it in the div
        document.getElementById("newsfeed").innerHTML = uutiset;
      }
    }
  };
}
