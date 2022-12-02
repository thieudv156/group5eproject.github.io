// Back on top
// // Get the button
var mybutton = document.getElementById("myBtnOnTop");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Log in form

function validateonSubmit() {
  let self = this; // setup calls to the "this" values of the class described in the constructor

  // add a "submit" event listener to the form
  this.form.addEventListener("submit", (e) => {
      // remove default functionality 
      e.preventDefault();
      var error = 0;
      // loop through the fields and check them against a function for validation
      self.fields.forEach((field) => {
          const input = document.querySelector(`#${field}`);
          if (self.validateFields(input) == false) {
              // if a field does not validate, auto-increment our error integer
              error++;
          }
      });
      // if everything validates, error will be 0 and can continue
      if (error == 0) {
          //do login api here or in this case, just submit the form and set a localStorage item
          localStorage.setItem("auth", 1);
          this.form.submit();
      }
  });
}

function onSignIn() {
  alert("Sign in sucessfully!");
}

function onFeedback() {
  alert("Thanks for your feedback!");
}
