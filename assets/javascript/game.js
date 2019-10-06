// The specific letters that the user typed.
let computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting for zero
let wins = 0;
let losses = 0;
let guessesLeft = 15;
let letterUser = [];
let eachofLetters = null;
// let key = event.keyCode;
//     return ((key >= 65 && key <= 90) || key == 8)

let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// function alphaOnly(event) {
//     let key = event.keyCode;
//     return ((key >= 65 && key <= 90) || key == 8);
//   };
console.log(computerGuess);

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

function userGuesses() {
    document.querySelector("#letter").innerHTML = "Letters you've already guessed: " + letterUser.join(' ');
    
};

countGuessesLeft();

let restart = function() {
	guessesLeft = 15;
	letterUser = [];
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    console.log(computerGuess);
};

document.onkeyup = function(event) {
	guessesLeft--;

    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
    userGuesses();


	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	}
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		restart();
    };
    
    // for (i = 0; i < computerChoices.length; i++) {
    //     if (losses === 5);
    //     alert("You lost!")
    // }

  };