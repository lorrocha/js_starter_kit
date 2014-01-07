var answer = Math.floor(Math.random()*(15 + 1));
var userGuess = 0;
var input = document.getElementById("input-box");


$('.alert-box').html('Hey! Why not guess a number between 0 and 15?');

function getUserGuess() {
  userGuess = document.getElementById("input-box").value;
  document.getElementById("input-box").value="";
  console.log(userGuess);
};

var submitGuess = function() {
  $("#input-box").keypress(function (e) {
    var key = window.event ? e.keyCode : e.which;
    if (key == '13') {
      getUserGuess();
    }
  })
};


// NEEDS THIS TO TRACK/REPEAT THE KEYPRESS TEXT
input.addEventListener("keypress", submitGuess, true)

