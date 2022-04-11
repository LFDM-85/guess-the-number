//Selectors
var guesses = document.querySelector("#guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var resetParas = document.querySelectorAll(".resultParas p");
//checkGuess() and setGameOver() components
var guessCount;
var randomNumber;
var resetButton;
var guessesObj = {
    tries: 0
};
//Initial state. Runs at startup and at reset
var begin = function () {
    guessCount = 1;
    resetParas.forEach(function (elem) { return (elem.textContent = ""); });
    resetButton === null || resetButton === void 0 ? void 0 : resetButton.remove();
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    // guessesObj = {}; -> a definir
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
};
begin();
var checkGuess = function () {
    var userGuess = Number(guessField.value); //Turn input into number
    //If guessCount is equal to one show previous guesses?
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guessCount++;
    guesses.textContent += userGuess + ", "; //Increment last user guess to text field
    //Win condition. Returns setGameOver() state
    if (userGuess === randomNumber) {
        // só um = era definir que userGuess seria o mesmo que randomNumber
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        return setGameOver();
    }
    //Loss condition. Should return setGameOver()?
    if (guessCount > 3) {
        lastResult.textContent = "!!!GAME OVER!!!";
        return setGameOver();
    }
    //Else conditions. Used if user input was never the correct answer or guess count is still below 3.
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
    }
    else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
    }
    //Clear guess field and focus
    guessField.value = "";
    guessField.focus();
};
guessSubmit.addEventListener("click", checkGuess);
guessesObj.tries += 1; //Increment guesses in object ?
//GameOver state will disable input fields, create reset button and append it to ??? with ??? classes
var setGameOver = function () {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", begin);
};
