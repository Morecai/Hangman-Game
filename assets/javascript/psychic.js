var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];


//var updateGuessesLeft = function() {
 
  //document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
//};

var updateLetterToGuess = function() {
  this.letterToGuess = this.alphabetChoices[Math.floor(Math.random() * this.alphabetChoices.length)];
};
var updateGuessesSoFar = function() {
 
  document.getElementById('let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
//updateGuessesLeft();



document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
 // updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.getElementById('wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft === 0){
           
            losses++;
            document.getElementById('losses').innerHTML = "Losses: " + losses;
            reset();
        }
};