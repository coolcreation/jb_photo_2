// Jeff Bohn  1/20/2021  

"use strict";

$('#contact').on('click', function() {

  let email = prompt("Please enter your email", "someone@mail");

  alert(`Thank you for your submission, ${email}`);

}); 

