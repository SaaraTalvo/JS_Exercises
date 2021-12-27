//Exercise 1: Basic  DOM Manipulation</h2>
// The first button should run a JavaScript-function, which will find the reference to "Workshop 4" heading on this page and change the contents of it to "Modified Heading!".
var otsikko = document.getElementById("otsikko");
var uusiOtsikko = "Modified Heading!";

function changeHeading() {
  otsikko.innerHTML = uusiOtsikko;
}

//The second button should run a function, which will modify the style of the "Exercise 2" heading on this page. JavaScript should change at least the font size, style and color and the background color

function changeHeading2() {
  var otsikko2 = document.getElementById("otsikko2");

  otsikko2.style.color = "white";
  otsikko2.style.fontSize = "15px";
  otsikko2.style.fontFamily = "georgia";
  otsikko2.style.background = "#492828";
}

// The third button should append the following text paragraph after the 4th paragraph tag <p> on the page (without overwriting the current content). Change the background of the entire page as well. Note: The Lorem ipsum text should be in italics. It should also add a logo image of some sort after the text.
//tekstin appending: document.getElementById(‘main-title’).innerHTML += “New title!”

//tagilla otetaan  kaikki paragraphit arrayhyn
var p = document.getElementsByTagName("p");
//otetaan arraysta neljäs paragr.
var neljas = p[3];
//luodaan muuuttuja jossa teksti joka halutaan lisätä toisen tekstin perään
var teksti = `<i>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere
    interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis
    sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae,
    consectetuer et venenatis eget velit.
  </i>`;
//muuttuja jossa luodaan uusi elementti, kuva
var kuva = document.createElement("IMG");

function Kolmas() {
  //yhdistetään teksti neljänteen paragr.
  neljas.innerHTML += teksti;
  document.body.style.backgroundColor = "lightgrey";
  kuva.setAttribute("src", "https://cdn.logo.com/hotlink-ok/logo-social.png");
  kuva.setAttribute("width", "100");
  neljas.appendChild(kuva);
}

//Add onchange -events to following checkboxes.
//First checkbox: Find out which element has been described with the id "me". Change the visibility (display value) of the element to none. What happens?

function hide() {
  // s = document.getElementById("me");
  // s.style.display = "none";
  //ja sama lyhyemmin alla
  document.getElementById("me").style.display = "none";
}

// Second checkbox should return the visibility of the element to a normal state (block).

function show() {
  document.getElementById("me").style.display = "block";
}

// Third checkbox should find the elements with class "surprise" and change the font size to 20.

function change() {
  var yllarit = document.getElementsByClassName("surprise");

  for (var i = 0; i < yllarit.length; ++i) {
    yllarit[i].style.fontSize = "20px";
  }
}

// Write a JavaScript function, which will fire when the pulldown menu item is changed. Show the users choice using alert -box.

// function fire() {
//   alert(document.getElementById("mySelect").value);
// }

// When the mouse is moved on top of the image, a colored border should appear surrounding it. On mouse out, border should disappear

function over() {
  document.getElementById("carimage").style.border = "thick solid #0000FF";
}

function out() {
  document.getElementById("carimage").style.border = "none";
}
// When you have accomplished the above, change the image (id="carimage") below based on the users choice on the pulldown menu below. Find appropriate images from the web.

function fire() {
  var data = document.getElementById("mySelect").value;
  var image = document.getElementById("carimage");
  if (data == "Audi") {
    image.src =
      "http://o.aolcdn.com/commerce/autodata/images/USC70AUC017A021001.jpg";
  } else if (data == "BMW") {
    image.src =
      "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/home/720x720_the-bmw-ix-xdrive50-.jpg.grp-transform/small/720x720_the-bmw-ix-xdrive50-.jpg";
  } else if (data == "Mercedes") {
    image.src =
      "http://st.motortrend.com/uploads/sites/10/2016/09/2017-mercedes-benz-s-class-maybach-s600-sedan-angular-front.png";
  } else if (data == "Volvo") {
    image.src =
      "http://o.aolcdn.com/commerce/autodata/images/USC40VOC172G021001.jpg";
  }
}

// teht 4.

// Move!Select the div with an id "carimage" and move it 200px left and 500px down
var x = document.getElementById("carimage");

//selvitin positionin jotta voin käyttää sitä animaaito funktiossa doMove
// var i = document.getElementById("carimage").offsetLeft;
// console.log(i);

x.style.position = "relative";

function changePosition() {
  x.style.left = -200 + "px";
  x.style.bottom = -500 + "px";
}

// Animate Write a funtion doMove() which will move the image across the screen, or even better: back and forth on the screen. The Interval required has already been added to the onclick -event of the list item.

function doMove() {
  // Find the image, golbaalina yllä

  // Use relative positioning on page, globaalina yllä

  // Store the current value of left position (defined in HTML)
  var left = parseInt(x.style.left);
  x.style.left = left + 10 + "px";
}
// Fade out! Wite a function fadeOut() which will slowly decrease the opacity of the image from 1.0 to 0 making it fade out. The Interval required has already been added to the onclick -event of the list item

function fadeOut() {
  // Store the current value of opacity (defined in HTML) seuraavalla rivillä
  // var opac = parseInt(x.style.opacity); mutta ei sitä tarvittukaan
  // Reduce the value of current opacity by 0.1
  x.style.opacity -= 0.1;
}

// Disappear!Finally, write JavaScript which will remove the image from the page
function remove() {
  x.style.display = "none";
}

//Exercise 5: Tables
// Write a JavaScript function to add rows to a table. Rows can contain preset values.

function insertRows() {
  // var nimi = document.createElement("td");
  // var textnode = document.createTextNode("Saara Talvo");
  // nimi.appendChild(textnode);
  // document.getElementById("data").appendChild(nimi);
  // var nimi = document.createElement("td");
  // var textnode = document.createTextNode("Web Developer");
  // nimi.appendChild(textnode);
  // document.getElementById("data").appendChild(nimi);
  // var nimi = document.createElement("td");
  // var textnode = document.createTextNode("480,000€");
  // nimi.appendChild(textnode);
  // document.getElementById("data").appendChild(nimi);
}

// When your code is working, try reading the content to be added from a set of fields below the table.

//tällä ei voi lisätä kuin yhden rivin tietoja.MITÄ PITÄISI TEHDÄ ETTÄ VOISI LISÄTÄ USEAMMAN?

function insertRows() {
  var nimi = document.createElement("td");
  nimi.innerHTML = document.getElementById("textfield").value;
  document.getElementById("data").appendChild(nimi);

  var nimi2 = document.createElement("td");
  nimi2.innerHTML = document.getElementById("textfield2").value;
  document.getElementById("data").appendChild(nimi2);

  var nimi3 = document.createElement("td");
  nimi3.innerHTML = document.getElementById("textfield3").value;
  document.getElementById("data").appendChild(nimi3);
}

// Bonus exercises for the enthusiastics
// Write a loop, which goes through all the LI tags in the page and replaces them with a <strong> tagged, red text saying "Replaced".

function replace() {
  list = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    list[i].style.color = "red";

    list[i].innerHTML = "&lt;strong&gt;replaced&lt;/strong&gt;";
  }
}

// How would you replace the contents only on the ones with the word ‘Select’ in them?
