$(document).ready(function() {

  $('form').submit(function(event){
    event.preventDefault();  
    // Below Function Executes On Form Submit
    function ValidationEvent() {
    // Storing Field Values In Variables
      var email    = document.getElementById("email").value;
      var password = document.getElementById("password").value;
    // Regular Expression For Email
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // Conditions
      if (email != '' && password != '') {
          if (email.match(emailReg)) {
              if (password.length == 8) {
                  alert("All type of validation has done on OnSubmit event.");
                  return true;
              }//end if contact.length == 10
              else {
                  alert("The Contact No. must be at least 8 digit long!");
                  return false;
                      }
          }//end if email.match(emailReg)
          else {
              alert("Invalid Email Address...!!!");
              return false;
          }
      }//end if email != '' && password != ''
      else {
          alert("All fields are required.....!");
          return false;
      }//else email != '' && password != ''
    }//end function ValidationEvent
  });//end $(form).submit
});//document.ready end