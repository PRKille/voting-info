$(document).ready(function(){
  var age = parseInt(prompt("Please enter your age"));

  if (age >= 18) {
    $("#adult").show();
  } else {
    $("#young").show();
  }
});