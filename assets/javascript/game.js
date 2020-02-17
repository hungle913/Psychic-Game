document.addEventListener("DOMContentLoaded", function(event) { 
    //do work


var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses = 0;
var guesses = 9;

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice);

var userChoice = [];

var winner = document.getElementById("wins");
var loser = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses");
var userGuesses = document.getElementById("userGuesses");


function gameReset() {
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
    document.getElementById("guesses").textContent = "Guesses Left: " + guesses;
    document.getElementById("userGuesses").textContent = "Your Guesses so far: " + userChoice;
    computerChoice;
  }
  



document.onkeyup = function(event) {
    var userGuess = event.key.toLocaleLowerCase();
    userChoice.push(userGuess);
    userGuesses.textContent = userChoice;
    
    if (userGuess === computerChoice) {
        wins++;
        guesses = 9
        userChoice = [];
        gameReset();
        } 
        else { 
        guesses--;
         if (guesses === 0) {
            losses++;
            userChoice = [];
            guesses--;
            gameReset();
            }
        }
    }


});