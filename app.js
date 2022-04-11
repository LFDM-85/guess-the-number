//Selectors
var guesses = document.querySelector("#guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var resetParas = document.querySelectorAll(".resultParas p");
var guessCount;
var randomNumber;
var resetButton;
var guessesObj = {
    tries: 0,
    wins: 0,
    guesses: []
};
//Initial state. Runs at startup and at game over
var begin = function () {
    guessCount = 1;
    resetParas.forEach(function (elem) { return (elem.textContent = ""); });
    resetButton === null || resetButton === void 0 ? void 0 : resetButton.remove();
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
};
begin();
var checkGuess = function () {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guessCount++;
    guesses.textContent += userGuess + ", ";
    //Win condition
    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        guessesObj.wins += 1;
        return setGameOver();
    }
    //Loss condition
    if (guessCount > 3) {
        lastResult.textContent = "!!!GAME OVER!!!";
        return setGameOver();
    }
    //Else conditions
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
    }
    else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
    }
    guessField.value = "";
    guessField.focus();
};
guessSubmit.addEventListener("click", checkGuess);
//GameOver state
var setGameOver = function () {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", begin);
    guessesObj.tries += 1;
    guessesObj.guesses.push(randomNumber);
};
