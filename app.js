"use strict";
//Store random number in variable
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
//Selectors
const guesses = document.querySelector("#guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
//checkGuess() and setGameOver() components
let guessCount = 1;
let resetButton;
let guessesObj = {
    tries: 0,
};
const checkGuess = () => {
    const userGuess = Number(guessField.value); //Turn input into number
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
const setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    //resetGame() will select result parameters by class, clear their text fields, remove reset button and set variables to initial values ?
    const resetGame = () => {
        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas) {
            resetPara.textContent = "";
        }
        resetButton.remove();
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        // guessesObj = {}; -> a definir
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random() * 100) + 1;
        checkGuess();
    };
    resetButton.addEventListener("click", resetGame);
};
//# sourceMappingURL=app.js.map