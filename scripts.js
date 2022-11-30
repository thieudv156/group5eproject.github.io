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



function submitLogin() {
    var loginEmail = document.getElementById("loginName").value;
    var password = document.getElementById("loginPassword").value;
    // if(!loginEmail[0].value) {
    //   return;
    // }

    // if(!password[0].value) {
    //   return;
    // }
    // document.getElementById("frmLogin").frmLogin.submit();
    alert("Thanh cong");
    
}

