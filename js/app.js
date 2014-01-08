var answer = Math.floor(Math.random()*(MAX + 1));
var guessCount = 0;
var MAX = 30

var submitGuess = function() {
  $("#input-box").keypress(function(e) {
    if (e.keyCode == '13') {
      getUserGuess();
    }
  })
};

var newGame = function() {
  answer = Math.floor(Math.random()*(MAX + 1));
  guessCount = 0;
  $(".alert-box").html('Guess a number between 0-20');
  console.log('New Game');
};

$("#newgame").click(function() {
  newGame();
})

var guesstimate = function(num) {
  if (num > answer) {
    return ' is too high!';
  } else {
    return ' is too low!';
  }
};

var compareGuess = function(num) {
  guessCount++;
  if (!parseInt(num)){
    $(".alert-box").html('Invalid input, must enter a number between 0 and ' + MAX + '.');
  } else {
    if (answer == num) {
      $(".alert-box").append('<br><div><b>So rad! You totally won!!</b><br>You won in '+ guessCount + ' tries!</div>');
    } else {
      $(".alert-box").append('<div>Woops! Try again! ' + num + guesstimate(num) + '</div>');
    }
  }
}

var getUserGuess = function() {
  guess =  $('#input-box').val();
  compareGuess(guess);
  $('#input-box').val('');
};

$(document).ready(function(){
  submitGuess();
  newGame();
})

