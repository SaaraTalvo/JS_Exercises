//Exercise 1: Contact Form

// Below you see a simple contact form which has fields for email address and comments.

// a) Write JavaScript code which checks the input fields when the form submit-button is clicked. Display the entered values with alert -dialogs. Use onsubmit-event on the form tag. Make sure that your code cancels the submission of the form if needed. Hint: See the PowerPoint -slides.

// b) Enhance the code and write if-statements to check the following: the length of email address should be atleast 6 and less than 15. CHANGED IT TO 29, BEACAUSE NO ONE HAS AN EMAIL THAT SHORT! It should also have a @ - character. Check also that the comment field is not be empty and the content should be trimmed down to 50 characters. Utilize JavaScript String-methods.

// c) Should an error occur, highlight the erroneous field and provide some feedback to the user. Preferably by displaying some text message on the page, next to the input field. See the lecture slides for demo.

function validateForm() {
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;
  //kommentti lyhennetään 50 char, MIKSI TÄHÄN LAITETAAN 0-50, EIKÄ 0-49?
  var comment = comment.slice(0, 50);
  if (email == null || email == "" || email.length < 6 || email.length > 29) {
    //ekaksi span kenttään html:ssä laitetaan teksti: täytä kunnolla
    document.getElementById("feedbackEmail").innerHTML =
      "Please fill in your e-mail";
    return false;
  }
  if (comment == null || comment == "") {
    document.getElementById("feedbackComment").innerHTML =
      "Please fill in your comment";
    return false;
  }
  alert("Your email: " + email);
  alert(comment);
}

// Exercise 2: Membership Calculator
// Below there is a membership calculator form. It has 3 fields: Membership Type (pulldown), Years (input) and Costs (input). User can use the pulldown to select which plan user wants to choose (Basic = 10€, Premium=15€, Gold=20€) and then enter the number of years he wants to pay for.

// Update the code of the form so that:

// a) the Costs-field should display the total costs of the subscription

// b) If the user chooses to pay for more than 2 years, he will get a 20% discount. Notify the user when he is eligible to get the discount, by showing a text next to form.

// c) Should he pay for 5 years or more, he will get the normal 20% discount, but will also be given an extra 5€ discount with a special greetings text on screen.

function submit() {
  // var type = document.getElementById("type").value;
  // //nappaa siitä ainoastaan neljä viimeistä char
  // console.log("type");

  // var years = document.getElementById("years").value;
  // console.log(years);
  // var cost = type + years
  // console.log(cost);
  console.log("pööööö");
}
