//EXERCISES1
//1. The first button should open an alert-button, which will say "You clicked me!"
var nappi1 = document.getElementById("button1");

nappi1.addEventListener("click", function () {
  alert("You clicked me!");
  // 2. When you see the button working, add the current date after the text by using the Date() -function.
  alert(new Date());
});

//3.  output a simple HTML-table (below) to the page. Use document.write to print data. Feel free to modify the data on the table.

var nappi2 = document.getElementById("button2");

var taulukko = `<table style="width:100%" border="1" >
<tr>
  <th>Name</th>
  <th>Position</th>
  <th>Salary</th>
</tr>
<tr>
  <td>Tiger</td>
  <td>Garrett Anders</td>
  <td>Ashton</td>
</tr>
<tr>
  <td>System Architect</td>
  <td>Accountant</td>
  <td>COO</td>
</tr>
<tr>
  <td>2000</td>
  <td>25000</td>
  <td>1000</td>
</tr>
</table>`;

nappi2.addEventListener("click", function () {
  document.write(taulukko);
});

// 4.The last button should check Geolocation of the user, and output it to the console and to the page. Note: Some browsers might not allow you to do this. Try different browsers if you get errors.

var x = document.getElementById("paikka");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  console.log(
    "Latitude: " +
      position.coords.latitude +
      " Longitude: " +
      position.coords.longitude
  );
}
//EXERCISES2
// Add an onMouseOver event on the Heading "Exercise 2" of this page. It should fire when the users mouse is moved over it. Output "Stepped over my a mouse!" on the console.

//tein onmouseoverin html sivulle ja lisäsin functionin lisäksi consolelogin sinne
function vari(x) {
  x.style.color = "red";
}

// Add another event, which will fire then the mouse leaves the Exercise 2 -heading. This time show an alert window to the user saying: "Bye bye mouse!" tässä lisäsin edellisestä poiketen consolelogin tänne

//onmouseout htm
function variTakas(x) {
  x.style.color = "#1966a2";
  console.log("Bye mouse!");
}

// Exercise 3
// Below you will see a simple form.

// Add onfocus -event to the textarea below. When the user enters the textarea, it should show a text saying: "Please fill in the form with proper data.". You can try modifying the background color of the box as well.
// Try to use onkeydown -event on the textarea. It should calculate the number of keypresses and output them on the screen. Could you think other smart ways to use it?
// When the form button is clicked, check if the textarea is empty. Notify the user with appropriate message. HINT: You can access the Textarea using the following command: document.getElementById("textdata").value. We will study the forms deeper in Workshops 4 and

var teksti = document.getElementById("textdata");

document.getElementById("textdata").addEventListener("focus", myFunction);

function myFunction() {
  //   document.getElementById("textdata").style.backgroundColor = "red";
  //muuta textarean sisällön väri ja lisää sinne teksti
  teksti.style = "background: red";
  teksti.value = "Please fill in with proper data!";
}

// exercise 4
// Add onMouseMove -event to the DIV-element above. When you move mouse over
// the DIV (rectangle) the program should output the coordinates of your
// pointer. Try first outputting to the console using console.log.

var alue = document.getElementById("coordinates");

document
  .getElementById("coordinates")
  .addEventListener("mousemove", munFunktio);

//The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred
function munFunktio(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  //console.log(coords);
  //HINT: You need to use document.getElementById("coordinates").innerHTML to achieve this.
  document.getElementById("coordinates").innerHTML = coords;
}

//When the program is working, you can try outputting the text on the H2 element with an id "coords"

var nelonen = document.getElementById("coords");

document.getElementById("coords").addEventListener("mousemove", otsikko);

function otsikko(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  //console.log(coords);
  //HINT: You need to use document.getElementById("coordinates").innerHTML to achieve this.
  document.getElementById("coords").innerHTML = coords;
}
