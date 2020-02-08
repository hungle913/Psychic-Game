var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses = 0;
var guesses = 9;

var winner = document.getElementById("wins");
var loser = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses");
var userGuesses = document.getElementById("userGuesses");

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);

var userChoice = [];

function gameReset() {
    winner.textContent = wins;
    guessesLeft.textContent = guesses;
    loser.textContent = losses;
  }
  
  gameReset();
