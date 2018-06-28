/* jshint browser: true */

var randomizer = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myGuess = document.getElementById('my_guess'),
    guessButton = document.getElementById('guess_button'),
    minimumText = document.getElementById('minimum'),
    maximumText = document.getElementById('maximum'),
    MIN = 1,
    MAX = 100,
    theAnswer = randomizer(MIN, MAX);
console.log(`The answer is ${theAnswer}`);

minimumText.innerHTML = MIN;
maximumText.innerHTML = MAX;

guessButton.addEventListener('click', function (event) {
    console.log(event);
    var myGuessValue = parseInt(myGuess.value);
    if (myGuessValue === theAnswer) {
        alert('You guessed it right!');
    } else if (myGuessValue > MAX || myGuessValue < MIN) {
        alert(`You must guess a number of between ${MIN} and ${MAX}.`);
    } else if (myGuessValue > theAnswer) {
        alert('I am sorry. Your guess is too high.');
    } else if (myGuessValue < theAnswer) {
        alert('I am sorry. Your guess is too low.');
    }
}, false);
