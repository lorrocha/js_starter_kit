var answer = Math.floor(Math.random()*(2 + 1));
var userGuess = 0;
var input = document.getElementById("input-box");

var submitGuess = function() {
  $("#input-box").keypress(function(e) {
    if (e.keyCode == '13') {
      getUserGuess();
    }
  })
};

var compareGuess = function(num) {
  if (answer == num) {
    $(".alert-box").html('So rad!');
  } else {
    $(".alert-box").html('Woops! Try again!' + num);
  }
}

var getUserGuess = function() {
  guess =  $('#input-box').val();
  compareGuess(guess);
  $('#input-box').val('');
};

$(document).ready(function(){
  submitGuess();
})

