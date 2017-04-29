var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
 ];


var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
console.log(computerGuess);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
// var letterToGuess = null;

document.onkeyup = function(event) {
  if (event.key === computerGuess) {
    winGame();
    console.log("You guessed correctly!");
  } else {
    letterGuess(event.key);
    document.getElementById("guessesLeft").innerHTML = "Guesses left:" + guessesLeft;
    if(guessesLeft === 0){
      loseGame();
    }
  }

};

// checked letterGuess functoin
function letterGuess(letter){
  if (guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    guessesLeft--;
    document.getElementById('let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
  } else {
        // document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
    // document.getElementById('let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    // alert("You've already guessed this letter");
  }
}

// win game function
function winGame(){
  // alert("You Win, You must be Psychic!");
  wins++;
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  
  restartGame ();
}
// lose game function
function loseGame(){
  losses++;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  console.log("Sorry, you are not Psychic");
  restartGame();
}
// new game / restart function
function restartGame(){
  guessesLeft = 9;
  guessedLetters = [];
  computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
  console.log(computerGuess);
}
